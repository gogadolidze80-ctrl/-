import { CLUB } from '../data/siteData';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section__header">
          <span className="section__label">კლუბი</span>
          <h2 className="section__title">RC Batumi</h2>
          <p className="section__desc">1976 წლიდან — ბათumi-ს გული და საქართველოს რაგბის სახე</p>
        </div>

        <div className="about__grid">
          <div className="about__content glass">
            <p className="about__lead">
              <strong>RC Batumi</strong> — საქართველოს ყველაზე წარმატებული რაგბის კლუბი.
              ბათumi-ს გუნდი მრავალჯერ გახდა ჩემპიონი, წარმოადგენს ქვეყნის რაგბის სახეს
              და აქტიურად მონაწილეობს ევროპულ ტურნirებში.
            </p>
            <p className="about__text">
              კლუბის სимволика აერთიანებს ბათumi-ს ისტoriას — ციხეს, დelfin-ს, მთებს და
              ქართულ ერovნულ სимволებს. ჩვენი მიზანია ახალი თაობის აღზgrowება და
              რაგბის პოპულarizacia საქართველოში.
            </p>
            <ul className="about__facts">
              <li>
                <span>დ founding</span>
                <strong>{CLUB.founded}</strong>
              </li>
              <li>
                <span>სტadiумი</span>
                <strong>{CLUB.stadium}</strong>
              </li>
              <li>
                <span>ტრენერი</span>
                <strong>{CLUB.coach}</strong>
              </li>
              <li>
                <span>ტიტulები</span>
                <strong>{CLUB.titles}</strong>
              </li>
            </ul>
          </div>

          <div className="about__visual">
            <div className="about__logo-wrap">
              <img src="/logo.jpg" alt="RC Batumi logo" className="about__logo" />
            </div>
            <div className="about__badges">
              <div className="about__badge about__badge--blue">
                <span>🏉</span>
                <div>
                  <strong>დიდი 10</strong>
                  <small>Crocobet ლიგა</small>
                </div>
              </div>
              <div className="about__badge about__badge--red">
                <span>🐬</span>
                <div>
                  <strong>ბათumi</strong>
                  <small>Adjara · Black Sea</small>
                </div>
              </div>
              <div className="about__badge about__badge--white">
                <span>🇬🇪</span>
                <div>
                  <strong>საქართვelo</strong>
                  <small>ერovნული ნაკრები</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
