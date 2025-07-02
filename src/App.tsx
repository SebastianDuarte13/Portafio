import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Purpose from './components/Purpose/Purpose';
import Skills from './components/Skills/Skills';
import Loading from './components/UI/Loading';
import './styles/GlobalStyles.css';
import './styles/ResponsiveUtils.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Inicializar AOS si es necesario
    // AOS.init();
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loading onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <About />
        <Purpose />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;