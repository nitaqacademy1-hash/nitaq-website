/**
 * AdminStudentDetail.jsx — SAT Diagnostic Student Record & Premium PDF Generator.
 * Displays executive diagnostic assessment results and allows 1-click PDF download / printing.
 */

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStudentResult, updateLeadStatus, ApiError } from '../../services/diagnosticApi';
import PremiumStudentPdfReport from '../../components/admin/PremiumStudentPdfReport';
import '../sat/sat.css';
import '../sat/sat_admin.css';

const LEAD_OPTIONS = ['NEW', 'COMPLETED', 'CONTACTED', 'COUNSELING', 'ENROLLED', 'NOT_INTERESTED'];

export default function AdminStudentDetail() {
  const { sessionId } = useParams();
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [leadStatus, setLeadStatus] = useState('');
  const [savingLead, setSavingLead] = useState(false);

  useEffect(() => {
    getStudentResult(parseInt(sessionId))
      .then(data => {
        setResult(data);
        setLeadStatus(data.lead_status);
        setLoading(false);
        if (window.location.search.includes('print=true')) {
          setTimeout(() => window.print(), 600);
        }
      })
      .catch(e => {
        setError(e instanceof ApiError ? e.message : 'Failed to load student result');
        setLoading(false);
      });
  }, [sessionId]);

  const handleLeadUpdate = async (newStatus) => {
    setSavingLead(true);
    try {
      await updateLeadStatus(parseInt(sessionId), newStatus);
      setLeadStatus(newStatus);
      setResult(prev => prev ? { ...prev, lead_status: newStatus } : null);
    } catch {
      // Revert if error
    } finally {
      setSavingLead(false);
    }
  };

  if (loading) return (
    <div style={{ textAlign: 'center', padding: '60px 0' }}>
      <div className="spinner" style={{ margin: '0 auto 12px', width: '32px', height: '32px' }} />
      <p style={{ color: '#64748B', fontSize: '0.85rem' }}>Loading student diagnostic report…</p>
    </div>
  );

  if (error) return (
    <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', color: '#B91C1C', padding: '24px', borderRadius: '12px', fontSize: '0.85rem' }}>
      <button className="admin-btn outline" style={{ marginBottom: '14px' }} onClick={() => navigate(-1)}>
        ← Back to Students
      </button>
      <p style={{ margin: 0, fontWeight: 600 }}>{error}</p>
    </div>
  );

  return (
    <div className="admin-student-detail-wrapper">
      {/* Navigation & Lead Management Toolbar (Hidden during printing/PDF export) */}
      <div className="no-print" style={{
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
        background: '#ffffff',
        border: '1px solid #E2E8F0',
        borderRadius: '12px',
        padding: '12px 20px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            className="admin-btn outline"
            style={{ padding: '6px 12px', fontSize: '0.8rem' }}
            onClick={() => navigate('/admin/sat/students')}
          >
            ← Back to Students List
          </button>
          <div>
            <h2 style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
              Diagnostic Record #{sessionId}
            </h2>
            <span style={{ fontSize: '0.75rem', color: '#64748B' }}>
              {result.student_name} • {result.student_email}
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 700 }}>Lead Status:</span>
          <select
            value={leadStatus}
            onChange={e => handleLeadUpdate(e.target.value)}
            disabled={savingLead}
            style={{
              background: '#FAFAFA',
              border: '1px solid #CBD5E1',
              borderRadius: '8px',
              color: '#0F172A',
              padding: '6px 12px',
              fontSize: '0.8rem',
              fontWeight: 700,
              fontFamily: 'inherit',
              outline: 'none',
              cursor: 'pointer',
            }}
          >
            {LEAD_OPTIONS.map(opt => (
              <option key={opt} value={opt}>{opt.replace(/_/g, ' ')}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Premium SAT Diagnostic PDF Document Component */}
      <PremiumStudentPdfReport result={result} />
    </div>
  );
}

