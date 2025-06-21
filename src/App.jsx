import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import WorkExperience from './sections/Experience.jsx';
import Events from './sections/Events.jsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
