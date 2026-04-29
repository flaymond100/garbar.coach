export default function Ticker({ t }) {
  const Row = () => (
    <div className="ticker-track">
      {t.ticker.flatMap((cell, i) => {
        const [num, lbl, mod] = cell;
        return [
          <span key={`n${i}`} className={`num ${mod || ''}`}>{num}</span>,
          <span key={`l${i}`} className="lbl">{lbl}</span>,
          <span key={`p${i}`} className="pipe">|</span>,
        ];
      })}
    </div>
  );
  return (
    <div className="ticker">
      <div className="ticker-inner"><Row /><Row /></div>
    </div>
  );
}
