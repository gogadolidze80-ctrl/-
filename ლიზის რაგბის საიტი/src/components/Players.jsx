import { PLAYERS } from '../data/siteData';

export default function Players() {
  return (
    <section className="section section--alt" id="players">
      <div className="container">
        <div className="section__header">
          <span className="section__label">გუნდი</span>
          <h2 className="section__title">მოთamაშeები</h2>
          <p className="section__desc">RC Batumi-ს ძირითადი შ составი 2025/26 სეზონში</p>
        </div>

        <div className="players-grid">
          {PLAYERS.map((player) => (
            <article key={player.id} className="player-card glass">
              <div className="player-card__number">{player.number}</div>
              <div className="player-card__body">
                <h3 className="player-card__name">{player.name}</h3>
                <p className="player-card__position">{player.positionKa}</p>
              </div>
              <div className="player-card__accent" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
