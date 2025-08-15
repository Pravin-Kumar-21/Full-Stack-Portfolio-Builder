import React, { lazy, Suspense ,useEffect } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import withDynamicLoader from './hooks/withDynamicLoader.jsx';
import { LoaderProvider } from './context/LoaderContext';
import WebSocketHandler from './context/AppContext.jsx';
import { fetchAllData } from './context/fetchAllData.js';


// Lazy-load components wrapped with dynamic loader
const HomePage = withDynamicLoader(lazy(() => import('./components/HomePage/HomePage.jsx')));
const About = withDynamicLoader(lazy(() => import('./components/About/About.jsx')));
const Services = withDynamicLoader(lazy(() => import('./components/Services/Services.jsx')));
const Work = withDynamicLoader(lazy(() => import('./components/My Work/MyWork.jsx')));
const Skills = withDynamicLoader(lazy(() => import('./components/Skills/Skills.jsx')));
const Projects = withDynamicLoader(lazy(() => import('./components/Projects/Projects.jsx')));
const Contact = withDynamicLoader(lazy(() => import('./components/Contact/Contact.jsx')));

export default function App() {
  
  useEffect(() => {
    fetchAllData().then(data => console.log("Fetched Data:", data));
  }, []);

  
  
  
  return (
    
    <LoaderProvider>
    <WebSocketHandler onDataChanged={fetchAllData} />
    
      <div className="App">
        <Navbar />
        {/* Each component loads separately with its own loader */}
        <Suspense fallback={null}><HomePage /></Suspense>
        <Suspense fallback={null}><About /></Suspense>
        <Suspense fallback={null}><Services /></Suspense>
        <Suspense fallback={null}><Work /></Suspense>
        <Suspense fallback={null}><Skills /></Suspense>
        <Suspense fallback={null}><Projects /></Suspense>
        <Suspense fallback={null}><Contact /></Suspense>
      </div>
    </LoaderProvider>
  );
}
