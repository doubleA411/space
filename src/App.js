import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact'
import Dummy from './Dummy';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      {/* Intro */}
      <About />
      <Services />
      <Team />
      <Contact />
      <Dummy />
      <Footer />
    </div>
  );
}

export default App;
