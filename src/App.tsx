
import React from "react";
import Header from "./pages/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./pages/Footer";
import "./styles/skill-orbit.css";

// ...existing code...


const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
  <Skills />
  <Projects />
  <Contact />
  <Footer />
    </>
  );
};


export default App;
