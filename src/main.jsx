import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { getDict } from './i18n/index.js';
import Site from './components/Site.jsx';
import './styles.css';

function LangPage({ lang }) {
  const dict = getDict(lang);
  // Update <html lang> + <title>
  React.useEffect(() => {
    document.documentElement.lang = dict.meta.lang;
    document.title = dict.meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', dict.meta.description);
  }, [dict]);
  return <Site t={dict} lang={lang} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/ru" replace />} />
        <Route path="/ru" element={<LangPage lang="ru" />} />
        <Route path="/ua" element={<LangPage lang="ua" />} />
        <Route path="/:lang" element={<Navigate to="/ru" replace />} />
        <Route path="*" element={<Navigate to="/ru" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
