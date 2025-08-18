import React, { lazy, Suspense, useEffect, useState, useCallback } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import withDynamicLoader from './hooks/withDynamicLoader.jsx';
import { LoaderProvider } from './context/LoaderContext';
import WebSocketHandler from './context/AppContext.jsx';
import { fetchAllData } from './context/fetchAllData.js';
import '@fortawesome/fontawesome-free/css/all.min.css';


// Lazy-load components
const HomePage = withDynamicLoader(lazy(() => import('./components/HomePage/HomePage.jsx')));
const About = withDynamicLoader(lazy(() => import('./components/About/About.jsx')));
const Services = withDynamicLoader(lazy(() => import('./components/Services/Services.jsx')));
const Work = withDynamicLoader(lazy(() => import('./components/My Work/MyWork.jsx')));
const Skills = withDynamicLoader(lazy(() => import('./components/Skills/Skills.jsx')));
const Projects = withDynamicLoader(lazy(() => import('./components/Projects/Projects.jsx')));
const Contact = withDynamicLoader(lazy(() => import('./components/Contact/Contact.jsx')));

export default function App() {
  const [data, setData] = useState({
    home: { name: '', intro: '', job_title: '' },
    social: [],
    about: { description: '' },
    services: [],
    work: [],
    skills: [],
    projects: [],
    contact: {},
    education: []
  });

  const transformData = useCallback((apiData) => {
    return {
      home: apiData.home?.[0] || {},
      social: apiData.social || [],
      about: apiData.about?.[0] || {},
      services: apiData.services || [],
      work: apiData['work-experience'] || [],
      skills: apiData.languages || [],
      projects: apiData.projects || [],
      contact: apiData.contactme?.[0] || {},
      education: apiData['education-details'] || []
    };
  }, []);

  useEffect(() => {
    fetchAllData()
      .then(apiData => {
        const transformed = transformData(apiData);
        setData(transformed);
        console.log("Transformed Data:", transformed);
      })
      .catch(error => console.error("Fetch failed:", error));
  }, [transformData]);

  return (
    <LoaderProvider>
      <WebSocketHandler onDataChanged={fetchAllData} />
      <div className="App">
        <Navbar />

        <Suspense fallback={null}>
          <HomePage
            home={data.home}
            social={data.social}
          />
        </Suspense>

        <Suspense fallback={null}>
          <About
            about={data.about}
            education={data.education}
          />
        </Suspense>

        <Suspense fallback={null}>
          <Services services={data.services} />
        </Suspense>

        <Suspense fallback={null}>
          <Work work={data.work} />
        </Suspense>

        <Suspense fallback={null}>
          <Skills skills={data.skills} />
        </Suspense>

        <Suspense fallback={null}>
          <Projects projects={data.projects} />
        </Suspense>

        <Suspense fallback={null}>
          <Contact contact={data.contact} />
        </Suspense>
      </div>
    </LoaderProvider>
  );
}