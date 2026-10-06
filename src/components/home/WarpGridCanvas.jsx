import { useEffect, useRef } from 'react';

export default function WarpGridCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const PARTICLE_RGB = '190, 235, 175'; // Soft mint / emerald cloak particles

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles = [];

    let hasEntered = false;
    let isTouch = false;
    let targetX = 0;
    let targetY = 0;
    let easedX = 0;
    let easedY = 0;
    let animId = null;

    function resize() {
      const parent = canvas.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Grid step: max(9, min(w,h)/22) px
      const minDim = Math.min(width, height) || 1;
      const step = Math.max(9, minDim / 22);

      const cols = Math.ceil(width / step) + 2;
      const rows = Math.ceil(height / step) + 2;

      const offsetX = (width - (cols - 1) * step) / 2;
      const offsetY = (height - (rows - 1) * step) / 2;

      particles = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const hx = offsetX + c * step;
          const hy = offsetY + r * step;
          particles.push({
            homeX: hx,
            homeY: hy,
            x: hx,
            y: hy,
            vx: 0,
            vy: 0,
            radius: 1.0 + Math.random() * 1.5 // 1 - 2.5px
          });
        }
      }

      if (!hasEntered) {
        easedX = width * 0.5;
        easedY = height * 0.5;
        targetX = easedX;
        targetY = easedY;
      }
    }

    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas.parentElement || document.body);

    function onPointerMove(e) {
      if (isTouch) return;
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right
      ) {
        hasEntered = true;
        targetX = e.clientX - rect.left;
        targetY = e.clientY - rect.top;
      }
    }

    function onTouchStart() {
      isTouch = true;
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });

    let startTime = null;

    function render(now) {
      if (!startTime) startTime = now;
      const t = (now - startTime) * 0.001;

      // Drift on slow Lissajous before pointer has entered or on touch
      if (!hasEntered || isTouch) {
        targetX = width * (0.5 + 0.32 * Math.sin(t * 0.7) * Math.cos(t * 0.23));
        targetY = height * (0.5 + 0.28 * Math.sin(t * 0.52 + 1.1));
      }

      // Lerp pointer at 0.16
      easedX += (targetX - easedX) * 0.16;
      easedY += (targetY - easedY) * 0.16;

      const minDim = Math.min(width, height) || 1;
      const R = 0.34 * minDim;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // d = distance from the eased pointer
        const dx = p.x - easedX;
        const dy = p.y - easedY;
        const d = Math.hypot(dx, dy);

        // if d < R: push away along normal by f = (1 - d/R)^2 * 3.4
        if (d < R) {
          const f = Math.pow(1 - d / R, 2) * 3.4;
          const normX = d > 0.0001 ? dx / d : (Math.random() - 0.5);
          const normY = d > 0.0001 ? dy / d : (Math.random() - 0.5);
          p.vx += normX * f;
          p.vy += normY * f;
        }

        // Always pull home: v += (home - pos) * 0.024
        p.vx += (p.homeX - p.x) * 0.024;
        p.vy += (p.homeY - p.y) * 0.024;

        // Damp: v *= 0.86
        p.vx *= 0.86;
        p.vy *= 0.86;

        // Integrate: pos += v
        p.x += p.vx;
        p.y += p.vy;

        // Fade by displacement: alpha = max(0, 0.72 - distanceFromHome / 70)
        const distHome = Math.hypot(p.x - p.homeX, p.y - p.homeY);
        const alpha = Math.max(0, 0.72 - distHome / 70);

        if (alpha > 0.005) {
          ctx.fillStyle = `rgba(${PARTICLE_RGB}, ${alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    }

    resize();
    animId = requestAnimationFrame(render);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      ro.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('touchstart', onTouchStart);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="nh-warp-canvas"
      aria-hidden="true"
    />
  );
}
