import React from "react";

// Components
import Header from "../../components/header/Header";
import Hero from "../../components/main/hero/Hero";
import About from "../../components/main/about/About";
import Ponuda from "../../components/main/ponuda/Ponuda";
import Footer from "../../components/footer/Footer";

// SCSS
import "./reset.scss";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Ponuda />
      </main>
      <Footer />
    </>
  );
}
