import { CLUB } from '../data/siteData';

export default function Contact() {
  return (
    <section className="section section--alt" id="contact">
      <div className="container">
        <div className="section__header">
          <span className="section__label">კონტაქტი</span>
          <h2 className="section__title">დაგვიკავშirებით</h2>
        </div>

        <div className="contact__grid">
          <div className="contact__info glass">
            <img src="/logo.jpg" alt="RC Batumi" className="contact__logo" />
            <h3>{CLUB.name}</h3>
            <p>{CLUB.nameKa}</p>

            <ul className="contact__list">
              <li>
                <span>მისამarთი</span>
                <strong>{CLUB.address}</strong>
              </li>
              <li>
                <span>სტadiумი</span>
                <strong>{CLUB.stadium}</strong>
              </li>
              <li>
                <span>ელ-ფოსტა</span>
                <a href={`mailto:${CLUB.email}`}>{CLUB.email}</a>
              </li>
              <li>
                <span>ტelefoni</span>
                <a href={`tel:${CLUB.phone.replace(/\s/g, '')}`}>{CLUB.phone}</a>
              </li>
            </ul>

            <div className="contact__social">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                Facebook
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                Instagram
              </a>
              <a href="https://www.rugby.ge" target="_blank" rel="noopener noreferrer" aria-label="Rugby.ge">
                rugby.ge
              </a>
            </div>
          </div>

          <form className="contact__form glass" onSubmit={(e) => e.preventDefault()}>
            <h3>შეტყobinა</h3>
            <label>
              <span>სახელი</span>
              <input type="text" name="name" placeholder="თქვენი სახელი" required />
            </label>
            <label>
              <span>ელ-ფოსტა</span>
              <input type="email" name="email" placeholder="example@mail.com" required />
            </label>
            <label>
              <span>შეტყobinა</span>
              <textarea name="message" rows={4} placeholder="დაწერეთ შეტყobinა..." required />
            </label>
            <button type="submit" className="btn btn--primary btn--lg">
              გაგზავნა
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
