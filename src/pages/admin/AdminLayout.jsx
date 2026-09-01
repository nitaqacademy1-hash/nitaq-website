/**
 * AdminLayout.jsx — Responsive admin layout with desktop sidebar & mobile slide-out drawer navigation.
 * Features official Nitaq logo, responsive top header, hamburger menu toggle, and clean backdrop.
 */

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link, Outlet } from 'react-router-dom';
import { adminLogout } from '../../services/diagnosticApi';
import '../sat/sat.css';
import '../sat/sat_admin.css';

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const admin = sessionStorage.getItem('nitaq_admin');
    if (!admin) navigate('/admin/login', { replace: true });
  }, [navigate]);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

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
      {/* Mobile Drawer Overlay Backdrop */}
      {mobileMenuOpen && (
        <div
          className="admin-mobile-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Left Sidebar Navigation (Desktop & Mobile Drawer) ───── */}
      <aside className={`admin-sidebar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        {/* Brand Header with Official Nitaq Logo */}
        <div className="admin-sidebar-header">
          <Link to="/admin/dashboard" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <img
              src="/images/logo1.webp"
              alt="Nitaq Academy Logo"
              style={{ height: '32px', width: 'auto', objectFit: 'contain' }}
            />
          </Link>
          <button
            type="button"
            className="admin-sidebar-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
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
            href="/api/v1/docs"
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
        {/* Top Header Bar */}
        <header className="admin-top-header">
          <div className="admin-header-left">
            <button
              type="button"
              className="admin-hamburger-btn"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label="Toggle navigation menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>

            <img
              src="/images/logo1.webp"
              alt="Nitaq Academy"
              className="admin-mobile-logo"
            />

            <div className="workspace-badge">
              SAT Diagnostic Admin
            </div>
          </div>

          <div className="admin-header-right">
            <span className="admin-user-email-tag">
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
