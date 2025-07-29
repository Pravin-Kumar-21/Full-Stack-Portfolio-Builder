// import { useLoader } from "./context/LoaderContext";
import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import MyWork from './components/My Work/MyWork.jsx';
import Services from './components/Services/Services.jsx';
import Skills from './components/Skills/Skills.jsx';
import Project from './components/Projects/Projects.jsx'
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx'


function App() {
  // const { startLoader, stopLoader } = useLoader();

  // const handleClick = () => {
  //   startLoader({ loader: "ring", background: "true" });

  //   setTimeout(() => {
  //     stopLoader();
  //   }, 9000); // stops after 9 seconds
  // };
  
  

  return (
    <div>
      {/* <button onClick={handleClick}>Show Loader</button> */}
      <Navbar/>
      <HomePage/>
      <About/>
      <Services/>
      <MyWork />
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
