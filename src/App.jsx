import React from "react";
import { Routes } from "react-router-dom";
import Head from "/components/Head.jsx";
import Hero from "/components/Hero.jsx";
import Skill from "/components/Skill";
import Projects from "/components/Projects.jsx";
import Services from "/components/Services";
import Contact from "/components/Contact";
import Footer from "/components/Footer.jsx";

function App() {
  return (
    <>
      <Head />
      <Hero />
      <Skill />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
