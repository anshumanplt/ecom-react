import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, PrivateRoute } from './Pages/Authentication/AuthContext';
import {NavBar, Home, Footer, Faqs, Login, Checkout} from './Pages/index'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { cookies, CookiesProvider } from 'react-cookie';
import Layout from './Components/Layout';


function App() {
  return (
    <>
    <CookiesProvider>
      <AuthProvider>
        <Router>
          <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<Faqs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }              
            />
          </Routes>
          </Layout>
        </Router>
      </AuthProvider>
      </CookiesProvider>
    </>
  );
}

export default App;
