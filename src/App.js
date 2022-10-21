import './App.css';
import Contactenos from './components/Contactenos';
import Footer from './components/Footer';
import NavrBar from './components/NavrBar';
import Nosotros from './components/Nosotros';
import Somos from './components/Somos';
import Trabajos from './components/Trabajos';

function App() {
  return (
    <div className="App">
      <NavrBar />
      <Somos />
      <Trabajos />
      <Nosotros />
      <Contactenos />
      <Footer />
    </div>
  );
}

export default App;
