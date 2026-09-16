import React, { useState, useEffect } from 'react';
import CourseCompletionCertificate from './CourseCompletionCertificate';
import { getCertificates, deleteCertificate } from '../../services/diagnosticApi';

export default function AdminCertificates() {
  const [activeTab, setActiveTab] = useState('create');
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  const fetchCertificates = async () => {
    setLoading(true);
    try {
      const data = await getCertificates(search);
      setCertificates(data || []);
    } catch (err) {
      console.error('Failed to load certificates:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'list') {
      fetchCertificates();
    }
  }, [activeTab, search]);

  const handleDelete = async (certId) => {
    if (!window.confirm(`Are you sure you want to delete certificate ${certId}?`)) return;
    try {
      await deleteCertificate(certId);
      setCertificates((prev) => prev.filter((c) => c.id !== certId));
    } catch (err) {
      alert('Error deleting certificate: ' + err.message);
    }
  };

  const handleCopy = (certId) => {
    const url = `${window.location.origin}/verify-certificate/${certId}`;
    navigator.clipboard.writeText(url);
    setCopiedId(certId);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="admin-certificates-page" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* ── Page Header ───────────────────────────────────────────── */}
      <div className="admin-page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
            NITAQ Certificates & Credentials
          </h1>
          <p style={{ color: '#64748B', fontSize: '0.9rem', marginTop: '4px', margin: 0 }}>
            Generate official course completion certificates with QR verification links.
          </p>
        </div>

        {/* Tab switcher buttons */}
        <div className="admin-tab-switcher" style={{ display: 'flex', gap: '8px', background: '#E2E8F0', padding: '4px', borderRadius: '10px' }}>
          <button
            type="button"
            className={`admin-tab-btn ${activeTab === 'create' ? 'active' : ''}`}
            onClick={() => setActiveTab('create')}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              background: activeTab === 'create' ? '#FFFFFF' : 'transparent',
              color: activeTab === 'create' ? '#0F172A' : '#64748B',
              boxShadow: activeTab === 'create' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
              transition: 'all 0.2s',
            }}
          >
            ➕ Create Certificate
          </button>
          <button
            type="button"
            className={`admin-tab-btn ${activeTab === 'list' ? 'active' : ''}`}
            onClick={() => setActiveTab('list')}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              background: activeTab === 'list' ? '#FFFFFF' : 'transparent',
              color: activeTab === 'list' ? '#0F172A' : '#64748B',
              boxShadow: activeTab === 'list' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
              transition: 'all 0.2s',
            }}
          >
            📋 Issued Certificates List
          </button>
        </div>
      </div>

      {/* ── Main Tab Content ──────────────────────────────────────── */}
      {activeTab === 'create' ? (
        <CourseCompletionCertificate
          onCertificateCreated={() => {
            // Can switch to list or refresh list
          }}
        />
      ) : (
        <div className="admin-card">
          <div className="admin-card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
              All Issued Certificates ({certificates.length})
            </h2>
            <div style={{ width: '280px' }}>
              <input
                type="text"
                className="admin-input"
                placeholder="Search by student, course, or ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {loading ? (
            <div style={{ padding: '40px', textAlign: 'center', color: '#64748B' }}>Loading certificates...</div>
          ) : certificates.length === 0 ? (
            <div style={{ padding: '40px', textAlign: 'center', color: '#64748B' }}>
              No certificates found. Switch to the "Create Certificate" tab to generate one.
            </div>
          ) : (
            <div style={{ overflowX: 'auto', marginTop: '16px' }}>
              <table className="admin-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
                <thead>
                  <tr style={{ background: '#F8FAFC', borderBottom: '2px solid #E2E8F0' }}>
                    <th style={{ padding: '12px' }}>Certificate ID</th>
                    <th style={{ padding: '12px' }}>Student Name</th>
                    <th style={{ padding: '12px' }}>Course Completed</th>
                    <th style={{ padding: '12px' }}>Issue Date</th>
                    <th style={{ padding: '12px' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {certificates.map((cert) => (
                    <tr key={cert.id} style={{ borderBottom: '1px solid #E2E8F0' }}>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#0F3822' }}>
                        {cert.id}
                      </td>
                      <td style={{ padding: '12px', fontWeight: 600 }}>{cert.student_name}</td>
                      <td style={{ padding: '12px', color: '#475569' }}>{cert.course_name}</td>
                      <td style={{ padding: '12px', color: '#64748B' }}>{cert.issue_date || 'N/A'}</td>
                      <td style={{ padding: '12px' }}>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button
                            type="button"
                            className="admin-btn admin-btn-secondary"
                            style={{ fontSize: '0.78rem', padding: '4px 10px' }}
                            onClick={() => handleCopy(cert.id)}
                          >
                            {copiedId === cert.id ? '✓ Copied!' : '📋 Copy Link'}
                          </button>
                          <a
                            href={`/verify-certificate/${cert.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="admin-btn admin-btn-secondary"
                            style={{ fontSize: '0.78rem', padding: '4px 10px', textDecoration: 'none' }}
                          >
                            Verify ↗
                          </a>
                          <button
                            type="button"
                            className="admin-btn"
                            style={{ fontSize: '0.78rem', padding: '4px 10px', background: '#FEE2E2', color: '#991B1B', border: 'none' }}
                            onClick={() => handleDelete(cert.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
