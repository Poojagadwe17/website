
import React from 'react';
import './App.css'; 
import Home from './components/Home';
import Overview from './components/Overview';
import Amenities from './components/Amenties';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="main-container">
    
      <Home /> 
      <Overview />
      <Amenities />
      <Gallery />
      <Location/>
      <Contact/>
      <Footer /> 
    </div>
  );
}

export default App;
