import { CLUB } from '../data/siteData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src="/logo.jpg" alt="RC Batumi" className="footer__logo" />
          <div>
            <strong>{CLUB.name}</strong>
            <p>{CLUB.nameKa}</p>
          </div>
        </div>

        <div className="footer__links">
          <a href="https://www.rugby.ge" target="_blank" rel="noopener noreferrer">
            rugby.ge
          </a>
          <a href="https://stat.rugby.ge" target="_blank" rel="noopener noreferrer">
            სტატისტიკა
          </a>
          <a href="https://tkt.ge/rugby" target="_blank" rel="noopener noreferrer">
            ბილეთები
          </a>
        </div>

        <p className="footer__copy">&copy; {year} {CLUB.name}. ყველა უფლება დაცულია.</p>
      </div>
    </footer>
  );
}
