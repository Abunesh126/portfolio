
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div className="portfolio-flow-container">
      {/* Global decorative elements that flow across sections */}
      <div className="global-decorative-layer">
        {/* Cross-section floating elements */}
        <div className="cross-section-elements">
          <div className="cross-element cross-hero-skills"></div>
          <div className="cross-element cross-skills-projects"></div>
          <div className="cross-element cross-projects-contact"></div>
          <div className="cross-element cross-contact-footer"></div>
        </div>
        
        {/* Global floating shapes */}
        <div className="global-shapes-container">
          <div className="global-shape global-shape-1"></div>
          <div className="global-shape global-shape-2"></div>
          <div className="global-shape global-shape-3"></div>
          <div className="global-shape global-shape-4"></div>
          <div className="global-shape global-shape-5"></div>
          <div className="global-shape global-shape-6"></div>
          <div className="global-shape global-shape-7"></div>
          <div className="global-shape global-shape-8"></div>
          <div className="global-shape global-shape-9"></div>
          <div className="global-shape global-shape-10"></div>
          <div className="global-shape global-shape-11"></div>
          <div className="global-shape global-shape-12"></div>
        </div>
        
        {/* Global blur effects */}
        <div className="global-blur-effects">
          <div className="global-blur global-blur-1"></div>
          <div className="global-blur global-blur-2"></div>
          <div className="global-blur global-blur-3"></div>
          <div className="global-blur global-blur-4"></div>
          <div className="global-blur global-blur-5"></div>
          <div className="global-blur global-blur-6"></div>
        </div>
        
        {/* Global sparkles */}
        <div className="global-sparkles">
          <div className="global-sparkle global-sparkle-1"></div>
          <div className="global-sparkle global-sparkle-2"></div>
          <div className="global-sparkle global-sparkle-3"></div>
          <div className="global-sparkle global-sparkle-4"></div>
          <div className="global-sparkle global-sparkle-5"></div>
          <div className="global-sparkle global-sparkle-6"></div>
          <div className="global-sparkle global-sparkle-7"></div>
          <div className="global-sparkle global-sparkle-8"></div>
          <div className="global-sparkle global-sparkle-9"></div>
          <div className="global-sparkle global-sparkle-10"></div>
        </div>
        
        {/* Flowing particles */}
        <div className="flowing-particles">
          <div className="flow-particle flow-particle-1"></div>
          <div className="flow-particle flow-particle-2"></div>
          <div className="flow-particle flow-particle-3"></div>
          <div className="flow-particle flow-particle-4"></div>
          <div className="flow-particle flow-particle-5"></div>
        </div>
      </div>
      
      <main className="seamless-flow">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
