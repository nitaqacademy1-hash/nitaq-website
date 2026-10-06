// Compressed frames are fetched in the background; only a small moving window
// is decoded. This avoids keeping 100 full-resolution images in graphics memory.
export function initStudentSequence(canvas, manifest, mobile) {
  const context = canvas.getContext('2d', { alpha: false });
  const count = mobile ? manifest.mobileFrameCount : manifest.frameCount;
  if (!context || !count || !window.createImageBitmap) return { render() {}, destroy() {} };
  const abort = new AbortController();
  const blobs = new Map();
  const decoded = new Map();
  const pending = new Map();
  let alive = true;
  let desired = 0;
  let width = 0;
  let height = 0;
  let frameRequest = 0;
  const path = i => `/nitaq/sequence/${mobile ? 'mobile/' : ''}student-${String(i + 1).padStart(3, '0')}.webp`;
  const getBlob = i => {
    if (!blobs.has(i)) blobs.set(i, fetch(path(i), { signal: abort.signal }).then(r => {
      if (!r.ok) throw new Error('Unavailable sequence frame');
      return r.blob();
    }).catch(() => null));
    return blobs.get(i);
  };
  const decode = i => {
    if (decoded.has(i)) return Promise.resolve(decoded.get(i));
    if (pending.has(i)) return pending.get(i);
    const promise = getBlob(i).then(blob => blob && alive ? createImageBitmap(blob) : null).then(bitmap => {
      pending.delete(i);
      if (!bitmap) return null;
      if (!alive) { bitmap.close(); return null; }
      decoded.set(i, bitmap);
      if (decoded.size > 12) {
        const farthest = [...decoded.keys()].sort((a, b) => Math.abs(b - desired) - Math.abs(a - desired));
        while (decoded.size > 12) { const key = farthest.shift(); decoded.get(key).close(); decoded.delete(key); }
      }
      return decoded.get(i) || null;
    }).catch(() => { pending.delete(i); return null; });
    pending.set(i, promise);
    return promise;
  };
  const draw = async () => {
    frameRequest = 0;
    const index = desired;
    const frame = await decode(index);
    if (!alive || desired !== index || !frame || !width || !height) return;
    const ratio = Math.max(width / frame.width, height / frame.height);
    const dw = frame.width * ratio;
    const dh = frame.height * ratio;
    context.drawImage(frame, (width - dw) * .68, (height - dh) * .42, dw, dh);
    canvas.style.opacity = '1';
    [index - 1, index + 1, index + 2].filter(i => i >= 0 && i < count).forEach(decode);
  };
  const schedule = () => { if (alive && !frameRequest) frameRequest = requestAnimationFrame(draw); };
  const observer = new ResizeObserver(entries => {
    const box = entries[0].contentRect;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    width = Math.round(box.width * dpr); height = Math.round(box.height * dpr);
    canvas.width = width; canvas.height = height; schedule();
  });
  observer.observe(canvas);
  // Six critical frames first, then three concurrent background fetches.
  (async () => {
    await decode(0); schedule();
    for (let i = 1; i < Math.min(6, count) && alive; i++) await getBlob(i);
    let next = 6;
    await Promise.all(Array.from({ length: 3 }, async () => {
      while (alive && next < count) await getBlob(next++);
    }));
  })();
  return {
    render(progress) { const next = Math.round(progress * (count - 1)); if (desired !== next) { desired = next; schedule(); } },
    destroy() { alive = false; abort.abort(); observer.disconnect(); cancelAnimationFrame(frameRequest); decoded.forEach(frame => frame.close()); decoded.clear(); blobs.clear(); canvas.style.opacity = '0'; },
  };
}
