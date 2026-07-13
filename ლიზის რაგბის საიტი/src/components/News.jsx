import { NEWS, formatDate } from '../data/siteData';

export default function News() {
  return (
    <section className="section" id="news">
      <div className="container">
        <div className="section__header section__header--row">
          <div>
            <span className="section__label">ბლოგი</span>
            <h2 className="section__title">სიახლეები</h2>
          </div>
          <a href="https://www.rugby.ge/en/news" target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
            rugby.ge →
          </a>
        </div>

        <div className="news-grid">
          {NEWS.map((item) => (
            <article key={item.id} className={`news-card glass news-card--${item.tone}`}>
              <div className="news-card__meta">
                <span className="news-card__category">{item.category}</span>
                <time>{formatDate(item.date)}</time>
              </div>
              <h3 className="news-card__title">{item.title}</h3>
              <p className="news-card__excerpt">{item.excerpt}</p>
              <button type="button" className="news-card__link">
                სრულად →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
