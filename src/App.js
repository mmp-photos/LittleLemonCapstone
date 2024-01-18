import Nav from './components/Nav';
import Hero from './components/Hero';
import Specials from './components/Specials';
import Reviews from './components/Reviews';
import About from './components/About';
import Footer from './components/Footer';
import './assets/styles/lemonStyles.css'

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Specials />
      <Reviews />
      <About />
      <Footer />
    </div>
  );
}

export default App;
