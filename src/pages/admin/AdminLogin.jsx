/**
 * AdminLogin.jsx — Minimalist admin login page.
 * Designed with modern light aesthetic (white card, clean typography, minimal green accents).
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminLogin, ApiError } from '../../services/diagnosticApi';
import '../sat/sat.css';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const result = await adminLogin(email, password);
      sessionStorage.setItem('nitaq_admin', JSON.stringify(result.admin));
      sessionStorage.setItem('nitaq_admin_token', result.access_token);
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Invalid credentials. Please verify your email and password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        {/* Brand Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
          <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #2e7d32 0%, #1B5E20 100%)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: '#ffffff', boxShadow: '0 4px 10px rgba(46, 125, 50, 0.25)' }}>
            🎓
          </div>
          <div>
            <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '1.05rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              NITAQ ACADEMY
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              SAT Diagnostic Admin
            </div>
          </div>
        </div>

        <h1>Sign In</h1>
        <p className="subtitle">Enter your administrator credentials to continue.</p>

        {error && <div className="admin-error-msg">⚠️ {error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="admin-input-group">
            <label>Admin Email</label>
            <input
              type="email"
              required
              className="admin-input"
              placeholder="nitaqacademy@gmail.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="admin-input-group">
            <label>Password</label>
            <input
              type="password"
              required
              className="admin-input"
              placeholder="••••••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="admin-login-btn" disabled={loading}>
            {loading ? 'Authenticating…' : 'Sign In to Dashboard →'}
          </button>
        </form>

        <p style={{ color: '#94A3B8', fontSize: '0.78rem', textAlign: 'center', marginTop: '24px', lineHeight: 1.4 }}>
          Protected portal · Authorized Nitaq Academy staff only
        </p>
      </div>
    </div>
  );
}
