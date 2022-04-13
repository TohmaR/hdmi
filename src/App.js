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
      offset:["15%",0],
      smartphone: { smooth: false, },
      tablet: { smooth: false, },
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
        <Slider />
        <Footer />
      </div>
  );
}

export default App;
