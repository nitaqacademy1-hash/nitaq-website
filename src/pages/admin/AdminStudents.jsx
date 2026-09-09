/**
 * AdminStudents.jsx — Minimalist student sessions and parent guidance enquiries table.
 * Compact typography, clean monochrome badges, tabbed switcher for Student vs Parent enquiries.
 */

import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getStudentsList,
  getParentEnquiries,
  updateLeadStatus,
  deleteStudentSession,
  getExportCsvUrl,
  getExportParentCsvUrl,
  ApiError
} from '../../services/diagnosticApi';
import '../sat/sat.css';

const STATUS_OPTIONS = ['', 'NOT_STARTED', 'IN_PROGRESS', 'MATH_COMPLETED', 'COMPLETED', 'ABANDONED'];
const LEAD_OPTIONS = ['', 'NEW', 'COMPLETED', 'CONTACTED', 'COUNSELING', 'ENROLLED', 'NOT_INTERESTED'];

function LeadSelector({ sessionId, currentStatus, onUpdate }) {
  const [value, setValue] = useState(currentStatus);
  const [saving, setSaving] = useState(false);

  const handleChange = async (e) => {
    const newStatus = e.target.value;
    setValue(newStatus);
    setSaving(true);
    try {
      await updateLeadStatus(sessionId, newStatus);
      onUpdate(sessionId, newStatus);
    } catch {
      setValue(currentStatus);
    } finally {
      setSaving(false);
    }
  };

  const getStyle = (val) => {
    switch (val) {
      case 'ENROLLED': return { bg: '#ECFDF5', text: '#047857', border: '#A7F3D0' };
      case 'COMPLETED': return { bg: '#F0FDF4', text: '#15803D', border: '#BBF7D0' };
      case 'CONTACTED': return { bg: '#EFF6FF', text: '#1D4ED8', border: '#BFDBFE' };
      case 'COUNSELING': return { bg: '#FFF7ED', text: '#C2410C', border: '#FFD8A8' };
      case 'NOT_INTERESTED': return { bg: '#F1F5F9', text: '#64748B', border: '#CBD5E1' };
      default: return { bg: '#F8FAFC', text: '#0F172A', border: '#CBD5E1' };
    }
  };

  const styleConfig = getStyle(value);

  return (
    <select
      value={value}
      onChange={handleChange}
      disabled={saving}
      style={{
        background: styleConfig.bg,
        color: styleConfig.text,
        border: `1px solid ${styleConfig.border}`,
        borderRadius: '8px',
        padding: '5px 10px',
        fontSize: '0.75rem',
        fontWeight: 700,
        fontFamily: 'inherit',
        cursor: 'pointer',
        outline: 'none',
        transition: 'all 0.15s ease',
      }}
    >
      {LEAD_OPTIONS.filter(Boolean).map(opt => (
        <option key={opt} value={opt} style={{ background: '#ffffff', color: '#0F172A' }}>
          {opt.replace(/_/g, ' ')}
        </option>
      ))}
    </select>
  );
}

