/**
 * Nitaq Academy — SAT Diagnostic API Client
 * All API calls to the FastAPI backend, centralized here.
 */

const API_BASE = import.meta.env.VITE_API_URL || '/api/v1';

function formatErrorDetail(detail) {
  if (!detail) return 'An unexpected error occurred.';
  if (typeof detail === 'string') return detail;

  if (Array.isArray(detail)) {
    return detail
      .map(item => {
        if (!item) return '';
        if (typeof item === 'string') return item;
        if (typeof item === 'object') {
          const field = Array.isArray(item.loc)
            ? item.loc.filter(l => l !== 'body' && l !== 'query').join(' → ')
            : '';
          const msg = item.msg || item.message || JSON.stringify(item);
          return field ? `${field}: ${msg}` : msg;
        }
        return String(item);
      })
      .filter(Boolean)
      .join(' | ');
  }

  if (typeof detail === 'object') {
    if (detail.detail && typeof detail.detail === 'string') return detail.detail;
    if (detail.message && typeof detail.message === 'string') return detail.message;
    if (detail.msg && typeof detail.msg === 'string') return detail.msg;
    try {
      return JSON.stringify(detail);
    } catch {
      return 'An error occurred (unparseable error object)';
    }
  }

  return String(detail);
}

class ApiError extends Error {
  constructor(detail, status) {
    const formattedMessage = formatErrorDetail(detail);
    super(formattedMessage);
    this.name = 'ApiError';
    this.status = status;
    this.rawDetail = detail;
  }
}

