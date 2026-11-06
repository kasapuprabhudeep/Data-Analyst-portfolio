import Navbar from './components/common/Navbar';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Credentials from './components/credentials/Credentials';
import Contact from './components/contact/Contact';
import Footer from './components/common/Footer';
import { useEditorialMotion } from './lib/motion';

const SECTION_IDS = ['home', 'work', 'about', 'experience', 'credentials', 'contact'];

export default function App() {
  useEditorialMotion();

  return (
    <>
      <Navbar sectionIds={SECTION_IDS} />
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
