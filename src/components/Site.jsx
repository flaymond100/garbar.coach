import CursorBlob from './CursorBlob.jsx';
import Header from './Header.jsx';
import Hero from './Hero.jsx';
import Ticker from './Ticker.jsx';
import Case from './Case.jsx';
import Bio from './Bio.jsx';
import Program from './Program.jsx';
import Philosophy from './Philosophy.jsx';
import Voices from './Voices.jsx';
import FAQ from './FAQ.jsx';
import Finale from './Finale.jsx';
import Foot from './Foot.jsx';

export default function Site({ t, lang }) {
  return (
    <>
      <div className="hud-grid" />
      <div className="hud-noise" />
      <CursorBlob />
      <Header t={t} lang={lang} />
      <Hero t={t} />
      <Ticker t={t} />
      <Case t={t} />
      <Bio t={t} />
      <Program t={t} />
      <Philosophy t={t} />
      <Voices t={t} />
      <FAQ t={t} />
      <Finale t={t} />
      <Foot t={t} />
    </>
  );
}
