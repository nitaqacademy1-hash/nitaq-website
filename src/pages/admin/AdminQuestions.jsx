/**
 * AdminQuestions.jsx — Question bank management + Add Question Modal.
 * Ultra-minimal design with compact typography, clean monochrome tables, and subtle borders.
 */

import React, { useState, useEffect, useCallback } from 'react';
import { listQuestions, createQuestion, updateQuestion, deleteQuestion, getShuffleSetting, toggleShuffleSetting, ApiError } from '../../services/diagnosticApi';
import '../sat/sat.css';

const SECTION_OPTIONS = ['', 'MATH', 'READING_WRITING'];

const DOMAINS_BY_SECTION = {
  MATH: [
    { value: 'ALGEBRA', label: 'Algebra' },
    { value: 'ADVANCED_MATH', label: 'Advanced Math' },
    { value: 'PROBLEM_SOLVING_DATA_ANALYSIS', label: 'Problem-Solving & Data Analysis' },
    { value: 'GEOMETRY_TRIGONOMETRY', label: 'Geometry & Trigonometry' },
  ],
  READING_WRITING: [
    { value: 'INFORMATION_IDEAS', label: 'Information & Ideas' },
    { value: 'CRAFT_STRUCTURE', label: 'Craft & Structure' },
    { value: 'EXPRESSION_IDEAS', label: 'Expression of Ideas' },
    { value: 'STANDARD_ENGLISH_CONVENTIONS', label: 'Standard English Conventions' },
  ],
};

const DOMAIN_DISPLAY = {
  ALGEBRA: 'Algebra',
  ADVANCED_MATH: 'Advanced Math',
  PROBLEM_SOLVING_DATA_ANALYSIS: 'Problem-Solving & Data',
  GEOMETRY_TRIGONOMETRY: 'Geometry & Trig',
  INFORMATION_IDEAS: 'Information & Ideas',
  CRAFT_STRUCTURE: 'Craft & Structure',
  EXPRESSION_IDEAS: 'Expression of Ideas',
  STANDARD_ENGLISH_CONVENTIONS: 'Standard English Conventions',
};

const modalOverlayStyle = {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  background: 'rgba(15, 23, 42, 0.5)',
  backdropFilter: 'blur(4px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  padding: '20px',
};

const modalContentStyle = {
  background: '#ffffff',
  border: '1px solid #E2E8F0',
  borderRadius: '16px',
  width: '100%',
  maxWidth: '620px',
  maxHeight: '90vh',
  overflowY: 'auto',
  padding: '28px',
  boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.15)',
};

const inputStyle = {
  width: '100%',
  padding: '9px 12px',
  background: '#FAFAFA',
  border: '1px solid #CBD5E1',
  borderRadius: '8px',
  color: '#0F172A',
  fontSize: '0.85rem',
  fontFamily: 'inherit',
  boxSizing: 'border-box',
  marginTop: '4px',
  outline: 'none',
};

