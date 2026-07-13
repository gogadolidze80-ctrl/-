import { useEffect, useState } from 'react';
import { NAV_LINKS } from '../data/siteData';

export default function Header({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <nav className="header__inner container">
        <button type="button" className="header__brand" onClick={() => scrollTo('home')}>
          <img src="/logo.jpg" alt="RC Batumi" className="header__logo" />
          <span className="header__brand-text">
            <strong>RC Batumi</strong>
            <small>სარაგბო კლუბი</small>
          </span>
        </button>

        <button
          type="button"
          className={`header__toggle ${menuOpen ? 'header__toggle--open' : ''}`}
          aria-label="მენიუ"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`header__links ${menuOpen ? 'header__links--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                className={`header__link ${activeSection === link.id ? 'header__link--active' : ''}`}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button type="button" className="btn btn--primary header__cta" onClick={() => scrollTo('fixtures')}>
          შემდეგი მატჩი
        </button>
      </nav>
    </header>
  );
}
