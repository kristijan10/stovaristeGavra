import React from "react";

// SCSS
import "./About.scss";

export default function About() {
  return (
    <section className="about" id="o-nama">
      <div className="about__image">
        <div className="img"></div>
      </div>
      <div className="about__text">
        <div className="about__text-title">
          <h2>O nama</h2>
        </div>
        <div className="about__text-paragraphs">
          <p className="about-paragraph first">
            Preduzeće stovarište Gavra je osnovano pre mnogo godina u Jakovu kao
            porodična firma i od tada posluje u oblasti trgovine uglja
            maloprodaja, transporta i drugih uslužnih delatnosti. Takodje imamo
            i dugogodišnje partnere s kojima na obostrano zadovljstvo poslujemo
            duži niz godina.
          </p>
          <p className="about-paragraph second">
            Stovarište uglja Gavra bavi se prodajom i prevozom ogrevnog
            materijala. Kod nas uvek možete naći sve vrste uglja, ogrevnog
            drveta, peleta i gradjevinskog materijala. Pored distribucije i
            prodaje, preduzeće izvozi ugalj za domaćinstva.
          </p>
        </div>
        <div className="about__text-button">
          <a className="clean-btn orange-btn" href="#kontakt">
            Kontakt
          </a>
        </div>
      </div>
    </section>
  );
}