export default function AdminQuestions() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [sectionFilter, setSectionFilter] = useState('');
  const [deleting, setDeleting] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [modalError, setModalError] = useState('');
  const [shuffleQuestions, setShuffleQuestions] = useState(false);
  const [togglingShuffle, setTogglingShuffle] = useState(false);

  const [formData, setFormData] = useState({
    question_code: '',
    section: 'MATH',
    domain: 'ALGEBRA',
    difficulty: 'MEDIUM',
    question_text: '',
    option_a: '',
    option_b: '',
    option_c: '',
    option_d: '',
    correct_answer: 'A',
    explanation: '',
  });

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await listQuestions({ section: sectionFilter || undefined });
      setQuestions(data);
    } catch (e) {
      setError(e instanceof ApiError ? e.message : 'Failed to load questions');
    } finally {
      setLoading(false);
    }
  }, [sectionFilter]);

  useEffect(() => { load(); }, [load]);

  useEffect(() => {
    getShuffleSetting()
      .then(res => setShuffleQuestions(!!res?.shuffle_questions))
      .catch(() => {});
  }, []);

  const handleToggleShuffle = async () => {
    setTogglingShuffle(true);
    try {
      const res = await toggleShuffleSetting();
      setShuffleQuestions(!!res?.shuffle_questions);
    } catch (e) {
      alert(e instanceof ApiError ? e.message : 'Failed to update shuffle setting');
    } finally {
      setTogglingShuffle(false);
    }
  };

  const handleOpenAdd = () => {
    setEditingId(null);
    setModalError('');
    let nextNum = questions.length + 1;
    let code = `SAT-Q${nextNum}`;
    const existingCodes = new Set(questions.map(q => q.question_code));
    while (existingCodes.has(code)) {
      nextNum += 1;
      code = `SAT-Q${nextNum}`;
    }

    setFormData({
      question_code: code,
      section: 'MATH',
      domain: 'ALGEBRA',
      difficulty: 'MEDIUM',
      question_text: '',
      option_a: '',
      option_b: '',
      option_c: '',
      option_d: '',
      correct_answer: 'A',
      explanation: '',
    });
    setShowModal(true);
  };

  const handleOpenEdit = (q) => {
    setEditingId(q.id);
    setModalError('');
    setFormData({
      question_code: q.question_code || '',
      section: q.section || 'MATH',
      domain: q.domain || 'ALGEBRA',
      difficulty: q.difficulty || 'MEDIUM',
      question_text: q.question_text || '',
      option_a: q.option_a || '',
      option_b: q.option_b || '',
      option_c: q.option_c || '',
      option_d: q.option_d || '',
      correct_answer: q.correct_answer || 'A',
      explanation: q.explanation || '',
    });
    setShowModal(true);
  };

  const handleSectionChange = (sec) => {
    const defaultDomain = sec === 'MATH' ? 'ALGEBRA' : 'INFORMATION_IDEAS';
    setFormData(prev => ({ ...prev, section: sec, domain: defaultDomain }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setModalError('');
    try {
      if (editingId) {
        const updated = await updateQuestion(editingId, formData);
        setQuestions(prev => prev.map(q => q.id === editingId ? { ...q, ...updated } : q));
      } else {
        const created = await createQuestion(formData);
        setQuestions(prev => [created, ...prev]);
      }
      setShowModal(false);
      setEditingId(null);
    } catch (err) {
      const msg = err instanceof ApiError
        ? err.message
        : (typeof err === 'string' ? err : (err?.message || (editingId ? 'Failed to update question' : 'Failed to create question')));
      setModalError(typeof msg === 'string' ? msg : JSON.stringify(msg));
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id, code) => {
    if (!window.confirm(`Delete question ${code}? This cannot be undone.`)) return;
    setDeleting(id);
    try {
      await deleteQuestion(id);
      setQuestions(prev => prev.filter(q => q.id !== id));
    } catch (e) {
      alert(e instanceof ApiError ? e.message : 'Delete failed');
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-heading, sans-serif)', fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', margin: '0 0 2px 0' }}>
            Question Bank
          </h1>
          <p style={{ color: '#64748B', fontSize: '0.82rem', margin: 0 }}>
            {questions.length} total questions in active assessment
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <label style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#F8FAFC',
            border: '1px solid #CBD5E1',
            borderRadius: '8px',
            padding: '7px 12px',
            fontSize: '0.82rem',
            fontWeight: 700,
            color: '#0F172A',
            cursor: 'pointer',
            userSelect: 'none'
          }}>
            <input
              type="checkbox"
              checked={shuffleQuestions}
              onChange={handleToggleShuffle}
              disabled={togglingShuffle}
              style={{ width: '16px', height: '16px', accentColor: '#2E7D32', cursor: 'pointer' }}
            />
            <span>Shuffle questions for each student</span>
          </label>

          <button
            className="admin-btn primary"
            onClick={handleOpenAdd}
          >
            + Add Question
          </button>
          <select
            value={sectionFilter}
            onChange={e => setSectionFilter(e.target.value)}
            style={{
              background: '#ffffff',
              border: '1px solid #CBD5E1',
              borderRadius: '8px',
              color: '#0F172A',
              padding: '8px 12px',
              fontSize: '0.82rem',
              fontWeight: 600,
              fontFamily: 'inherit',
              outline: 'none',
            }}
          >
            <option value="">All Sections</option>
            <option value="MATH">Mathematics</option>
            <option value="READING_WRITING">Reading &amp; Writing</option>
          </select>
          <button className="admin-btn outline" onClick={load} style={{ padding: '8px 12px', fontSize: '0.8rem' }}>
            Refresh
          </button>
        </div>
      </div>

      {/* Domain distribution pills */}
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '20px' }}>
        {Object.entries(DOMAIN_DISPLAY).map(([key, label]) => {
          const count = questions.filter(q => q.domain === key).length;
          return (
            <span key={key} style={{
              background: '#ffffff',
              border: '1px solid #E2E8F0',
              borderRadius: '6px',
              padding: '4px 10px',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: count > 0 ? '#0F172A' : '#94A3B8',
            }}>
              {label}: <strong>{count}</strong>
            </span>
          );
        })}
      </div>

      {/* Table Card */}
      <div className="admin-table-card">
        {loading ? (
          <div style={{ padding: '48px', textAlign: 'center' }}>
            <div className="spinner" style={{ margin: '0 auto 10px', width: '28px', height: '28px' }} />
            <p style={{ color: '#64748B', fontSize: '0.82rem' }}>Loading questions…</p>
          </div>
        ) : error ? (
          <div style={{ padding: '32px', textAlign: 'center', color: '#B91C1C', fontSize: '0.85rem' }}>{error}</div>
        ) : (
          <div className="admin-table-scroll">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Section</th>
                  <th>Domain</th>
                  <th>Difficulty</th>
                  <th>Question Preview</th>
                  <th>Answer</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {questions.length === 0 ? (
                  <tr>
                    <td colSpan={8} style={{ textAlign: 'center', padding: '40px 20px', color: '#64748B' }}>
                      <p style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.95rem', marginBottom: '4px' }}>
                        No questions in database
                      </p>
                      <p style={{ fontSize: '0.82rem', color: '#64748B', marginBottom: '16px' }}>
                        Click "+ Add Question" to enter questions manually.
                      </p>
                      <button className="admin-btn primary" onClick={handleOpenAdd}>
                        + Add Question
                      </button>
                    </td>
                  </tr>
                ) : questions.map(q => (
                  <tr key={q.id}>
                    <td className="mono" style={{ fontWeight: 600 }}>{q.question_code}</td>
                    <td style={{ fontSize: '0.8rem', fontWeight: 600, color: '#334155' }}>
                      {q.section === 'MATH' ? 'Math' : 'R&W'}
                    </td>
                    <td style={{ fontSize: '0.8rem', color: '#334155' }}>
                      {DOMAIN_DISPLAY[q.domain] || q.domain}
                    </td>
                    <td>
                      <span style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        padding: '2px 6px',
                        borderRadius: '4px',
                        background: '#F1F5F9',
                        color: '#475569',
                        textTransform: 'uppercase'
                      }}>
                        {q.difficulty}
                      </span>
                    </td>
                    <td style={{ maxWidth: '280px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: '#334155', fontSize: '0.82rem' }}>
                      {q.question_text}
                    </td>
                    <td style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.9rem' }}>
                      {q.correct_answer}
                    </td>
                    <td>
                      <span style={{ color: q.is_active ? '#0F172A' : '#94A3B8', fontWeight: 600, fontSize: '0.75rem' }}>
                        {q.is_active ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                        <button
                          className="admin-btn outline"
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            padding: '5px 10px',
                            color: '#2563EB',
                            background: '#EFF6FF',
                            borderColor: '#BFDBFE',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            cursor: 'pointer',
                          }}
                          onClick={() => handleOpenEdit(q)}
                          title="Edit Question"
                        >
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 20h9"/>
                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                          </svg>
                          <span>Edit</span>
                        </button>

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
                            gap: '5px',
                            cursor: 'pointer',
                          }}
                          onClick={() => handleDelete(q.id, q.question_code)}
                          disabled={deleting === q.id}
                          title="Delete Question"
                        >
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="3 6 5 6 21 6"/>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                          </svg>
                          <span>{deleting === q.id ? '…' : 'Delete'}</span>
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

      {/* Add / Edit Question Modal */}
      {showModal && (
        <div style={modalOverlayStyle} onClick={() => setShowModal(false)}>
          <div style={modalContentStyle} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-heading, sans-serif)', fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', margin: '0 0 2px 0' }}>
                  {editingId ? 'Edit SAT Question' : 'Add SAT Question'}
                </h2>
                <p style={{ color: '#64748B', fontSize: '0.8rem', margin: 0 }}>
                  {editingId ? `Editing question ID #${editingId}` : 'Active diagnostic assessment entry'}
                </p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                style={{ background: '#F1F5F9', border: 'none', color: '#64748B', width: '28px', height: '28px', borderRadius: '50%', fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                ✕
              </button>
            </div>

            {modalError && (
              <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', color: '#B91C1C', padding: '10px 14px', borderRadius: '8px', marginBottom: '14px', fontSize: '0.82rem' }}>
                {modalError}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px' }}>
                <div>
                  <label style={{ fontSize: '0.72rem', color: '#475569', fontWeight: 700, textTransform: 'uppercase' }}>Section</label>
                  <select
                    value={formData.section}
                    onChange={e => handleSectionChange(e.target.value)}
                    style={inputStyle}
                  >
                    <option value="MATH">Mathematics</option>
                    <option value="READING_WRITING">Reading &amp; Writing</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '0.72rem', color: '#475569', fontWeight: 700, textTransform: 'uppercase' }}>Domain</label>
                  <select
                    value={formData.domain}
                    onChange={e => setFormData({ ...formData, domain: e.target.value })}
                    style={inputStyle}
                  >
                    {DOMAINS_BY_SECTION[formData.section].map(d => (
                      <option key={d.value} value={d.value}>{d.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '0.72rem', color: '#475569', fontWeight: 700, textTransform: 'uppercase' }}>Difficulty</label>
                  <select
                    value={formData.difficulty}
                    onChange={e => setFormData({ ...formData, difficulty: e.target.value })}
                    style={inputStyle}
                  >
                    <option value="EASY">Easy</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="HARD">Hard</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.72rem', color: '#475569', fontWeight: 700, textTransform: 'uppercase' }}>Question Code / ID * (Max 20 chars)</label>
                <input
                  type="text"
                  required
                  minLength={3}
                  maxLength={20}
                  placeholder="e.g. MATH-ALG-001"
                  value={formData.question_code}
                  onChange={e => setFormData({ ...formData, question_code: e.target.value })}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.72rem', color: '#475569', fontWeight: 700, textTransform: 'uppercase' }}>Question Text *</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Type or paste the SAT question..."
                  value={formData.question_text}
                  onChange={e => setFormData({ ...formData, question_text: e.target.value })}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                <div>
                  <label style={{ fontSize: '0.72rem', color: '#475569', fontWeight: 700, textTransform: 'uppercase' }}>Option A *</label>
                  <input
                    type="text"
                    required
                    placeholder="Choice A"
                    value={formData.option_a}
                    onChange={e => setFormData({ ...formData, option_a: e.target.value })}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.72rem', color: '#475569', fontWeight: 700, textTransform: 'uppercase' }}>Option B *</label>
                  <input
                    type="text"
                    required
                    placeholder="Choice B"
                    value={formData.option_b}
                    onChange={e => setFormData({ ...formData, option_b: e.target.value })}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.72rem', color: '#475569', fontWeight: 700, textTransform: 'uppercase' }}>Option C *</label>
                  <input
                    type="text"
                    required
                    placeholder="Choice C"
                    value={formData.option_c}
                    onChange={e => setFormData({ ...formData, option_c: e.target.value })}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.72rem', color: '#475569', fontWeight: 700, textTransform: 'uppercase' }}>Option D *</label>
                  <input
                    type="text"
                    required
                    placeholder="Choice D"
                    value={formData.option_d}
                    onChange={e => setFormData({ ...formData, option_d: e.target.value })}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px' }}>
                <div>
                  <label style={{ fontSize: '0.72rem', color: '#0F172A', fontWeight: 700, textTransform: 'uppercase' }}>Correct Answer *</label>
                  <select
                    value={formData.correct_answer}
                    onChange={e => setFormData({ ...formData, correct_answer: e.target.value })}
                    style={inputStyle}
                  >
                    <option value="A">Option A</option>
                    <option value="B">Option B</option>
                    <option value="C">Option C</option>
                    <option value="D">Option D</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '0.72rem', color: '#475569', fontWeight: 700, textTransform: 'uppercase' }}>Explanation</label>
                  <input
                    type="text"
                    placeholder="Brief explanation"
                    value={formData.explanation}
                    onChange={e => setFormData({ ...formData, explanation: e.target.value })}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '12px' }}>
                <button
                  type="button"
                  className="admin-btn outline"
                  onClick={() => setShowModal(false)}
                  style={{ fontSize: '0.8rem', padding: '8px 14px' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="admin-btn primary"
                  disabled={submitting}
                  style={{ fontSize: '0.8rem', padding: '8px 16px' }}
                >
                  {submitting ? 'Saving…' : (editingId ? 'Update Question' : 'Save Question')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
