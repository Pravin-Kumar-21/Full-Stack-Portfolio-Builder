// import { useLoader } from "./context/LoaderContext";
import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import About from './components/About/About';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Project from './components/Projects/Projects'


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
      <Skills/>
      <Project/>
    </div>
  );
}

export default App;
