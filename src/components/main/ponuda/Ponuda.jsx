import React from "react";

// Components
import {
  ogrevMaterijal,
  ogrevDrvo,
  pelet,
  gradjMaterijal,
  usluge,
  ugalj,
} from "./Card/cards";
import Card from "./Card/Card";

// SCSS
import "./Ponuda.scss";

export default function Ponuda() {
  return (
    <section id="ponuda" className="ponuda">
      <div className="ponuda__title">
        <h2>Ponuda</h2>
      </div>
      <div className="ponuda__grid">
        <Card
          slika={ogrevMaterijal.slika}
          title={ogrevMaterijal.title}
          vrste={ogrevMaterijal.vrste}
        />
        <Card slika={ugalj.slika} title={ugalj.title} vrste={ugalj.vrste} />
        <Card
          slika={ogrevDrvo.slika}
          title={ogrevDrvo.title}
          vrste={ogrevDrvo.vrste}
        />
        <Card slika={pelet.slika} title={pelet.title} vrste={pelet.vrste} />
        <Card
          slika={gradjMaterijal.slika}
          title={gradjMaterijal.title}
          vrste={gradjMaterijal.vrste}
        />
        <Card slika={usluge.slika} title={usluge.title} vrste={usluge.vrste} />
      </div>
    </section>
  );
}
