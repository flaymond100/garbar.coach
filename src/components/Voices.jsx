import SectionHeader from './SectionHeader.jsx';

export default function Voices({ t }) {
  const v = t.voices;
  return (
    <>
      <SectionHeader id={v.section.id} label={v.section.label}>
        <em>{v.head1em}</em>{v.head1tail}
      </SectionHeader>
      <section className="voices">
        <div className="wrap">
          <div className="voices-grid">
            {v.items.map((item, i) => (
              <div className="voice" key={i}>
                <span className="quote-mark">"</span>
                <p className="quote" dangerouslySetInnerHTML={{ __html: item.q }} />
                <div className="author">
                  <span className="name">{item.name}</span>
                  <span>{item.meta}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
