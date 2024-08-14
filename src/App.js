import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./Pages/NavBar";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
import Faq from './Pages/Faq';
import Login from './Pages/Authentication/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
