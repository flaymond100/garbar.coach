export default function Foot({ t }) {
  return (
    <footer className="foot">
      <div className="wrap foot-inner">
        <span>{t.footer}</span>
        <span>{t.footerEnd}</span>
      </div>
    </footer>
  );
}
