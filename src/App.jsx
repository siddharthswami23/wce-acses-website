import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Events from './sections/Events.jsx';
import Teams from './sections/Teams.jsx';
import LightRays from './components/LightRays'; // adjust path as needed

const App = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Light Rays Background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: -1,
        }}
      >
        <LightRays
          raysOrigin="top-center"
          raysColor="#000dffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Events />
        <Teams />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
