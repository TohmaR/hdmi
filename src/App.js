import React, { useEffect, useRef } from 'react';
import './App.css';
import locomotiveScroll from 'locomotive-scroll';
import Header from './components/main/Header/Header';
import Home from './components/Home/Home';
import Investment from './components/Investment/Investment';
import Market from './components/Market/Market';
import Footer from './components/main/Footer/Footer';
function App() {
  const scrollRef = useRef();
  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      getSpeed: true,
      getDirection: true,
      offset:["15%",0]
    })
    
    
 
    
    setTimeout(() => {
      scroll.update();
    }, 100);
  });
  
  return (
      <div className="App" ref={scrollRef}>
        <Header />
        <Home />
        <div id="fonctionnalite"></div>
        <Investment />
        <Footer />
      </div>
  );
}

export default App;
