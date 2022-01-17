import React, { useState } from "react";

// Images
import logo from "../../assets/header/logo.svg";
import logoWhite from "../../assets/header/logoWhite.svg";
import menu from "../../assets/header/menu.svg";
import menuClose from "../../assets/header/menuClose.svg";

// SCSS
import "./Header.scss";

export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  document.body.style.overflow = click ? "hidden" : "initial";

  return (
    <nav
      className={
        click
          ? "navbar navbar--fixed-top navbar-sidebar--show"
          : "navbar navbar--fixed-top"
      }
    >
      <div className="navbar__inner">
        <div className="navbar__items">
          <a className="navbar__brand" href="/">
            <img
              src={click ? logoWhite : logo}
              alt="Stovariste Gavra"
              className="navbar__logo"
            />
          </a>
        </div>
        <div className="navbar__items navbar__items--right">
          <a className="navbar__item navbar__link" href="#o-nama">
            O nama
          </a>
          <a className="navbar__item navbar__link" href="#ponuda">
            Ponuda
          </a>
          <a className="navbar__item navbar__link" href="#kontakt">
            Kontakt
          </a>
          <button
            className="navbar__toggle clean-btn"
            type="button"
            tabIndex="0"
            alt="Navigation bar toggle"
            onClick={handleClick}
          >
            <img
              src={click ? menuClose : menu}
              alt="Navigation bar toggle"
              width="30"
              height="30"
            />
          </button>
        </div>
      </div>
      <div className="navbar-sidebar">
        <div className="navbar-sidebar__items">
          <div className="navbar-sidebar__item">
            <ul className="menu__list">
              <li className="menu__list-item">
                <a className="menu__link" href="#o-nama" onClick={closeMenu}>
                  O nama
                </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__link" href="#ponuda" onClick={closeMenu}>
                  Ponuda
                </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__link" href="#kontakt" onClick={closeMenu}>
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
