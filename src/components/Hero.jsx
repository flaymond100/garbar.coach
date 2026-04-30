import { useRef } from 'react';

export default function Hero({ t }) {
  const [a, burnLbl, burnEm, restLbl, restEm] = t.hero.title;
  const [ledeA, ledeB, ledeC] = t.hero.lede;
  const waUrl = `https://wa.me/4915116343656?text=${encodeURIComponent(t.hero.waPrimary)}`;
  const photoRef = useRef(null);

  const updateTilt = (clientX, clientY) => {
    const el = photoRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = (clientX - rect.left) / rect.width;
    const py = (clientY - rect.top) / rect.height;

    const rx = (0.5 - py) * 14;
    const ry = (px - 0.5) * 16;
    const tx = (px - 0.5) * 18;
    const ty = (py - 0.5) * 18;

    el.style.setProperty('--rx', `${rx.toFixed(2)}deg`);
    el.style.setProperty('--ry', `${ry.toFixed(2)}deg`);
    el.style.setProperty('--tx', `${tx.toFixed(2)}px`);
    el.style.setProperty('--ty', `${ty.toFixed(2)}px`);
    el.style.setProperty('--gx', `${(px * 100).toFixed(1)}%`);
    el.style.setProperty('--gy', `${(py * 100).toFixed(1)}%`);
  };

  const resetTilt = () => {
    const el = photoRef.current;
    if (!el) return;

    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--tx', '0px');
    el.style.setProperty('--ty', '0px');
    el.style.setProperty('--gx', '50%');
    el.style.setProperty('--gy', '50%');
  };

  const onTouchMove = (e) => {
    const touch = e.touches[0];
    if (!touch) return;
    updateTilt(touch.clientX, touch.clientY);
  };

  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-display">
            <h1>
              <span className="ln"><span>{a}</span></span>
              <span className="ln"><span>{burnLbl} <span className="stroke">{burnEm}</span></span></span>
              <span className="ln"><span>{restLbl} <span className="accent">{restEm}</span></span></span>
            </h1>
            <p className="hero-lede">{ledeA}<b>{ledeB}</b>{ledeC}</p>
            <div className="hero-buttons">
              <a className="btn primary" href={waUrl} target="_blank" rel="noreferrer">
                <span>{t.hero.ctaPrimary}</span><span className="arrow">↗</span>
              </a>
              <a className="btn ghost" href="#program">
                <span>{t.hero.ctaSecondary}</span><span className="arrow">↓</span>
              </a>
            </div>
          </div>

          <div
            className="hero-photo interactive-3d"
            ref={photoRef}
            onMouseMove={(e) => updateTilt(e.clientX, e.clientY)}
            onMouseLeave={resetTilt}
            onTouchMove={onTouchMove}
            onTouchEnd={resetTilt}
          >
            <div className="img"><img src="/assets/kosta-2.jpg" alt={t.hero.imgAlt} width="600" height="800" loading="eager" /></div>
            <div className="scan" />
            <div className="corners"><span /><span /><span /><span /></div>
            <div className="crosshair" />
            <div className="tel tl">{t.hero.photo.tl}</div>
            <div className="tel tr">{t.hero.photo.tr}</div>
            <div className="tel bl">{t.hero.photo.bl}</div>
            <div className="tel br">{t.hero.photo.br}</div>
          </div>

          <div className="hero-metrics">
            {t.hero.metrics.map((m, i) => (
              <div className={`metric ${m.mod}`} key={i}>
                <div className="lbl"><span>{m.lbl}</span><span className="id">{m.id}</span></div>
                <div className="v">{m.v}{m.u && <span className="u">{m.u}</span>}</div>
                <div className="bar"><i style={{ '--w': m.w }} /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
