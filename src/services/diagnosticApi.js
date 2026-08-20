/**
 * Nitaq Academy — SAT Diagnostic API Client
 * All API calls to the FastAPI backend, centralized here.
 */

const API_BASE = import.meta.env.VITE_API_URL || '/api/v1';

class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
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
      detail = body.detail || JSON.stringify(body);
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
  return request('/admin/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
}

export async function adminLogout() {
  return request('/admin/logout', { method: 'POST' });
}

export async function getAdminMe() {
  return request('/admin/me');
}

// ── Admin Analytics ───────────────────────────────────────────────────────────
export async function getAnalyticsSummary() {
  return request('/admin/analytics/summary');
}

export async function getStudentsList({ status, lead_status, skip = 0, limit = 50 } = {}) {
  const params = new URLSearchParams({ skip, limit });
  if (status) params.set('status_filter', status);
  if (lead_status) params.set('lead_filter', lead_status);
  return request(`/admin/students?${params}`);
}

export async function getStudentResult(sessionId) {
  return request(`/admin/students/${sessionId}/result`);
}

export async function updateLeadStatus(sessionId, leadStatus) {
  return request(`/admin/students/${sessionId}/lead-status`, {
    method: 'PATCH',
    body: JSON.stringify({ lead_status: leadStatus }),
  });
}

export function getExportCsvUrl() {
  return `${API_BASE}/admin/students/export/csv`;
}

// ── Admin Questions ───────────────────────────────────────────────────────────
export async function listQuestions({ section, domain } = {}) {
  const params = new URLSearchParams();
  if (section) params.set('section', section);
  if (domain) params.set('domain', domain);
  const queryStr = params.toString();
  return request(`/admin/questions${queryStr ? '?' + queryStr : ''}`);
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

export { ApiError };
