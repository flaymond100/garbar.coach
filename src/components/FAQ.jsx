import { useState } from 'react';
import SectionHeader from './SectionHeader.jsx';

export default function FAQ({ t }) {
  const f = t.faq;
  const [open, setOpen] = useState(0);
  return (
    <>
      <SectionHeader id={f.section.id} label={f.section.label}>
        {f.head1} <em>{f.head1em}</em><br/>{f.head2}
      </SectionHeader>
      <section className="faq" id="faq">
        <div className="wrap">
          <div className="faq-list">
            {f.items.map((item, i) => (
              <div
                key={i}
                className={`faq-item ${open === i ? 'open' : ''}`}
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span className="q-num">{f.qPrefix}{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <div className="q">{item.q}</div>
                  <div className="a">{item.a}</div>
                </div>
                <div className="toggle">+</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
