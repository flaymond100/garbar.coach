import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header({ t, lang }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const go = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
  };

  const otherLang = lang === 'ru' ? 'ua' : 'ru';

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="wrap site-header-inner">
        <a className="site-logo" href="#top" onClick={(e) => go(e, 'top')}>
          <span className="logo-mark">
            <span className="logo-dot" />
            GARBAR
          </span>
          <span className="logo-sub">/ triathlon coach</span>
        </a>
        <nav className="site-nav">
          <a href="#case" onClick={(e) => go(e, 'case')}>{t.nav.case}</a>
          <a href="#bio" onClick={(e) => go(e, 'bio')}>{t.nav.bio}</a>
          <a href="#program" onClick={(e) => go(e, 'program')}>{t.nav.program}</a>
          <a href="#principles" onClick={(e) => go(e, 'principles')}>{t.nav.principles}</a>
          <a href="#faq" onClick={(e) => go(e, 'faq')}>{t.nav.faq}</a>
        </nav>
        <div className="site-header-right">
          <div className="lang-switch" aria-label="language">
            <Link to="/ru" className={lang === 'ru' ? 'is-active' : ''}>RU</Link>
            <span className="lang-divider">/</span>
            <Link to="/ua" className={lang === 'ua' ? 'is-active' : ''}>UA</Link>
          </div>
          <a className="site-cta" href="https://wa.me/4915116343656" target="_blank" rel="noreferrer">
            <span>{t.nav.contact}</span><span className="arrow">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
