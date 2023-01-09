import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Team from './components/Team/Team';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      {/* Intro */}
      <Services />
      <About />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
