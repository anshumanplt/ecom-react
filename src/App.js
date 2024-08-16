import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, PrivateRoute } from './Pages/Authentication/AuthContext';
import {NavBar, Home, Footer, Faqs, Login, Checkout} from './Pages/index'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { cookies, CookiesProvider } from 'react-cookie';


function App() {
  return (
    <>
    <CookiesProvider>
      <AuthProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<Faqs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chcekout" element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }              
          {...cookies.user ? <Checkout /> : <Login />}/>
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
      </CookiesProvider>
    </>
  );
}

export default App;
