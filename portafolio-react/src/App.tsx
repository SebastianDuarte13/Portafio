import { useEffect } from 'react';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import './styles/GlobalStyles.css';

function App() {
  useEffect(() => {
    // Inicializar AOS si es necesario
    // AOS.init();
  }, []);

  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <About />
        {/* Los demás componentes se agregarán aquí */}
      </main>
    </div>
  );
}

export default App;