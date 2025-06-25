// import { useLoader } from "./context/LoaderContext";
import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
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
    </div>
  );
}

export default App;