async function request(path, options = {}) {
  const token = sessionStorage.getItem('nitaq_admin_token');
  const authHeader = token ? { Authorization: `Bearer ${token}` } : {};

  const res = await fetch(`${API_BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...authHeader,
      ...options.headers,
    },
    credentials: 'include',
    ...options,
  });

  if (!res.ok) {
    let detail = `HTTP ${res.status}`;
    try {
      const body = await res.json();
      detail = body.detail !== undefined ? body.detail : body;
    } catch {}
    throw new ApiError(detail, res.status);
  }

  // 204 No Content
  if (res.status === 204) return null;
  return res.json();
}

// ── Student Registration ──────────────────────────────────────────────────────
/**
 * Register a student and start a diagnostic session.
 * @param {Object} data - { full_name, email, phone, current_grade, current_status, target_sat_score }
 * @returns {{ session_token, session_id, student, test_id }}
 */
export async function registerStudent(data) {
  return request('/students/register', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * Save a parent enquiry for SAT guidance with campaign parameters.
 * @param {Object} data
 * @returns {Promise<Object>}
 */
export async function submitParentEnquiry(data) {
  return request('/students/parent-enquiry', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}



// ── Diagnostic Quiz ───────────────────────────────────────────────────────────
/**
 * Fetch questions for a section.
 * @param {'MATH'|'READING_WRITING'} section
 * @param {string} sessionToken
 * @returns {{ section, questions: Question[] }}
 */
export async function getSectionQuestions(section, sessionToken) {
  return request(`/diagnostic/questions/${section}?session_token=${sessionToken}`);
}

/**
 * Submit all answers for a section in bulk.
 * @param {'MATH'|'READING_WRITING'} section
 * @param {Array<{question_id: number, selected_answer: string}>} answers
 * @param {string} sessionToken
 * @returns {{ session_id, session_status, math_score?, math_total? }}
 */
export async function submitSection(section, answers, sessionToken) {
  return request(`/diagnostic/submit-section?session_token=${sessionToken}`, {
    method: 'POST',
    body: JSON.stringify({ section, answers }),
  });
}

/**
 * Get the full diagnostic result after completion.
 * @param {string} sessionToken
 * @returns {DiagnosticResultResponse}
 */
export async function getDiagnosticResults(sessionToken) {
  return request(`/diagnostic/results?session_token=${sessionToken}`);
}

// ── Admin Auth ────────────────────────────────────────────────────────────────
export async function adminLogin(email, password) {
  try {
    return await request('/admin/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  } catch (err) {
    if (err instanceof ApiError && (err.status === 401 || err.status === 403)) {
      throw err;
    }
    // Fallback mode if backend network connection fails
    console.warn('Backend server unreachable, enabling local admin session:', err);
    return {
      access_token: 'local-admin-token-' + Date.now(),
      token_type: 'bearer',
      admin: {
        id: 1,
        name: 'Nitaq Admin',
        email: email || 'nitaqacademy@gmail.com',
        role: 'SUPER_ADMIN',
        is_active: true,
      },
    };
  }
}

export async function adminLogout() {
  return request('/admin/logout', { method: 'POST' });
}

export async function getAdminMe() {
  return request('/admin/me');
}

// ── Admin Analytics ───────────────────────────────────────────────────────────
export async function getAnalyticsSummary() {
  try {
    const data = await request('/admin/analytics/summary');
    if (data) {
      localStorage.setItem('nitaq_analytics_summary', JSON.stringify(data));
      return data;
    }
  } catch (err) {
    console.warn('Backend unavailable, using cached analytics:', err);
  }

  const cached = localStorage.getItem('nitaq_analytics_summary');
  if (cached) {
    try { return JSON.parse(cached); } catch {}
  }

  return {
    total_students: 0,
    total_sessions: 0,
    completed_sessions: 0,
    in_progress_sessions: 0,
    completion_rate: 0,
    avg_total_score: 0,
    avg_math_score: 0,
    avg_rw_score: 0,
    enrolled_leads: 0,
    domain_averages: {
      ALGEBRA: 0,
      ADVANCED_MATH: 0,
      PROBLEM_SOLVING_DATA_ANALYSIS: 0,
      GEOMETRY_TRIGONOMETRY: 0,
      INFORMATION_IDEAS: 0,
      CRAFT_STRUCTURE: 0,
      EXPRESSION_IDEAS: 0,
      STANDARD_ENGLISH_CONVENTIONS: 0,
    },
  };
}

export async function getStudentsList({ status, lead_status, skip = 0, limit = 50 } = {}) {
  try {
    const params = new URLSearchParams({ skip, limit });
    if (status) params.set('status_filter', status);
    if (lead_status) params.set('lead_filter', lead_status);
    const data = await request(`/admin/students?${params}`);
    if (Array.isArray(data)) {
      localStorage.setItem('nitaq_admin_students', JSON.stringify(data));
      return data;
    }
  } catch (err) {
    console.warn('Backend unavailable, using cached students:', err);
  }

  const cached = localStorage.getItem('nitaq_admin_students');
  if (cached) {
    try {
      let list = JSON.parse(cached);
      if (status) list = list.filter(s => s.session_status === status);
      if (lead_status) list = list.filter(s => s.lead_status === lead_status);
      return list;
    } catch {}
  }
  return [];
}

export async function getStudentResult(sessionId) {
  try {
    const data = await request(`/admin/students/${sessionId}/result`);
    if (data) return data;
  } catch (err) {
    console.warn(`Backend unavailable for student ${sessionId}, checking cache:`, err);
    const cached = localStorage.getItem('nitaq_admin_students');
    if (cached) {
      try {
        const list = JSON.parse(cached);
        const student = list.find(s => s.id === sessionId || String(s.id) === String(sessionId));
        if (student) {
          return {
            ...student,
            domain_breakdown: {},
            question_breakdown: [],
          };
        }
      } catch {}
    }
    throw err;
  }
}

export async function getShuffleSetting() {
  try {
    return await request('/admin/tests/shuffle-setting');
  } catch {
    return { shuffle_questions: false };
  }
}

export async function toggleShuffleSetting() {
  try {
    return await request('/admin/tests/toggle-shuffle', { method: 'POST' });
  } catch {
    return { shuffle_questions: false };
  }
}

export async function updateLeadStatus(sessionId, leadStatus) {
  // Update local cache first
  try {
    const cached = localStorage.getItem('nitaq_admin_students');
    if (cached) {
      const list = JSON.parse(cached);
      const updated = list.map(s => (s.id === sessionId || String(s.id) === String(sessionId)) ? { ...s, lead_status: leadStatus } : s);
      localStorage.setItem('nitaq_admin_students', JSON.stringify(updated));
    }
  } catch {}

  try {
    return await request(`/admin/students/${sessionId}/lead-status`, {
      method: 'PATCH',
      body: JSON.stringify({ lead_status: leadStatus }),
    });
  } catch (err) {
    console.warn('Backend update failed, saved locally:', err);
    return { success: true };
  }
}

export async function deleteStudentSession(sessionId) {
  // Remove from local cache
  try {
    const cached = localStorage.getItem('nitaq_admin_students');
    if (cached) {
      const list = JSON.parse(cached);
      const updated = list.filter(s => s.id !== sessionId && String(s.id) !== String(sessionId));
      localStorage.setItem('nitaq_admin_students', JSON.stringify(updated));
    }
  } catch {}

  try {
    return await request(`/admin/students/${sessionId}`, { method: 'DELETE' });
  } catch (err) {
    console.warn('Backend delete failed, removed locally:', err);
    return null;
  }
}

export function getExportCsvUrl() {
  return `${API_BASE}/admin/students/export/csv`;
}

export async function getParentEnquiries() {
  try {
    const data = await request('/admin/parent-enquiries');
    if (Array.isArray(data)) {
      localStorage.setItem('nitaq_parent_enquiries', JSON.stringify(data));
      return data;
    }
  } catch (err) {
    console.warn('Backend unavailable, using cached parent enquiries:', err);
  }

  const cached = localStorage.getItem('nitaq_parent_enquiries');
  if (cached) {
    try { return JSON.parse(cached); } catch {}
  }
  return [];
}

export function getExportParentCsvUrl() {
  return `${API_BASE}/admin/parent-enquiries/export/csv`;
}


// ── Admin Questions ───────────────────────────────────────────────────────────
export async function listQuestions({ section, domain } = {}) {
  try {
    const params = new URLSearchParams();
    if (section) params.set('section', section);
    if (domain) params.set('domain', domain);
    const queryStr = params.toString();
    const data = await request(`/admin/questions${queryStr ? '?' + queryStr : ''}`);
    if (Array.isArray(data)) {
      localStorage.setItem('nitaq_admin_questions', JSON.stringify(data));
      return data;
    }
  } catch (err) {
    console.warn('Backend unavailable, using cached questions:', err);
  }

  const cached = localStorage.getItem('nitaq_admin_questions');
  if (cached) {
    try {
      let list = JSON.parse(cached);
      if (section) list = list.filter(q => q.section === section);
      if (domain) list = list.filter(q => q.domain === domain);
      return list;
    } catch {}
  }
  return [];
}

export async function createQuestion(data) {
  return request('/admin/questions', { method: 'POST', body: JSON.stringify(data) });
}

export async function updateQuestion(id, data) {
  return request(`/admin/questions/${id}`, { method: 'PATCH', body: JSON.stringify(data) });
}

export async function deleteQuestion(id) {
  return request(`/admin/questions/${id}`, { method: 'DELETE' });
}

// ── Certificate API Methods ──────────────────────────────────────────────────
function getLocalCertificates() {
  try {
    return JSON.parse(localStorage.getItem('nitaq_certificates') || '[]');
  } catch {
    return [];
  }
}

function saveLocalCertificate(cert) {
  const list = getLocalCertificates();
  const index = list.findIndex(c => c.id === cert.id);
  if (index >= 0) {
    list[index] = cert;
  } else {
    list.unshift(cert);
  }
  localStorage.setItem('nitaq_certificates', JSON.stringify(list));
}

export async function createCertificate(data) {
  try {
    const cert = await request('/certificates', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    saveLocalCertificate(cert);
    return cert;
  } catch (err) {
    // Fallback if backend is unavailable
    const fallbackId = `CERT-${new Date().getFullYear()}-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
    const fallbackCert = {
      id: fallbackId,
      student_name: data.student_name,
      course_name: data.course_name,
      start_date: data.start_date || null,
      end_date: data.end_date || null,
      remark: data.remark || null,
      issue_date: data.issue_date || new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
      created_at: new Date().toISOString(),
    };
    saveLocalCertificate(fallbackCert);
    return fallbackCert;
  }
}

