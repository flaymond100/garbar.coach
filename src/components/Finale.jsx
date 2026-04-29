export default function Finale({ t }) {
  const f = t.finale;
  return (
    <section className="finale" id="contact">
      <div className="wrap finale-grid">
        <div className="finale-meta">
          <div className="id">{f.sectionId}</div>
          <div className="free">{f.free}</div>
        </div>
        <h2>
          {f.head1}<br/>
          <span className="stroke">{f.head2}</span><br/>
          {f.head3a} <em>{f.head3em}</em>{f.head3dot}
        </h2>

        <div className="contact-grid">
          {f.contacts.map((c, i) => (
            <a className="contact" href={c.href} target="_blank" rel="noreferrer" key={i}>
              <div className="ch">{c.ch}</div>
              <div className="v"><span>{c.v}</span><span className="arrow">↗</span></div>
              <div className="sub">{c.sub}</div>
            </a>
          ))}
        </div>

        <div className="finale-foot">
          <span>{f.foot[0]}<b>{f.foot[1]}</b></span>
          <span>{f.foot[2]}<b>{f.foot[3]}</b></span>
          <span>{f.foot[4]}</span>
        </div>
      </div>
    </section>
  );
}
