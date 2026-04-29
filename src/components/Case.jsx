import SectionHeader from './SectionHeader.jsx';

export default function Case({ t }) {
  const c = t.case;
  return (
    <>
      <SectionHeader id={c.section.id} label={c.section.label}>
        {c.head1} <em>{c.head1em}</em> {c.head1tail}<br/>
        <span className="stroke">{c.head2}</span> {c.head2tail}
      </SectionHeader>
      <section className="case" id="case">
        <div className="wrap">
          <div className="case-body">
            <div className="case-photo">
              <div className="case-photo-img" />
              <div className="ph-tag">
                <span>{c.photoTag[0]}</span>
                <span>{c.photoTag[1]}</span>
              </div>
            </div>
            <div className="case-text">
              <p className="pull">{c.pull[0]}<em>{c.pull[1]}</em>{c.pull[2]}</p>
              <p>{c.p1[0]}<strong>{c.p1[1]}</strong>{c.p1[2]}</p>
              <p>{c.p2}</p>
              <p className="byline">{c.byline}</p>
            </div>

            <div className="case-stats">
              {c.stats.map((s, i) => (
                <div className="stat" key={i}>
                  <div className="lbl"><span>{s.lbl}</span><span className="delta">{s.delta}</span></div>
                  <div className="v">{s.v}{s.sup && <sup>{s.sup}</sup>}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
