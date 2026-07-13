import { CLUB, STATS, getNextMatch, formatDate } from '../data/siteData';

export default function Hero() {
  const nextMatch = getNextMatch();

  return (
    <section className="hero" id="home">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__stripes" />
        <div className="hero__glow hero__glow--red" />
        <div className="hero__glow hero__glow--blue" />
        <div className="hero__pattern" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">2025/26 სეზონი</span>
          <h1 className="hero__title">
            <span className="hero__title-line">RC</span>
            <span className="hero__title-line hero__title-line--accent">BATUMI</span>
          </h1>
          <p className="hero__desc">{CLUB.nameKa} — საქართველოს ყველაზე წარმატებული რაგბის კლუბი.</p>
          <div className="hero__actions">
            <a href="#fixtures" className="btn btn--primary btn--lg">
              მატჩების განრიგი
            </a>
            <a href="#about" className="btn btn--outline btn--lg">
              კლუბის შესახებ
            </a>
          </div>
          <div className="hero__stats">
            {STATS.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__crest">
            <img src="/logo.jpg" alt="RC Batumi crest" className="hero__crest-img" />
            <div className="hero__crest-ring" />
          </div>

          <div className="hero__card glass">
            <span className="hero__card-label">შემდეგი მატჩი</span>
            <p className="hero__card-date">{formatDate(nextMatch.date)} · {nextMatch.time}</p>
            <div className="hero__card-match">
              <span className="hero__team hero__team--home">{nextMatch.home}</span>
              <span className="hero__vs">VS</span>
              <span className="hero__team">{nextMatch.away}</span>
            </div>
            <p className="hero__card-venue">{nextMatch.venue}</p>
            <a href="#fixtures" className="btn btn--ghost btn--sm">
              ყველა მატჩი →
            </a>
          </div>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>გადახვევა</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
