import Nav from './components/Nav';
import Hero from './components/Hero';
import Specials from './components/Specials';
import Reviews from './components/Reviews';
import About from './components/About';
import Footer from './components/Footer';
import './assets/lemonStyles.css'

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Specials />
      <Reviews />
      <About />
      <Footer />
      <h1>HomePage</h1>
    </div>
  );
}

export default App;
