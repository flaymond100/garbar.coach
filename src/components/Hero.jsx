export default function Hero({ t }) {
  const [a, burnLbl, burnEm, restLbl, restEm] = t.hero.title;
  const [ledeA, ledeB, ledeC] = t.hero.lede;
  const waUrl = `https://wa.me/4915116343656?text=${encodeURIComponent(t.hero.waPrimary)}`;

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

          <div className="hero-photo">
            <div className="img" />
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
