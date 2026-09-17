import React, { useMemo } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

/**
 * Intelligent parser that converts plain text expressions with exponents,
 * fractions, or squares into LaTeX syntax if no explicit LaTeX delimiters exist.
 */
function autoFormatPlainMath(str) {
  if (!str) return str;

  // If the string already contains explicit LaTeX math delimiters, keep as-is
  if (/(\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\)|\$(?!\s)(?:[^\$\n]|\\\$)+?(?<!\s)\$)/.test(str)) {
    return str;
  }

  let formatted = str;

  // 1. Function definitions with exponential fractions: e.g. f(x) = 27(1.20)^(x/3)
  formatted = formatted.replace(
    /\b([a-zA-Z]\([a-zA-Z0-9]+\)\s*=\s*[\d\.]*(?:\([^\)]+\)|[a-zA-Z0-9]+)\^\(([a-zA-Z0-9]+)\/([a-zA-Z0-9]+)\))/g,
    (match, full, num, den) => `$${full.replace(/\^.+$/, '')}^{\\frac{${num}}{${den}}}$`
  );

  // 2. Parenthesized expressions with carets: e.g. (m^4 q^4 z^-1)(m q^5 z^3)
  formatted = formatted.replace(
    /(\([a-zA-Z0-9\s\^\-\+\/\.]+\)(?:\([a-zA-Z0-9\s\^\-\+\/\.]+\))*)/g,
    (match) => {
      if (match.includes('^')) {
        let m = match
          .replace(/\^\(([a-zA-Z0-9]+)\/([a-zA-Z0-9]+)\)/g, '^{\\frac{$1}{$2}}')
          .replace(/\^\(([^)]+)\)/g, '^{$1}')
          .replace(/\^([a-zA-Z0-9\+\-]+)/g, '^{$1}');
        return `$${m}$`;
      }
      return match;
    }
  );

  // 3. Isolated equations/expressions like (1.20)^2 = 1.44 or 6/3 = 2 or x^2 - 5x + 6 = 0
  formatted = formatted.replace(
    /((?:\([^\)]+\)|[a-zA-Z0-9]+)\^[a-zA-Z0-9\(\)\-\+\/]+(?:\s*[=\+\-\*\/]\s*[a-zA-Z0-9\.\(\)\^\-]+)*)/g,
    (match) => {
      if (match.startsWith('$') && match.endsWith('$')) return match;
      let m = match
        .replace(/\^\(([a-zA-Z0-9]+)\/([a-zA-Z0-9]+)\)/g, '^{\\frac{$1}{$2}}')
        .replace(/\^\(([^)]+)\)/g, '^{$1}')
        .replace(/\^([a-zA-Z0-9\+\-]+)/g, '^{$1}');
      return `$${m}$`;
    }
  );

  // 4. Standalone caret powers like m^4, q^20, z^-3, x^2, t^2
  formatted = formatted.replace(
    /\b([a-zA-Z0-9]+)\^([a-zA-Z0-9\+\-]+)/g,
    (match, base, exp) => `$${base}^{${exp}}$`
  );

  // Clean up any double dollars $$ produced by overlapping replacements
  formatted = formatted.replace(/\$\$+/g, '$');

  return formatted;
}

/**
 * Splits a string into text and LaTeX math segments.
 * Distinguishes true LaTeX math from currency symbols ($24, $30,000, etc.).
 */
function parseMathSegments(rawStr) {
  if (!rawStr) return [];

  const str = autoFormatPlainMath(rawStr);

  // LaTeX delimiters: $$...$$, \[...\], \(...\), or $...$
  const regex = /(\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\)|\$(?!\s)(?:[^\$\n]|\\\$)+?(?<!\s)\$)/g;
  const segments = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(str)) !== null) {
    const raw = match[0];
    const index = match.index;

    // Filter out currency patterns: e.g. $24, $30,000, $45.50
    if (raw.startsWith('$') && !raw.startsWith('$$')) {
      const inner = raw.slice(1, -1).trim();
      // If the contents is purely numbers, commas, or decimals, it's currency
      if (/^\d+(?:[,\.]\d+)?$/.test(inner)) {
        continue;
      }
    }

    if (index > lastIndex) {
      segments.push({ type: 'text', value: str.slice(lastIndex, index) });
    }

    let mathContent = raw;
    let isBlock = false;

    if (raw.startsWith('$$') && raw.endsWith('$$')) {
      mathContent = raw.slice(2, -2);
      isBlock = true;
    } else if (raw.startsWith('\\[') && raw.endsWith('\\]')) {
      mathContent = raw.slice(2, -2);
      isBlock = true;
    } else if (raw.startsWith('\\(') && raw.endsWith('\\)')) {
      mathContent = raw.slice(2, -2);
    } else if (raw.startsWith('$') && raw.endsWith('$')) {
      mathContent = raw.slice(1, -1);
    }

    segments.push({ type: 'math', value: mathContent, isBlock });
    lastIndex = index + raw.length;
  }

  if (lastIndex < str.length) {
    segments.push({ type: 'text', value: str.slice(lastIndex) });
  }

  return segments;
}

/**
 * MathText Component
 * Renders text containing LaTeX math formulas or auto-formatted plain math
 * using KaTeX with fallback to plain text.
 */
export default function MathText({ text, className = '', style = {}, block = false }) {
  const segments = useMemo(() => {
    return parseMathSegments(text);
  }, [text]);

  if (!text) return null;

  if (segments.length === 0) {
    return <span className={className} style={style}>{text}</span>;
  }

  return (
    <span className={`sat-math-rendered-root ${className}`.trim()} style={style}>
      {segments.map((seg, idx) => {
        if (seg.type === 'text') {
          // Handle newlines if present
          if (seg.value.includes('\n')) {
            const lines = seg.value.split('\n');
            return (
              <React.Fragment key={idx}>
                {lines.map((line, lIdx) => (
                  <React.Fragment key={lIdx}>
                    {line}
                    {lIdx < lines.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </React.Fragment>
            );
          }
          return <span key={idx}>{seg.value}</span>;
        }

        // Math segment
        try {
          const html = katex.renderToString(seg.value, {
            throwOnError: false,
            displayMode: block || seg.isBlock,
            output: 'htmlAndMathml',
          });

          return (
            <span
              key={idx}
              className={`sat-math-segment ${seg.isBlock ? 'sat-math-block' : 'sat-math-inline'}`}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch (err) {
          console.warn('KaTeX render error:', err);
          return <span key={idx} className="sat-math-fallback">{seg.value}</span>;
        }
      })}
    </span>
  );
}
