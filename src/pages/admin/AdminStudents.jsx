/**
 * AdminStudents.jsx — Minimalist student sessions table.
 * Compact typography, clean monochrome badges, no WhatsApp icons or excessive colors.
 */

import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getStudentsList, updateLeadStatus, getExportCsvUrl, ApiError } from '../../services/diagnosticApi';
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
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [leadFilter, setLeadFilter] = useState('');
  const [search, setSearch] = useState('');

  const loadSessions = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const data = await getStudentsList({
        status: statusFilter || undefined,
        lead_status: leadFilter || undefined,
        limit: 200,
      });
      setSessions(data);
    } catch (e) {
      setError(e instanceof ApiError ? e.message : 'Failed to load students');
    } finally {
      setLoading(false);
    }
  }, [statusFilter, leadFilter]);

  useEffect(() => { loadSessions(); }, [loadSessions]);

  const handleLeadUpdate = (sessionId, newStatus) => {
    setSessions(prev => prev.map(s =>
      s.id === sessionId ? { ...s, lead_status: newStatus } : s
    ));
  };

  const filtered = sessions.filter(s => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      s.student_name.toLowerCase().includes(q) ||
      s.student_email.toLowerCase().includes(q) ||
      s.student_phone.includes(q)
    );
  });

  const formatDate = (iso) => {
    if (!iso) return '—';
    return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-heading, sans-serif)', fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', margin: '0 0 2px 0' }}>
            Students &amp; Diagnostic Records
          </h1>
          <p style={{ color: '#64748B', fontSize: '0.82rem', margin: 0 }}>
            {filtered.length} total records
          </p>
        </div>

        <a
          href={getExportCsvUrl()}
          className="admin-btn primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Export CSV
        </a>
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
          placeholder="Search by name, email, or phone…"
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

        <button className="admin-btn outline" onClick={loadSessions} style={{ padding: '8px 14px', fontSize: '0.8rem' }}>
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
        ) : (
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
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={9} style={{ textAlign: 'center', padding: '40px', color: '#64748B', fontSize: '0.85rem' }}>
                      No student records found.
                    </td>
                  </tr>
                ) : filtered.map(s => (
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
                      {s.status === 'COMPLETED' ? (
                        <button
                          className="admin-btn outline"
                          style={{ fontSize: '0.75rem', padding: '5px 10px' }}
                          onClick={() => navigate(`/admin/sat/students/${s.id}`)}
                        >
                          View Result
                        </button>
                      ) : (
                        <span style={{ color: '#94A3B8', fontSize: '0.75rem' }}>Pending</span>
                      )}
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