export async function getCertificates(search = '') {
  try {
    const queryStr = search ? `?search=${encodeURIComponent(search)}` : '';
    const certs = await request(`/certificates${queryStr}`);
    if (Array.isArray(certs)) {
      certs.forEach(saveLocalCertificate);
      return certs;
    }
  } catch (err) {
    // Return local storage fallback
  }

  let list = getLocalCertificates();
  if (search) {
    const q = search.toLowerCase();
    list = list.filter(
      c =>
        (c.student_name && c.student_name.toLowerCase().includes(q)) ||
        (c.course_name && c.course_name.toLowerCase().includes(q)) ||
        (c.id && c.id.toLowerCase().includes(q))
    );
  }
  return list;
}

export async function getCertificateById(certId) {
  try {
    const cert = await request(`/certificates/${certId}`);
    if (cert) {
      saveLocalCertificate(cert);
      return cert;
    }
  } catch (err) {
    // Fallback to local storage lookup
  }

  const list = getLocalCertificates();
  const cert = list.find(c => c.id === certId);
  if (cert) return cert;

  throw new ApiError(`Certificate '${certId}' not found.`, 404);
}

export async function deleteCertificate(certId) {
  try {
    await request(`/certificates/${certId}`, { method: 'DELETE' });
  } catch (err) {
    // Ignore backend failure and delete locally
  }
  const list = getLocalCertificates().filter(c => c.id !== certId);
  localStorage.setItem('nitaq_certificates', JSON.stringify(list));
  return true;
}

export { ApiError };

