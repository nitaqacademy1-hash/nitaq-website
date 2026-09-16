import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { createCertificate } from '../../services/diagnosticApi';

const COURSE_PRESETS = [
  'Digital Marketing & SEO',
  'Digital SAT Preparation',
  'IELTS Academic & General',
  'AI & Python Programming',
  'ACCA Qualification',
  'CMA (Certified Management Accountant)',
  'Spoken English & Communication',
  'Spoken Arabic Mastery',
  'UAE VAT & Corporate Tax',
  'Academic Excellence Tuition',
];

export default function CourseCompletionCertificate({ onCertificateCreated }) {
  const canvasRef = useRef(null);
  const [studentName, setStudentName] = useState('');
  const [courseName, setCourseName] = useState(COURSE_PRESETS[0]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [remark, setRemark] = useState('');
  const [issueDate, setIssueDate] = useState(
    new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
  );

  const [createdCert, setCreatedCert] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const templateImgRef = useRef(null);

  // Load template image once
  useEffect(() => {
    const img = new Image();
    img.src = '/certi comp temp.png';
    img.onload = () => {
      templateImgRef.current = img;
      setImageLoaded(true);
    };
  }, []);

  // Re-draw canvas whenever form inputs change
  useEffect(() => {
    if (!imageLoaded || !canvasRef.current || !templateImgRef.current) return;
    renderCanvas();
  }, [imageLoaded, studentName, courseName, createdCert]);

  const renderCanvas = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const img = templateImgRef.current;

    // Set canvas dimensions to match high resolution image (2000 x 1414)
    canvas.width = img.naturalWidth || 2000;
    canvas.height = img.naturalHeight || 1414;

    // 1. Draw template image background
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // 2. Render Student Name
    // Location: centered above the main horizontal line (y ~ 780px)
    const displayName = studentName.trim() || 'Student Full Name';
    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'italic 700 68px "Playfair Display", "Times New Roman", Georgia, serif';
    ctx.fillStyle = '#0F3822'; // Premium deep Nitaq green accent
    ctx.fillText(displayName, 1000, 785);
    ctx.restore();

    // 3. Render Course Name in the sentence line (Line 1 after 'for completing a course in')
    const displayCourse = courseName.trim() || 'Course Name';
    ctx.save();

    // Dynamic font size scaling based on content length
    let fontSize = 34;
    if (displayCourse.length > 30) {
      fontSize = 24;
    } else if (displayCourse.length > 22) {
      fontSize = 30;
    } else if (displayCourse.length > 14) {
      fontSize = 34;
    } else if (displayCourse.length > 8) {
      fontSize = 38;
    } else {
      fontSize = 44; // Big bold size for short titles (e.g. ACCA, IELTS, SAT)
    }

    ctx.font = `italic 700 ${fontSize}px "Georgia", serif`;

    // Render course name cleanly right after 'in ' with transparent background on exact sentence baseline (y=935)
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = '#0F3822';
    ctx.fillText(displayCourse, 1115, 935);

    ctx.restore();

    // 4. Generate QR Code overlay inside the exact SCAN HERE white box
    // SCAN HERE inner white box: x = 288, y = 1135, width = 176, height = 162
    const certId = createdCert?.id || 'PREVIEW-CERT';
    const publicUrl = `${window.location.origin}/verify-certificate/${certId}`;

    try {
      const qrCanvas = document.createElement('canvas');
      await QRCode.toCanvas(qrCanvas, publicUrl, {
        width: 172,
        margin: 1,
        color: {
          dark: '#0F3822',
          light: '#FFFFFF',
        },
      });

      // Target exact inner white box under the green SCAN HERE header badge
      ctx.drawImage(qrCanvas, 290, 1135, 168, 160);
    } catch (err) {
      console.error('QR code generation error:', err);
    }
  };

  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!studentName.trim()) {
      alert('Please enter the student full name.');
      return;
    }
    if (!courseName.trim()) {
      alert('Please enter or select a course name.');
      return;
    }

    setLoading(true);
    try {
      const result = await createCertificate({
        student_name: studentName.trim(),
        course_name: courseName.trim(),
        start_date: startDate || undefined,
        end_date: endDate || undefined,
        remark: remark.trim() || undefined,
        issue_date: issueDate || undefined,
      });

      setCreatedCert(result);
      if (onCertificateCreated) onCertificateCreated(result);
      alert(`Certificate generated successfully!\nCertificate ID: ${result.id}`);
    } catch (err) {
      alert('Failed to save certificate: ' + (err.message || 'Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPng = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    const safeStudent = (studentName || 'Student').replace(/[^a-zA-Z0-9]/g, '_');
    const safeCourse = (courseName || 'Course').replace(/[^a-zA-Z0-9]/g, '_');
    link.download = `Certificate_${safeStudent}_${safeCourse}.png`;
    link.href = canvas.toDataURL('image/png', 1.0);
    link.click();
  };

  const handleCopyLink = () => {
    if (!createdCert) return;
    const url = `${window.location.origin}/verify-certificate/${createdCert.id}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const publicVerificationUrl = createdCert
    ? `${window.location.origin}/verify-certificate/${createdCert.id}`
    : '';

  return (
    <div className="admin-cert-generator-grid">
      {/* ── Left Form Panel ───────────────────────────────────────── */}
      <div className="admin-card cert-form-card">
        <div className="admin-card-header">
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
              🎓 Course Completion Certificate
            </h2>
            <p style={{ color: '#64748B', fontSize: '0.85rem', marginTop: '4px', margin: 0 }}>
              Enter student details to generate official certificate & QR verification code.
            </p>
          </div>
        </div>

        <form onSubmit={handleGenerate} style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
          <div className="admin-input-group">
            <label className="admin-label">Student Name *</label>
            <input
              type="text"
              required
              className="admin-input"
              placeholder="e.g. Aisha Al Mansoori"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
          </div>

          <div className="admin-input-group">
            <label className="admin-label">Course Name *</label>
            <input
              type="text"
              required
              className="admin-input"
              placeholder="Select preset or type custom course..."
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' }}>
              {COURSE_PRESETS.slice(0, 6).map((preset) => (
                <button
                  type="button"
                  key={preset}
                  className={`admin-tag-btn ${courseName === preset ? 'active' : ''}`}
                  onClick={() => setCourseName(preset)}
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>

          <div className="cert-date-grid">
            <div className="admin-input-group">
              <label className="admin-label">Start Date</label>
              <input
                type="date"
                className="admin-input"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="admin-input-group">
              <label className="admin-label">End Date</label>
              <input
                type="date"
                className="admin-input"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>

          <div className="admin-input-group">
            <label className="admin-label">Issue Date</label>
            <input
              type="text"
              className="admin-input"
              placeholder="e.g. 15 September 2026"
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
            />
          </div>

          <div className="admin-input-group">
            <label className="admin-label">Remark / Grade (Optional)</label>
            <textarea
              rows="2"
              className="admin-input"
              placeholder="e.g. Successfully completed all modules with distinction in practical projects."
              value={remark}
              onChange={(e) => setRemark(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
            <button
              type="submit"
              className="admin-btn admin-btn-primary"
              style={{ flex: 1, padding: '12px 18px', fontWeight: 700 }}
              disabled={loading}
            >
              {loading ? 'Saving...' : '✨ Save & Create Certificate'}
            </button>
          </div>
        </form>

        {createdCert && (
          <div className="cert-created-banner" style={{ marginTop: '20px', padding: '16px', background: '#F0FDF4', borderRadius: '12px', border: '1px solid #BBF7D0' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#166534' }}>
              ✅ Certificate Active & Saved
            </div>
            <div style={{ fontSize: '0.78rem', color: '#15803D', marginTop: '4px', wordBreak: 'break-all' }}>
              ID: <strong>{createdCert.id}</strong>
            </div>
            <div style={{ marginTop: '10px', display: 'flex', gap: '8px' }}>
              <button
                type="button"
                className="admin-btn admin-btn-secondary"
                style={{ fontSize: '0.8rem', padding: '6px 12px' }}
                onClick={handleCopyLink}
              >
                {copied ? '✓ Copied Link!' : '📋 Copy Public Verification Link'}
              </button>
              <a
                href={publicVerificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="admin-btn admin-btn-secondary"
                style={{ fontSize: '0.8rem', padding: '6px 12px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                View Public Page ↗
              </a>
            </div>
          </div>
        )}
      </div>

      {/* ── Right Live Canvas & Action Preview Panel ──────────────── */}
      <div className="admin-card cert-preview-card">
        <div className="admin-card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
              🖼️ High-Res Certificate Canvas & QR Preview
            </h2>
            <p style={{ color: '#64748B', fontSize: '0.8rem', marginTop: '2px', margin: 0 }}>
              Live rendering on official template with QR code in "SCAN HERE" box.
            </p>
          </div>
          <button
            type="button"
            className="admin-btn admin-btn-primary"
            onClick={handleDownloadPng}
            style={{ fontSize: '0.85rem', padding: '8px 14px' }}
          >
            ⬇️ Download PNG
          </button>
        </div>

        <div className="canvas-wrapper" style={{ marginTop: '16px', background: '#0F172A', padding: '12px', borderRadius: '12px', overflow: 'hidden' }}>
          <canvas
            ref={canvasRef}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              display: 'block',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
            }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '14px', fontSize: '0.8rem', color: '#64748B' }}>
          <span>Resolution: 2000 × 1414 PNG canvas</span>
          <span>QR Placement: Bottom-Left (SCAN HERE)</span>
        </div>
      </div>
    </div>
  );
}
