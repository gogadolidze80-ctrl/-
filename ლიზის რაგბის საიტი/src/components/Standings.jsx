import { STANDINGS } from '../data/siteData';

export default function Standings() {
  return (
    <section className="section section--alt" id="standings">
      <div className="container">
        <div className="section__header">
          <span className="section__label">ტურნირი</span>
          <h2 className="section__title">ლიგის ცხრილი</h2>
          <p className="section__desc">Crocobet დიდი 10 — 2025/26 სეზონის მიმდინარე პოზიციები</p>
        </div>

        <div className="table-wrap glass">
          <table className="standings-table">
            <thead>
              <tr>
                <th>#</th>
                <th>გუნდი</th>
                <th>თ</th>
                <th>მ</th>
                <th>ფ</th>
                <th>+/-</th>
                <th>ქ</th>
              </tr>
            </thead>
            <tbody>
              {STANDINGS.map((team) => (
                <tr key={team.pos} className={team.highlight ? 'standings-table__highlight' : ''}>
                  <td>
                    <span className={`standings-table__pos ${team.pos <= 3 ? 'standings-table__pos--top' : ''}`}>
                      {team.pos}
                    </span>
                  </td>
                  <td>
                    <span className="standings-table__team">
                      {team.highlight && <img src="/logo.jpg" alt="" className="standings-table__logo" />}
                      {team.name}
                    </span>
                  </td>
                  <td>{team.played}</td>
                  <td className="standings-table__won">{team.won}</td>
                  <td className="standings-table__lost">{team.lost}</td>
                  <td className={team.diff >= 0 ? 'standings-table__plus' : 'standings-table__minus'}>
                    {team.diff > 0 ? `+${team.diff}` : team.diff}
                  </td>
                  <td>
                    <strong>{team.points}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
