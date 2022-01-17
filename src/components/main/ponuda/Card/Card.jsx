import React from "react";

// SCSS
import "./Card.scss";

export default function Card({ slika, title, vrste }) {
  return (
    <div className="card">
      <div className="card__header">
        <img
          className="card__header-img"
          src={slika}
          alt={`Slika ${title.toLowerCase()}`}
        />
      </div>
      <div className="card__body">
        <div className="card__body-title">
          <h3>{title}</h3>
        </div>
        <div className="card__body-desc">
          <ul className={`${title.toLowerCase()}_types`}>
            {vrste.map((vrsta) => {
              return (
                <li className={`${title.toLowerCase()}_type`} key={vrsta}>
                  {vrsta}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
