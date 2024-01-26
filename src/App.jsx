import React from 'react';
import { BrowserRouter as Router, Route, Routes,useLocation } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Hire from './Components/Hire Me/Hire'; 
import Contact from './Components/Contact Me/Contact'; 
import Services from './Components/Services/Services';
import Navbar from './Components/Navbar/Navbar';
import Themes from './Components/Themes/Themes';
import Loader from './Components/Loader/Loader'
import { useState ,useEffect} from 'react';
import './App.css'
const App = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);
  
    return (
        <>
        {loading ? (
        <Loader initial={true} />
      ) :(
          <Router>
          <Navbar/>
          <Themes/> 
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/Hire" element={<Hire />} />
            </Routes>
        </Router>)}</>
      
    );
};

export default App;
