import './App.css';
import Header from './components/main/Header/Header';
import Home from './components/Home/Home';
import Investment from './components/Investment/Investment';
import Market from './components/Market/Market';
import Footer from './components/main/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <div id="fonctionnalite"></div>
      <Investment />
      <Footer />
    </div>
  );
}

export default App;
