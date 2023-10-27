import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './pages/Hero';
import Calculator from './components/Calculator';
import Offers from './pages/Offers';
import FormCondidat from './pages/FormCondidat';
function App() {
  return (

    <Router>
      <Routes>
          <Route  path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cost-calculator" element={<Calculator />} />
          <Route path="/offer-emploi" element={<Offers />} />
          <Route path="/formCondidat" element={<FormCondidat />} />
          
      </Routes>
    </Router>

  );
}

export default App;
