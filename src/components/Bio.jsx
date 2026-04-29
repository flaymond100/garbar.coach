import SectionHeader from './SectionHeader.jsx';

export default function Bio({ t }) {
  const b = t.bio;
  return (
    <>
      <SectionHeader id={b.section.id} label={b.section.label}>
        {b.head1} <em>{b.head1em}</em>{b.head1dot}<br/>
        <span className="stroke">{b.head2}</span>
      </SectionHeader>
      <section className="bio" id="bio">
        <div className="wrap bio-grid">
          <div className="bio-portrait">
            <div className="badge">{b.badge}</div>
            <div className="ph-tag">
              <span>{b.photoTag[0]}</span>
              <span>{b.photoTag[1]}</span>
            </div>
          </div>
          <div className="bio-list">
            <ul className="creds">
              {b.creds.map((c, i) => (
                <li key={i}>
                  <span className="y">{c.y}</span>
                  <span className="label-cred">{c.t}<em>// {c.d}</em></span>
                  <span className="arrow-cred">→</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
