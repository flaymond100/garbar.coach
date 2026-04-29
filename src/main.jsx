import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { getDict, dicts } from './i18n/index.js';
import Site from './components/Site.jsx';
import './styles.css';

function LangPage() {
  const { lang } = useParams();
  const safe = dicts[lang] ? lang : 'ru';
  const dict = getDict(safe);
  // Update <html lang> + <title>
  React.useEffect(() => {
    document.documentElement.lang = dict.meta.lang;
    document.title = dict.meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', dict.meta.description);
  }, [dict]);
  return <Site t={dict} lang={safe} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/ru" replace />} />
        <Route path="/:lang" element={<LangPage />} />
        <Route path="*" element={<Navigate to="/ru" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
