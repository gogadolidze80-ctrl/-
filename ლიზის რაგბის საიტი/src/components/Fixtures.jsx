import { FIXTURES, formatDate } from '../data/siteData';

export default function Fixtures() {
  return (
    <section className="section" id="fixtures">
      <div className="container">
        <div className="section__header">
          <span className="section__label">კალენდარი</span>
          <h2 className="section__title">მატჩები</h2>
          <p className="section__desc">RC Batumi-ს განრიგი — დიდი 10</p>
        </div>

        <div className="fixtures-grid">
          {FIXTURES.map((match) => (
            <article
              key={match.id}
              className={`fixture-card glass ${match.status === 'upcoming' ? 'fixture-card--upcoming' : ''}`}
            >
              <div className="fixture-card__top">
                <span className={`fixture-card__status fixture-card__status--${match.status}`}>
                  {match.status === 'upcoming' ? 'მომავალი' : 'დასrული'}
                </span>
                <time className="fixture-card__date">{formatDate(match.date)}</time>
              </div>

              <div className="fixture-card__match">
                <div className={`fixture-card__team ${match.isHome ? 'fixture-card__team--batumi' : ''}`}>
                  {match.isHome && match.home === 'ბათუმი' && (
                    <img src="/logo.jpg" alt="" className="fixture-card__logo" />
                  )}
                  <span>{match.home}</span>
                </div>

                <div className="fixture-card__score">
                  {match.status === 'finished' ? (
                    <strong>
                      {match.scoreHome} : {match.scoreAway}
                    </strong>
                  ) : (
                    <span className="fixture-card__time">{match.time}</span>
                  )}
                </div>

                <div className={`fixture-card__team ${!match.isHome && match.away === 'ბათუმi' ? 'fixture-card__team--batumi' : ''}`}>
                  {!match.isHome && match.home !== 'ბათუმi' && match.away === 'ბათუმi' && (
                    <img src="/logo.jpg" alt="" className="fixture-card__logo" />
                  )}
                  <span>{match.away}</span>
                </div>
              </div>

              <p className="fixture-card__venue">{match.venue}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
