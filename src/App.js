import React, { useEffect, useRef } from 'react';
import './App.css';
import locomotiveScroll from 'locomotive-scroll';
import Cursor from './components/main/Cursor/Cursor';
import Header from './components/main/Header/Header';
import Home from './components/Home/Home';
import Slider from './components/Slider/Slider';
import Avis from './components/Avis/Avis';
import Footer from './components/main/Footer/Footer';
function App() {
  const scrollRef = useRef();
  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      getSpeed: true,
      getDirection: true,
      multiplier:0.7,
      offset:["15%",0]
    })
    
    
 
    
    setTimeout(() => {
      scroll.update();
    }, 100);
  });
  
  return (
      <div className="App" ref={scrollRef}>
        <Cursor />
        <Header />
        <Home />
        <div id="fonctionnalite"></div>
        <Slider />
        <Avis />
        <Footer />
      </div>
  );
}

export default App;
