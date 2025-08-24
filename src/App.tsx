
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
