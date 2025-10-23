import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';

// ✅ Lazy-load components
const HomePage = lazy(() => import('./components/HomePage/HomePage.jsx'));
const About = lazy(() => import('./components/About/About.jsx'));
const Services = lazy(() => import('./components/Services/Services.jsx'));
const Work = lazy(() => import('./components/My Work/MyWork.jsx'));
const Skills = lazy(() => import('./components/Skills/Skills.jsx'));
const Projects = lazy(() => import('./components/Projects/Projects.jsx'));
const Contact = lazy(() => import('./components/Contact/Contact.jsx'));
const Footer = lazy(() => import('./components/Footer/Footer.jsx'));

export default function App() {
  return (
    <div className="App">
      {/* ✅ Navbar always loads immediately */}
      <Navbar />

      {/* ✅ Use Suspense to wrap lazy-loaded sections */}
      <Suspense fallback={null}>
        <HomePage />
        <About />
        <Services />
        <Work />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}
