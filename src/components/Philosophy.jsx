import SectionHeader from './SectionHeader.jsx';

export default function Philosophy({ t }) {
  const p = t.principles;
  return (
    <>
      <SectionHeader id={p.section.id} label={p.section.label}>
        {p.head1} <em>{p.head1em}</em>{p.head1dot}<br/>
        {p.head2} <span className="yellow">{p.head2y}</span>{p.head2dot}
      </SectionHeader>
      <section className="philosophy" id="principles">
        <div className="wrap">
          <div className="principles">
            {p.items.map((item, i) => (
              <div className="principle" key={i}>
                <div className="p-num">{p.label} / {item.n}</div>
                <h3>{item.t}</h3>
                <p>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
