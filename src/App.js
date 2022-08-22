import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "../src/Pages/Home/Home";
import About from "../src/Pages/Home/About/About";
import Navbars from "../src/Pages/Home/Navbars/Navbars";
import Footer from "../src/Pages/Home/Footer/Footer";
import ScrollToTop from 'react-scroll-to-top';
import Technologies from './Pages/Home/Technologies/Technologies';
import Contact from './Pages/Home/Contact/Contact';
import Card from './Pages/Home/Card/Card';
import Service from './Pages/Home/Service/Service';
import Websites from './Pages/Home/Websites/Web';
import MobileApp from './Pages/Home/MobileApp/MobileApp';
import ServiceNav from './Pages/Home/ServiceNav/ServiceNav';

function App() {
  return (
  <>
  <Navbars/>
  
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/techNologies" element={<Technologies />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/card" element={<Card />}/>
    <Route path="/service" element={<Service />}/>
    <Route path="/web" element={<Websites />}/>
    <Route path="/mobilApp" element={<MobileApp />}/>
    <Route path="/serviceNav" element={<ServiceNav />}/>
    
    </Routes>
    <Footer/>
    <ScrollToTop smooth />
  </>
  );
}

export default App;
