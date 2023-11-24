import React, {useState, useEffect}  from 'react';
import './index.css';
import Home from './Components/Home';
import PreLoader from './Components/PreLoader';
import Project from './Components/project/Project';
import Skillz from './Components/Skills/Skillz';
import About from './Components/Story/About';
import Contact from './Components/Contacts/Contact';
import { Routes, Route } from "react-router-dom"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate some asynchronous task
    setTimeout(() => {
      setLoading(false); // Once the task is done, set loading to false
    }, 500);
  }, []);


  return (
   <div>
     {loading ? (
      <PreLoader />
    ) : (
    <div className="">
       <Routes>

       <Route path="/" 
        element={<Home />}
      />

      <Route path="/project" 
        element={<Project />}
      />

      <Route path="/about" 
        element={<About/>}
      />
      <Route path="/contact" 
        element={<Contact />}
      />
      </Routes>

    </div>
    )}
   </div>
  );
}

export default App;
