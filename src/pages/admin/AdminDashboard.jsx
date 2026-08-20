/**
 * AdminDashboard.jsx — Ultra-minimal analytics dashboard.
 * Compact typography, clean white cards, neutral monochrome styling with subtle green accents.
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAnalyticsSummary, getExportCsvUrl, ApiError } from '../../services/diagnosticApi';
import '../sat/sat.css';

const DOMAIN_LABELS = {
  ALGEBRA: 'Algebra',
  ADVANCED_MATH: 'Advanced Math',
  PROBLEM_SOLVING_DATA_ANALYSIS: 'Problem-Solving & Data Analysis',
  GEOMETRY_TRIGONOMETRY: 'Geometry & Trigonometry',
  INFORMATION_IDEAS: 'Information & Ideas',
  CRAFT_STRUCTURE: 'Craft & Structure',
  EXPRESSION_IDEAS: 'Expression of Ideas',
  STANDARD_ENGLISH_CONVENTIONS: 'Standard English Conventions',
};

function StatCard({ label, value, sub }) {
  return (
    <div className="admin-stat-card">
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      {sub && <div className="stat-sub">{sub}</div>}
    </div>
  );
}

export default function AdminDashboard() {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getAnalyticsSummary()
      .then(data => { setSummary(data); setLoading(false); })
      .catch(e => { setError(e instanceof ApiError ? e.message : 'Failed to load analytics'); setLoading(false); });
  }, []);

  if (loading) return (
    <div style={{ textAlign: 'center', padding: '60px 0' }}>
      <div className="spinner" style={{ margin: '0 auto 12px', width: '32px', height: '32px' }} />
      <p style={{ color: '#64748B', fontSize: '0.85rem' }}>Loading analytics…</p>
    </div>
  );

  if (error) return (
    <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', color: '#B91C1C', padding: '16px 20px', borderRadius: '12px', fontSize: '0.85rem' }}>
      {error}
    </div>
  );

  const domainEntries = Object.entries(summary?.domain_averages || {});
  const avgTotalPct = summary?.total_sessions
    ? Math.round((summary.avg_total_score / 24) * 100)
    : 0;

  return (
    <div>
      {/* Page Header */}
      <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-heading, sans-serif)', fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', margin: '0 0 2px 0' }}>
            Dashboard Overview
          </h1>
          <p style={{ color: '#64748B', fontSize: '0.82rem', margin: 0 }}>
            Real-time diagnostic metrics and assessment activity
          </p>
        </div>

        <a
          href={getExportCsvUrl()}
          className="admin-btn primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Export CSV Data
        </a>
      </div>

      {/* Primary Metrics Grid */}
      <div className="admin-stat-grid">
        <StatCard
          label="Total Students"
          value={summary?.total_students ?? 0}
          sub="Registered students"
        />
        <StatCard
          label="Total Sessions"
          value={summary?.total_sessions ?? 0}
          sub="Diagnostic attempts"
        />
        <StatCard
          label="Completed Tests"
          value={summary?.completed_sessions ?? 0}
          sub={`${summary?.completion_rate ?? 0}% completion`}
        />
        <StatCard
          label="In Progress"
          value={summary?.in_progress_sessions ?? 0}
          sub="Active sessions"
        />
      </div>

      {/* Secondary Metrics Grid */}
      <div className="admin-stat-grid" style={{ marginBottom: '24px' }}>
        <StatCard
          label="Avg Score"
          value={summary ? `${summary.avg_total_score.toFixed(1)} / 24` : '—'}
          sub={`${avgTotalPct}% accuracy`}
        />
        <StatCard
          label="Avg Math"
          value={summary ? `${summary.avg_math_score.toFixed(1)} / 12` : '—'}
          sub="Mathematics average"
        />
        <StatCard
          label="Avg Reading & Writing"
          value={summary ? `${summary.avg_rw_score.toFixed(1)} / 12` : '—'}
          sub="R&W average"
        />
        <StatCard
          label="Enrolled Leads"
          value={summary?.enrolled_leads ?? 0}
          sub="Confirmed enrollments"
        />
      </div>

      {/* Domain Performance Breakdown Card */}
      {domainEntries.length > 0 && (
        <div className="admin-table-card">
          <div className="admin-table-header">
            <h2>Domain Performance Averages (Score out of 3.0)</h2>
            <span style={{ fontSize: '0.72rem', color: '#64748B', background: '#F1F5F9', padding: '3px 8px', borderRadius: '4px', fontWeight: 600 }}>
              8 Domains
            </span>
          </div>

          <div style={{ padding: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
            {domainEntries.map(([domain, avg]) => {
              const pct = Math.round((avg / 3) * 100);
              return (
                <div key={domain} style={{ background: '#FAFAFA', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '14px 16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.8rem', color: '#0F172A', fontWeight: 600 }}>
                      {DOMAIN_LABELS[domain] || domain}
                    </span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#334155' }}>
                      {avg.toFixed(1)} / 3
                    </span>
                  </div>

                  <div style={{ height: '4px', background: '#E2E8F0', borderRadius: '100px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${pct}%`, background: '#0F172A', borderRadius: '100px' }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Quick Navigation Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <Link to="/admin/sat/students" style={{ textDecoration: 'none' }}>
          <div className="admin-stat-card" style={{ cursor: 'pointer', padding: '20px' }}>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>
              Student Management →
            </div>
            <div style={{ color: '#64748B', fontSize: '0.8rem' }}>
              View student test sessions, score reports, and update lead pipeline status.
            </div>
          </div>
        </Link>

        <Link to="/admin/sat/questions" style={{ textDecoration: 'none' }}>
          <div className="admin-stat-card" style={{ cursor: 'pointer', padding: '20px' }}>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>
              Question Bank →
            </div>
            <div style={{ color: '#64748B', fontSize: '0.8rem' }}>
              Manage Digital SAT assessment questions, review domains, and add new questions.
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
