import React from "react";

// SCSS
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__text">
          <h1 className="hero__text-title">Stovariste Gavra</h1>
          <p className="hero__text-paragraph">
            Ogrevnog i gradjevinskog materijala
          </p>
          <div className="hero__text-button">
            <a className="clean-btn orange-btn" href="#kontakt">
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
