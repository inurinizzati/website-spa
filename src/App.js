import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import About from "./pages/About";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import Massage from "./pages/Massage";
import Facial from "./pages/Facial";
import Sauna from "./pages/Sauna";
import Nail from "./pages/Nail";
import Hair from "./pages/Hair";
import Medical from "./pages/Medical";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes> 
       <Route path='/' exact element={<Home />} />
       <Route path='/service' exact element={<Services />} />
       <Route path='/about' exact element={<About />} />
       <Route path='/company' exact element={<Company />} />
       <Route path='/contact' exact element={<Contact />} />
       <Route path='/service/massage' exact element={<Massage />} />
       <Route path='/service/facial' exact element={<Facial />} />
       <Route path='/service/sauna' exact element={<Sauna />} />
       <Route path='/service/nail' exact element={<Nail />} />
       <Route path='/service/hair' exact element={<Hair />} />
       <Route path='/service/medical' exact element={<Medical />} />
      </Routes>
      <Footer />
    </Router> 
    </div>
  );
}

export default App
