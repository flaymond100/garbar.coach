import SectionHeader from './SectionHeader.jsx';

export default function Program({ t }) {
  const p = t.program;
  return (
    <>
      <SectionHeader id={p.section.id} label={p.section.label}>
        {p.head1} <em>{p.head1em}</em>{p.head1dot}<br/>
        {p.head2} <span className="yellow">{p.head2y}</span>{p.head2dot}
      </SectionHeader>
      <section className="program" id="program">
        <div className="wrap">
          <div className="plans plans-3">
            {p.plans.map((plan, i) => {
              const wa = `https://wa.me/4915116343656?text=${encodeURIComponent(plan.wa)}`;
              return (
                <div className={`plan ${plan.primary ? 'primary' : ''}`} key={i}>
                  <div className="plan-tag">
                    <span>{plan.tag}</span>
                    {plan.pill && <span className="pill">{plan.pill}</span>}
                  </div>
                  <div className="plan-name">{plan.nameStart}<em>{plan.nameEm}</em>{plan.nameEnd}</div>
                  <div className="plan-price"><span className="currency">€</span>{plan.price}<span className="per">{plan.per}</span></div>
                  <div className="plan-sub">{plan.sub}</div>
                  <ul className="plan-includes">
                    {plan.items.map((it, j) => <li key={j}>{it}</li>)}
                  </ul>
                  <a className={`btn ${plan.primary ? 'primary' : ''}`} href={wa} target="_blank" rel="noreferrer">
                    <span>{plan.cta}</span><span className="arrow">↗</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
