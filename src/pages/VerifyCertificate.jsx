import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import QRCode from 'qrcode';
import { getCertificateById } from '../services/diagnosticApi';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function VerifyCertificate() {
  const { certId } = useParams();
  const [cert, setCert] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    async function loadCert() {
      if (!certId) {
        setError('No certificate ID provided.');
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const data = await getCertificateById(certId);
        setCert(data);
      } catch (err) {
        setError(err.message || 'Certificate verification failed.');
      } finally {
        setLoading(false);
      }
    }
    loadCert();
  }, [certId]);

  // Render certificate canvas when cert data is ready
  useEffect(() => {
    if (!cert || !canvasRef.current) return;

    const img = new Image();
    img.src = '/certi comp temp.png';
    img.onload = async () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');

      canvas.width = img.naturalWidth || 2000;
      canvas.height = img.naturalHeight || 1414;

      // 1. Background image
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // 2. Student Name
      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = 'italic 700 68px "Playfair Display", "Times New Roman", Georgia, serif';
      ctx.fillStyle = '#0F3822';
      ctx.fillText(cert.student_name, 1000, 785);
      ctx.restore();

      // 3. Course Sentence line (Line 1 after 'for completing a course in')
      const displayCourse = cert.course_name;
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

      // 4. Draw QR Code into exact SCAN HERE inner white box
      const publicUrl = window.location.href;
      try {
        const qrCanvas = document.createElement('canvas');
        await QRCode.toCanvas(qrCanvas, publicUrl, {
          width: 172,
          margin: 1,
          color: { dark: '#0F3822', light: '#FFFFFF' },
        });
        ctx.drawImage(qrCanvas, 290, 1135, 168, 160);
      } catch (e) {
        console.error('QR draw error:', e);
      }
    };
  }, [cert]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas || !cert) return;
    const link = document.createElement('a');
    const safeStudent = cert.student_name.replace(/[^a-zA-Z0-9]/g, '_');
    link.download = `NITAQ_Certificate_${safeStudent}.png`;
    link.href = canvas.toDataURL('image/png', 1.0);
    link.click();
  };

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <main className="cert-verify-main" style={{ flex: 1, maxWidth: '1100px', margin: '0 auto 60px auto', padding: '135px 20px 40px', width: '100%', boxSizing: 'border-box' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '80px 20px', fontSize: '1.2rem', color: '#64748B' }}>
            🔍 Verifying certificate authenticity...
          </div>
        ) : error ? (
          <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>❌</div>
            <h1 style={{ fontSize: '1.5rem', color: '#991B1B', fontWeight: 800 }}>Certificate Not Found</h1>
            <p style={{ color: '#475569', marginTop: '8px' }}>{error}</p>
            <Link to="/" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', background: '#0F3822', color: '#FFF', borderRadius: '8px', textDecoration: 'none', fontWeight: 700 }}>
              Return to Nitaq Academy Home
            </Link>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {/* Verification Success Banner */}
            <div className="cert-verify-banner" style={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', color: '#FFFFFF', padding: '24px 30px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', boxShadow: '0 10px 25px rgba(16, 185, 129, 0.25)' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.3rem', fontWeight: 800 }}>
                  <span>✅</span> Official Certificate Verified
                </div>
                <div style={{ opacity: 0.95, fontSize: '0.92rem', marginTop: '4px' }}>
                  Issued by Nitaq Academy (Sharjah, UAE). Authenticity & credentials confirmed.
                </div>
              </div>
              <button
                type="button"
                className="cert-download-btn"
                onClick={handleDownload}
                style={{ background: '#FFFFFF', color: '#047857', border: 'none', padding: '12px 24px', borderRadius: '10px', fontWeight: 800, fontSize: '0.9rem', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              >
                ⬇️ Download Official Certificate (PNG)
              </button>
            </div>

            {/* Certificate Details Card & Rendered Canvas */}
            <div className="cert-verify-grid">
              {/* Main Canvas Display */}
              <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>
                  Certificate Canvas Preview
                </h2>
                <div style={{ background: '#0F172A', padding: '10px', borderRadius: '12px' }}>
                  <canvas ref={canvasRef} style={{ width: '100%', height: 'auto', borderRadius: '6px', display: 'block' }} />
                </div>
              </div>

              {/* Sidebar Metadata */}
              <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', margin: 0, borderBottom: '2px solid #F1F5F9', paddingBottom: '12px' }}>
                  Credential Details
                </h3>

                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Student Name
                  </div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginTop: '4px' }}>
                    {cert.student_name}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Course Completed
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0F3822', marginTop: '4px' }}>
                    {cert.course_name}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Certificate ID
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, fontFamily: 'monospace', color: '#334155', marginTop: '4px', background: '#F8FAFC', padding: '6px 10px', borderRadius: '6px' }}>
                    {cert.id}
                  </div>
                </div>

                {cert.start_date && cert.end_date && (
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Program Duration
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#475569', marginTop: '4px' }}>
                      {cert.start_date} to {cert.end_date}
                    </div>
                  </div>
                )}

                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Issue Date
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#475569', marginTop: '4px' }}>
                    {cert.issue_date || 'N/A'}
                  </div>
                </div>

                {cert.remark && (
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Remarks / Notes
                    </div>
                    <div style={{ fontSize: '0.88rem', color: '#475569', marginTop: '4px', fontStyle: 'italic', background: '#F0FDF4', padding: '10px', borderRadius: '8px', borderLeft: '3px solid #10B981' }}>
                      "{cert.remark}"
                    </div>
                  </div>
                )}

                <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '16px', fontSize: '0.78rem', color: '#94A3B8', lineHeight: 1.5 }}>
                  This digital record confirms that the recipient has fulfilled all academic and practical training requirements for the specified program at NITAQ ACADEMY.
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
