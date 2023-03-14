import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Body from './components/body';
import Services from './components/services';
import Contact from './components/contact';
import Donate from './components/donate';
import About from './components/about';


function App() {
  return (
    <section>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </section>
  );
}

export default App;
