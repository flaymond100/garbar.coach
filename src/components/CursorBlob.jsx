import { useEffect, useRef } from 'react';

export default function CursorBlob() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    let mx = 0, my = 0, x = 0, y = 0, raf = 0;
    const move = (e) => { mx = e.clientX; my = e.clientY; };
    const tick = () => {
      x += (mx - x) * 0.22; y += (my - y) * 0.22;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener('mousemove', move);

    // Re-bind hover targets when DOM changes
    const bind = () => {
      const targets = document.querySelectorAll('a, button, .btn, .faq-item, .creds li, .voice, .plan, .contact, .principle');
      const on = () => el.classList.add('hover');
      const off = () => el.classList.remove('hover');
      targets.forEach(t => {
        t.addEventListener('mouseenter', on);
        t.addEventListener('mouseleave', off);
      });
      return () => {
        targets.forEach(t => {
          t.removeEventListener('mouseenter', on);
          t.removeEventListener('mouseleave', off);
        });
      };
    };
    const unbind = bind();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', move);
      unbind();
    };
  }, []);
  return <div className="cursor-blob" ref={ref} />;
}
