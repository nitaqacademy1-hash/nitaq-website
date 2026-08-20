/**
 * AdminLayout.jsx — Ultra-minimal sidebar layout.
 * Clean, compact typography, official Nitaq logo on top-left, zero clutter.
 */

import React, { useEffect } from 'react';
import { useNavigate, useLocation, Link, Outlet } from 'react-router-dom';
import { adminLogout } from '../../services/diagnosticApi';
import '../sat/sat.css';

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const admin = sessionStorage.getItem('nitaq_admin');
    if (!admin) navigate('/admin/login', { replace: true });
  }, [navigate]);

  const admin = JSON.parse(sessionStorage.getItem('nitaq_admin') || 'null');

  const handleLogout = async () => {
    try { await adminLogout(); } catch {}
    sessionStorage.removeItem('nitaq_admin');
    sessionStorage.removeItem('nitaq_admin_token');
    navigate('/admin/login');
  };

  const path = location.pathname;

  return (
    <div className="admin-shell">
      {/* ── Left Sidebar ────────────────────────────────────────── */}
      <aside className="admin-sidebar">
        {/* Brand Header with Official Nitaq Logo */}
        <div className="admin-sidebar-header">
          <Link to="/admin/dashboard" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <img
              src="/images/logo1.webp"
              alt="Nitaq Academy Logo"
              style={{ height: '32px', width: 'auto', objectFit: 'contain' }}
            />
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="admin-sidebar-nav">
          <div className="admin-nav-category">Management</div>

          <Link
            to="/admin/dashboard"
            className={`admin-sidebar-link${path === '/admin/dashboard' || path === '/admin' ? ' active' : ''}`}
          >
            <span className="admin-nav-bullet" />
            <span>Dashboard</span>
          </Link>

          <Link
            to="/admin/sat/students"
            className={`admin-sidebar-link${path.includes('/students') ? ' active' : ''}`}
          >
            <span className="admin-nav-bullet" />
            <span>Students</span>
          </Link>

          <Link
            to="/admin/sat/questions"
            className={`admin-sidebar-link${path.includes('/questions') ? ' active' : ''}`}
          >
            <span className="admin-nav-bullet" />
            <span>Question Bank</span>
          </Link>

          <div className="admin-nav-category" style={{ marginTop: '14px' }}>System</div>

          <a
            href="/sat/diagnostic"
            target="_blank"
            rel="noopener noreferrer"
            className="admin-sidebar-link"
          >
            <span className="admin-nav-bullet" />
            <span>Student Portal ↗</span>
          </a>

          <a
            href="http://localhost:8001/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="admin-sidebar-link"
          >
            <span className="admin-nav-bullet" />
            <span>API Docs ↗</span>
          </a>
        </nav>

        {/* Profile Footer */}
        <div className="admin-sidebar-footer">
          <div className="admin-user-profile">
            <div className="admin-avatar">
              {admin?.name?.charAt(0) || 'A'}
            </div>
            <div className="admin-user-details">
              <div className="admin-user-name">{admin?.name || 'Admin'}</div>
              <div className="admin-user-role">{admin?.email || 'admin@nitaqacademy.com'}</div>
            </div>
          </div>
          <button
            className="admin-logout-btn"
            onClick={handleLogout}
            title="Sign out"
          >
            Sign out
          </button>
        </div>
      </aside>

      {/* ── Main Canvas Wrapper ─────────────────────────────────── */}
      <div className="admin-main-wrapper">
        {/* Compact Header */}
        <header className="admin-top-header">
          <div className="admin-header-left">
            <div className="workspace-badge">
              SAT Diagnostic Management
            </div>
          </div>

          <div className="admin-header-right">
            <span style={{ fontSize: '0.75rem', color: '#64748B' }}>
              Logged in as <strong>{admin?.email}</strong>
            </span>
          </div>
        </header>

        {/* Main Canvas */}
        <main className="admin-canvas">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
