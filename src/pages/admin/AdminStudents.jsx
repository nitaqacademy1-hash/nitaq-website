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

  return (
    <select
      value={value}
      onChange={handleChange}
      disabled={saving}
      style={{
        background: '#ffffff',
        color: '#0F172A',
        border: '1px solid #CBD5E1',
        borderRadius: '6px',
        padding: '4px 8px',
        fontSize: '0.75rem',
        fontWeight: 600,
        fontFamily: 'inherit',
        cursor: 'pointer',
        outline: 'none',
      }}
    >
      {LEAD_OPTIONS.filter(Boolean).map(opt => (
        <option key={opt} value={opt}>{opt.replace(/_/g, ' ')}</option>
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
      {/* Header & Tabs */}
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-heading, sans-serif)', fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', margin: '0 0 2px 0' }}>
            SAT Leads &amp; Diagnostic Records
          </h1>
          <p style={{ color: '#64748B', fontSize: '0.82rem', margin: 0 }}>
            {activeTab === 'STUDENTS' ? `${filteredSessions.length} student records` : `${filteredParentEnquiries.length} parent enquiries`}
          </p>
        </div>

        {/* Tab Switcher & Export */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <div style={{ background: '#E2E8F0', padding: '3px', borderRadius: '8px', display: 'flex', gap: '4px' }}>
            <button
              type="button"
              onClick={() => { setActiveTab('STUDENTS'); setSearch(''); }}
              style={{
                padding: '6px 14px',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                background: activeTab === 'STUDENTS' ? '#FFFFFF' : 'transparent',
                color: activeTab === 'STUDENTS' ? '#0F172A' : '#64748B',
                boxShadow: activeTab === 'STUDENTS' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
              }}
            >
              🎓 Student Diagnostics
            </button>
            <button
              type="button"
              onClick={() => { setActiveTab('PARENTS'); setSearch(''); }}
              style={{
                padding: '6px 14px',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                background: activeTab === 'PARENTS' ? '#FFFFFF' : 'transparent',
                color: activeTab === 'PARENTS' ? '#0F172A' : '#64748B',
                boxShadow: activeTab === 'PARENTS' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
              }}
            >
              👨‍👩‍👧 Parent Enquiries
            </button>
          </div>

          <a
            href={activeTab === 'STUDENTS' ? getExportCsvUrl() : getExportParentCsvUrl()}
            className="admin-btn primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Export CSV
          </a>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div style={{
        background: '#ffffff',
        border: '1px solid #E2E8F0',
        borderRadius: '12px',
        padding: '12px 16px',
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginBottom: '20px',
      }}>
        <input
          type="text"
          placeholder={activeTab === 'STUDENTS' ? "Search students by name, email, or phone…" : "Search parent name, phone, area…"}
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            flex: '1',
            minWidth: '220px',
            background: '#FAFAFA',
            border: '1px solid #CBD5E1',
            borderRadius: '8px',
            color: '#0F172A',
            padding: '8px 12px',
            fontSize: '0.82rem',
            fontFamily: 'inherit',
            outline: 'none',
          }}
        />

        {activeTab === 'STUDENTS' && (
          <>
            <select
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
              style={{
                background: '#FAFAFA',
                border: '1px solid #CBD5E1',
                borderRadius: '8px',
                color: '#0F172A',
                padding: '8px 12px',
                fontSize: '0.82rem',
                fontFamily: 'inherit',
                outline: 'none',
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
                border: '1px solid #CBD5E1',
                borderRadius: '8px',
                color: '#0F172A',
                padding: '8px 12px',
                fontSize: '0.82rem',
                fontFamily: 'inherit',
                outline: 'none',
              }}
            >
              <option value="">All Lead Stages</option>
              {LEAD_OPTIONS.filter(Boolean).map(s => (
                <option key={s} value={s}>{s.replace(/_/g, ' ')}</option>
              ))}
            </select>
          </>
        )}

        <button className="admin-btn outline" onClick={loadData} style={{ padding: '8px 14px', fontSize: '0.8rem' }}>
          Refresh
        </button>
      </div>

      {/* Table Card */}
      <div className="admin-table-card">
        {loading ? (
          <div style={{ padding: '48px', textAlign: 'center' }}>
            <div className="spinner" style={{ margin: '0 auto 10px', width: '28px', height: '28px' }} />
            <p style={{ color: '#64748B', fontSize: '0.82rem' }}>Loading records…</p>
          </div>
        ) : error ? (
          <div style={{ padding: '32px', textAlign: 'center', color: '#B91C1C', fontSize: '0.85rem' }}>{error}</div>
        ) : activeTab === 'STUDENTS' ? (
          /* ── STUDENT SESSIONS TABLE ── */
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
                      <div className="student-name" style={{ fontSize: '0.85rem' }}>{s.student_name}</div>
                      <div style={{ fontSize: '0.74rem', color: '#64748B' }}>{s.student_email} · {s.student_phone}</div>
                    </td>
                    <td style={{ fontSize: '0.8rem', color: '#334155' }}>{s.current_grade}</td>
                    <td style={{ fontSize: '0.8rem', color: '#334155' }}>{s.target_sat_score}</td>
                    <td>
                      <span className={`status-chip ${s.status}`}>
                        {s.status.replace(/_/g, ' ')}
                      </span>
                    </td>
                    <td style={{ fontWeight: 700, fontSize: '0.85rem', color: s.total_score !== null ? '#0F172A' : '#94A3B8' }}>
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
                    <td>
                      <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                        {s.status === 'COMPLETED' ? (
                          <>
                            <button
                              className="admin-btn outline"
                              style={{ fontSize: '0.75rem', padding: '5px 10px' }}
                              onClick={() => navigate(`/admin/sat/students/${s.id}`)}
                            >
                              View Result
                            </button>
                            <button
                              className="admin-btn primary"
                              style={{
                                fontSize: '0.75rem',
                                padding: '5px 10px',
                                background: '#2E7D32',
                                borderColor: '#2E7D32',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px',
                              }}
                              onClick={() => window.open(`/admin/sat/students/${s.id}?print=true`, '_blank')}
                              title="Download PDF Report"
                            >
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                            padding: '5px 10px',
                            color: '#DC2626',
                            background: '#FEF2F2',
                            borderColor: '#FECACA',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            cursor: 'pointer',
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
        ) : (
          /* ── PARENT ENQUIRIES TABLE ── */
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
                      <div className="student-name" style={{ fontSize: '0.85rem', color: '#0F172A', fontWeight: 700 }}>
                        {p.parent_name}
                      </div>
                      <div style={{ fontSize: '0.74rem', color: '#64748B' }}>
                        <a href={`tel:${p.phone}`} style={{ color: '#0284C7', textDecoration: 'none' }}>{p.phone}</a>
                        {p.email ? ` · ${p.email}` : ''}
                      </div>
                    </td>
                    <td style={{ fontSize: '0.8rem', color: '#334155', fontWeight: 600 }}>{p.student_grade}</td>
                    <td style={{ fontSize: '0.8rem', color: '#334155' }}>{p.expected_sat_date || '—'}</td>
                    <td style={{ fontSize: '0.78rem', color: '#334155' }}>
                      <div>Prev: {p.previous_sat_score || 'None'}</div>
                      <div>Target: {p.target_sat_score || 'Not set'}</div>
                    </td>
                    <td style={{ fontSize: '0.8rem', color: '#334155' }}>{p.area_of_residence}</td>
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
        )}
      </div>
    </div>
  );
}