export default function AdminStudents() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('STUDENTS'); // 'STUDENTS' | 'PARENTS'
  const [sessions, setSessions] = useState([]);
  const [parentEnquiries, setParentEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [error, setError] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [leadFilter, setLeadFilter] = useState('');
  const [search, setSearch] = useState('');

  const loadData = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      if (activeTab === 'STUDENTS') {
        const data = await getStudentsList({
          status: statusFilter || undefined,
          lead_status: leadFilter || undefined,
          limit: 200,
        });
        setSessions(data);
      } else {
        const data = await getParentEnquiries();
        setParentEnquiries(data);
      }
    } catch (e) {
      setError(e instanceof ApiError ? e.message : 'Failed to load records');
    } finally {
      setLoading(false);
    }
  }, [activeTab, statusFilter, leadFilter]);

  useEffect(() => { loadData(); }, [loadData]);

  const handleLeadUpdate = (sessionId, newStatus) => {
    setSessions(prev => prev.map(s =>
      s.id === sessionId ? { ...s, lead_status: newStatus } : s
    ));
  };

  const handleDeleteStudent = async (id, name) => {
    if (!window.confirm(`Delete record for student "${name}" (#${id})? This will permanently remove their diagnostic test results.`)) return;
    setDeletingId(id);
    try {
      await deleteStudentSession(id);
      setSessions(prev => prev.filter(s => s.id !== id));
    } catch (e) {
      alert(e instanceof ApiError ? e.message : 'Delete failed');
    } finally {
      setDeletingId(null);
    }
  };

  const filteredSessions = sessions.filter(s => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      s.student_name.toLowerCase().includes(q) ||
      s.student_email.toLowerCase().includes(q) ||
      s.student_phone.includes(q)
    );
  });

  const filteredParentEnquiries = parentEnquiries.filter(p => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      p.parent_name.toLowerCase().includes(q) ||
      (p.email && p.email.toLowerCase().includes(q)) ||
      p.phone.includes(q) ||
      p.area_of_residence.toLowerCase().includes(q)
    );
  });

  const formatDate = (iso) => {
    if (!iso) return '—';
    return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div>
      {/* Header & Segmented Tabs */}
      <div className="admin-students-header" style={{ marginBottom: '24px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px', flexWrap: 'wrap' }}>
            <h1 style={{ fontFamily: 'var(--font-heading, sans-serif)', fontSize: '1.45rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', margin: 0, wordBreak: 'break-word' }}>
              SAT Diagnostic &amp; Parent Leads
            </h1>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, background: '#F1F5F9', color: '#475569', padding: '3px 10px', borderRadius: '100px', border: '1px solid #E2E8F0', whiteSpace: 'nowrap' }}>
              {activeTab === 'STUDENTS' ? `${filteredSessions.length} students` : `${filteredParentEnquiries.length} enquiries`}
            </span>
          </div>
          <p style={{ color: '#64748B', fontSize: '0.84rem', margin: 0, wordBreak: 'break-word' }}>
            Real-time candidate registrations, test results, and lead pipeline tracking
          </p>
        </div>

        {/* Tab Switcher & Export */}
        <div className="admin-header-actions">
          <div className="admin-tab-switcher-container">
            <div className="admin-tab-switcher">
              <button
                type="button"
                onClick={() => { setActiveTab('STUDENTS'); setSearch(''); }}
                className={`admin-tab-btn ${activeTab === 'STUDENTS' ? 'active' : ''}`}
              >
                <span className="tab-full-label">🎓 Student Diagnostics</span>
                <span className="tab-short-label">🎓 Students</span>
              </button>
              <button
                type="button"
                onClick={() => { setActiveTab('PARENTS'); setSearch(''); }}
                className={`admin-tab-btn ${activeTab === 'PARENTS' ? 'active' : ''}`}
              >
                <span className="tab-full-label">👨‍👩‍👧 Parent Enquiries</span>
                <span className="tab-short-label">👨‍👩‍👧 Parents</span>
              </button>
            </div>
          </div>

          <a
            href={activeTab === 'STUDENTS' ? getExportCsvUrl() : getExportParentCsvUrl()}
            className="admin-export-csv-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            <span>Export CSV</span>
          </a>
        </div>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="admin-filter-bar">
        {/* Search Input with Icon */}
        <div className="admin-search-wrapper">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text"
            placeholder={activeTab === 'STUDENTS' ? "Search student name, email, or phone…" : "Search parent name, phone, area…"}
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="admin-search-input"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', fontSize: '0.9rem', padding: 0 }}
            >
              ✕
            </button>
          )}
        </div>

        {activeTab === 'STUDENTS' && (
          <>
            <select
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
              style={{
                background: '#FAFAFA',
                border: '1.5px solid #CBD5E1',
                borderRadius: '10px',
                color: '#0F172A',
                padding: '9px 14px',
                fontSize: '0.83rem',
                fontWeight: 600,
                fontFamily: 'inherit',
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              <option value="">All Statuses</option>
              {STATUS_OPTIONS.filter(Boolean).map(s => (
                <option key={s} value={s}>{s.replace(/_/g, ' ')}</option>
              ))}
            </select>

            <select
              value={leadFilter}
              onChange={e => setLeadFilter(e.target.value)}
              style={{
                background: '#FAFAFA',
                border: '1.5px solid #CBD5E1',
                borderRadius: '10px',
                color: '#0F172A',
                padding: '9px 14px',
                fontSize: '0.83rem',
                fontWeight: 600,
                fontFamily: 'inherit',
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              <option value="">All Lead Stages</option>
              {LEAD_OPTIONS.filter(Boolean).map(s => (
                <option key={s} value={s}>{s.replace(/_/g, ' ')}</option>
              ))}
            </select>
          </>
        )}

        <button className="admin-btn outline" onClick={loadData} style={{ padding: '9px 16px', fontSize: '0.82rem', justifyContent: 'center', borderRadius: '10px' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 4 23 10 17 10"/>
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
          </svg>
          <span>Refresh</span>
        </button>
      </div>

      {/* Table Card Container */}
      <div className="admin-table-card" style={{ border: '1px solid #E2E8F0', borderRadius: '20px', overflow: 'hidden' }}>
        {loading ? (
          <div style={{ padding: '60px', textAlign: 'center' }}>
            <div className="spinner" style={{ margin: '0 auto 12px', width: '32px', height: '32px' }} />
            <p style={{ color: '#64748B', fontSize: '0.85rem', fontWeight: 500 }}>Loading records…</p>
          </div>
        ) : error ? (
          <div style={{ padding: '40px', textAlign: 'center', color: '#B91C1C', fontSize: '0.88rem', fontWeight: 600 }}>{error}</div>
        ) : activeTab === 'STUDENTS' ? (
          <>
            {/* Mobile Touch Scroll Hint */}
            <div className="admin-mobile-scroll-hint">
              <span>📱 Swipe table horizontally to view all columns &amp; PDF reports →</span>
            </div>

            {/* ── MOBILE CARDS VIEW FOR STUDENTS (Screen < 768px) ── */}
            <div className="admin-student-cards-mobile">
              {filteredSessions.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '32px', color: '#64748B', fontSize: '0.85rem' }}>
                  No student records found matching your filters.
                </div>
              ) : filteredSessions.map(s => (
                <div key={s.id} className="admin-student-card-mobile">
                  {/* Card Header */}
                  <div className="admin-card-header-row">
                    <div className="admin-avatar-circle">
                      {s.student_name ? s.student_name.charAt(0).toUpperCase() : 'S'}
                    </div>
                    <div className="admin-card-header-info">
                      <div className="admin-card-title-line">
                        <span className="admin-card-student-name">{s.student_name}</span>
                        <span className="admin-card-id-badge">#{s.id}</span>
                      </div>
                      <div className="admin-card-contact-line">
                        {s.student_email}
                      </div>
                    </div>
                    <span className={`status-chip ${s.status}`}>
                      {s.status.replace(/_/g, ' ')}
                    </span>
                  </div>

                  {/* Quick Phone Row */}
                  <div className="admin-card-phone-row">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2.2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <a href={`tel:${s.student_phone}`} className="admin-phone-link">
                      {s.student_phone}
                    </a>
                  </div>

                  {/* Metrics Box */}
                  <div className="admin-card-stats-box">
                    <div className="admin-stat-mini">
                      <span className="admin-stat-mini-label">Grade</span>
                      <span className="admin-stat-mini-val">Gr {s.current_grade || '—'}</span>
                    </div>
                    <div className="admin-stat-mini">
                      <span className="admin-stat-mini-label">Target SAT</span>
                      <span className="admin-stat-mini-val">{s.target_sat_score || '—'}</span>
                    </div>
                    <div className="admin-stat-mini">
                      <span className="admin-stat-mini-label">Score</span>
                      <span className="admin-stat-mini-val" style={{ color: s.total_score !== null ? '#15803D' : '#64748B' }}>
                        {s.total_score !== null ? `${s.total_score} / 24` : 'Pending'}
                      </span>
                    </div>
                  </div>

                  {/* Lead Selector */}
                  <div className="admin-card-lead-row">
                    <span className="admin-lead-label">
                      Lead Stage:
                    </span>
                    <LeadSelector
                      sessionId={s.id}
                      currentStatus={s.lead_status}
                      onUpdate={handleLeadUpdate}
                    />
                  </div>

                  {/* Action Bar */}
                  <div className="admin-card-actions-row">
                    {s.status === 'COMPLETED' ? (
                      <>
                        <button
                          type="button"
                          className="admin-btn-result"
                          onClick={() => navigate(`/admin/sat/students/${s.id}`)}
                        >
                          View Result
                        </button>
                        <button
                          type="button"
                          className="admin-btn-pdf"
                          onClick={() => window.open(`/admin/sat/students/${s.id}?print=true`, '_blank')}
                          title="Download PDF Report"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                            <polyline points="6 9 6 2 18 2 18 9" />
                            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                            <rect x="6" y="14" width="12" height="8" />
                          </svg>
                          <span>PDF Report</span>
                        </button>
                      </>
                    ) : (
                      <div className="admin-card-pending-notice">
                        ⏳ Test pending completion
                      </div>
                    )}
                    <button
                      type="button"
                      className="admin-btn-delete"
                      onClick={() => handleDeleteStudent(s.id, s.student_name)}
                      disabled={deletingId === s.id}
                      title="Delete student record"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"/>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* ── STUDENT SESSIONS TABLE (Scrollable with min-width) ── */}
            <div className="admin-table-scroll">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Student Info</th>
                    <th>Grade</th>
                    <th>Target</th>
                    <th>Status</th>
                    <th>Score</th>
                    <th>Lead Stage</th>
                    <th>Registered</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSessions.length === 0 ? (
                    <tr>
                      <td colSpan={9} style={{ textAlign: 'center', padding: '40px', color: '#64748B', fontSize: '0.85rem' }}>
                        No student records found.
                      </td>
                    </tr>
                  ) : filteredSessions.map(s => (
                    <tr key={s.id}>
                      <td className="mono">#{s.id}</td>
                      <td>
                        <div className="student-name" style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0F172A' }}>{s.student_name}</div>
                        <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '2px' }}>{s.student_email} · {s.student_phone}</div>
                      </td>
                      <td style={{ fontSize: '0.82rem', color: '#334155', fontWeight: 600 }}>Gr {s.current_grade || '—'}</td>
                      <td style={{ fontSize: '0.82rem', color: '#334155', fontWeight: 600 }}>{s.target_sat_score || '—'}</td>
                      <td>
                        <span className={`status-chip ${s.status}`}>
                          {s.status.replace(/_/g, ' ')}
                        </span>
                      </td>
                      <td style={{ fontWeight: 800, fontSize: '0.88rem', color: s.total_score !== null ? '#0F172A' : '#94A3B8' }}>
                        {s.total_score !== null ? `${s.total_score} / 24` : '—'}
                      </td>
                      <td>
                        <LeadSelector
                          sessionId={s.id}
                          currentStatus={s.lead_status}
                          onUpdate={handleLeadUpdate}
                        />
                      </td>
                      <td style={{ fontSize: '0.75rem', color: '#64748B', whiteSpace: 'nowrap' }}>
                        {formatDate(s.created_at)}
                      </td>
                      <td style={{ whiteSpace: 'nowrap' }}>
                        <div style={{ display: 'flex', gap: '6px', alignItems: 'center', whiteSpace: 'nowrap' }}>
                          {s.status === 'COMPLETED' ? (
                            <>
                              <button
                                className="admin-btn outline"
                                style={{ fontSize: '0.75rem', padding: '6px 12px', whiteSpace: 'nowrap', borderRadius: '8px' }}
                                onClick={() => navigate(`/admin/sat/students/${s.id}`)}
                              >
                                View Result
                              </button>
                              <button
                                className="admin-btn primary"
                                style={{
                                  fontSize: '0.75rem',
                                  padding: '6px 12px',
                                  background: 'linear-gradient(135deg, #15803D 0%, #166534 100%)',
                                  borderColor: '#15803D',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '5px',
                                  whiteSpace: 'nowrap',
                                  borderRadius: '8px',
                                  boxShadow: '0 2px 6px rgba(21, 128, 61, 0.2)',
                                }}
                                onClick={() => window.open(`/admin/sat/students/${s.id}?print=true`, '_blank')}
                                title="Download PDF Report"
                              >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                                  <polyline points="6 9 6 2 18 2 18 9" />
                                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                                  <rect x="6" y="14" width="12" height="8" />
                                </svg>
                                <span>PDF Report</span>
                              </button>
                            </>
                          ) : (
                            <span style={{ color: '#94A3B8', fontSize: '0.75rem', marginRight: '4px' }}>Pending</span>
                          )}
                          <button
                            className="admin-btn outline"
                            style={{
                              fontSize: '0.75rem',
                              fontWeight: 600,
                              padding: '6px 10px',
                              color: '#DC2626',
                              background: '#FEF2F2',
                              borderColor: '#FECACA',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              cursor: 'pointer',
                              whiteSpace: 'nowrap',
                              borderRadius: '8px',
                            }}
                            onClick={() => handleDeleteStudent(s.id, s.student_name)}
                            disabled={deletingId === s.id}
                            title="Delete student record"
                          >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="3 6 5 6 21 6"/>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                            </svg>
                            <span>{deletingId === s.id ? '…' : 'Delete'}</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          /* ── PARENT ENQUIRIES TABLE ── */
          <>
            <div className="admin-mobile-scroll-hint">
              <span>📱 Swipe table horizontally to view full parent enquiry details →</span>
            </div>

            {/* Mobile Cards View for Parents */}
            <div className="admin-student-cards-mobile">
              {filteredParentEnquiries.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '32px', color: '#64748B', fontSize: '0.85rem' }}>
                  No parent enquiries received yet.
                </div>
              ) : filteredParentEnquiries.map(p => (
                <div key={p.id} className="admin-student-card-mobile">
                  <div className="admin-card-header-row">
                    <div className="admin-avatar-circle" style={{ background: 'linear-gradient(135deg, #0284C7 0%, #0369A1 100%)' }}>
                      {p.parent_name ? p.parent_name.charAt(0).toUpperCase() : 'P'}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '1.02rem', fontWeight: 800, color: '#0F172A' }}>
                        {p.parent_name}
                      </div>
                      <div className="admin-card-contact-line">
                        <a href={`tel:${p.phone}`} style={{ color: '#0284C7', fontWeight: 700, textDecoration: 'none' }}>
                          📞 {p.phone}
                        </a>
                        {p.email && <span>· {p.email}</span>}
                      </div>
                    </div>
                    <span className="mono" style={{ fontSize: '0.75rem', color: '#2563EB', background: '#EFF6FF', padding: '2px 6px', borderRadius: '6px', fontWeight: 700 }}>
                      #{p.id}
                    </span>
                  </div>

                  <div className="admin-card-stats-box">
                    <div className="admin-stat-mini">
                      <span className="admin-stat-mini-label">Grade</span>
                      <span className="admin-stat-mini-val">{p.student_grade}</span>
                    </div>
                    <div className="admin-stat-mini">
                      <span className="admin-stat-mini-label">Exp. SAT</span>
                      <span className="admin-stat-mini-val">{p.expected_sat_date || '—'}</span>
                    </div>
                    <div className="admin-stat-mini">
                      <span className="admin-stat-mini-label">Al Majaz 3</span>
                      <span className="admin-stat-mini-val" style={{ color: p.can_attend_al_majaz ? '#059669' : '#C2410C' }}>
                        {p.can_attend_al_majaz ? 'Yes' : 'No'}
                      </span>
                    </div>
                  </div>

                  <div style={{ fontSize: '0.78rem', color: '#475569', background: '#F8FAFC', border: '1px solid #F1F5F9', padding: '8px 10px', borderRadius: '8px', marginBottom: '6px' }}>
                    <strong>📍 Residence Area:</strong> {p.area_of_residence}
                  </div>

                  <div style={{ fontSize: '0.74rem', color: '#64748B', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                    <span>Campaign: <strong>{p.utm_source ? `${p.utm_source}` : 'Organic'}</strong></span>
                    <span>Target: <strong>{p.target_sat_score || 'Not set'}</strong></span>
                  </div>
                </div>
              ))}
            </div>

            <div className="admin-table-scroll">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Parent Info</th>
                    <th>Student Grade</th>
                    <th>Expected SAT</th>
                    <th>Scores (Prev / Target)</th>
                    <th>Area of Residence</th>
                    <th>Al Majaz 3</th>
                    <th>Campaign (UTM)</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredParentEnquiries.length === 0 ? (
                    <tr>
                      <td colSpan={9} style={{ textAlign: 'center', padding: '40px', color: '#64748B', fontSize: '0.85rem' }}>
                        No parent enquiries received yet.
                      </td>
                    </tr>
                  ) : filteredParentEnquiries.map(p => (
                    <tr key={p.id}>
                      <td className="mono">#{p.id}</td>
                      <td>
                        <div className="student-name" style={{ fontSize: '0.88rem', color: '#0F172A', fontWeight: 700 }}>
                          {p.parent_name}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '2px' }}>
                          <a href={`tel:${p.phone}`} style={{ color: '#0284C7', textDecoration: 'none', fontWeight: 600 }}>{p.phone}</a>
                          {p.email ? ` · ${p.email}` : ''}
                        </div>
                      </td>
                      <td style={{ fontSize: '0.82rem', color: '#334155', fontWeight: 600 }}>{p.student_grade}</td>
                      <td style={{ fontSize: '0.82rem', color: '#334155' }}>{p.expected_sat_date || '—'}</td>
                      <td style={{ fontSize: '0.78rem', color: '#334155' }}>
                        <div>Prev: {p.previous_sat_score || 'None'}</div>
                        <div>Target: {p.target_sat_score || 'Not set'}</div>
                      </td>
                      <td style={{ fontSize: '0.82rem', color: '#334155' }}>{p.area_of_residence}</td>
                      <td>
                        <span style={{
                          padding: '3px 10px',
                          borderRadius: '100px',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          background: p.can_attend_al_majaz ? '#ECFDF5' : '#FFF7ED',
                          color: p.can_attend_al_majaz ? '#059669' : '#C2410C',
                          border: `1px solid ${p.can_attend_al_majaz ? '#A7F3D0' : '#FFD8A8'}`
                        }}>
                          {p.can_attend_al_majaz ? 'Yes' : 'No'}
                        </span>
                      </td>
                      <td style={{ fontSize: '0.75rem', color: '#64748B' }}>
                        {p.utm_source ? (
                          <div>
                            <strong style={{ color: '#0F172A' }}>{p.utm_source}</strong> / {p.utm_campaign || 'direct'}
                          </div>
                        ) : (
                          <span style={{ color: '#94A3B8' }}>Organic / Direct</span>
                        )}
                      </td>
                      <td style={{ fontSize: '0.75rem', color: '#64748B', whiteSpace: 'nowrap' }}>
                        {formatDate(p.created_at)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
