import axios from 'axios';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Navigate, redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';


const AuthContext = createContext();


export const useAuth = () => useContext(AuthContext);


export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  const login = async (email, password) => {
    try {
      // const res = await axios.post(`${process.env.REACT_APP_BASEURL}/login`, {
      //   email: 'email',
      //   password: 'password'
      // });

      const res = true;

    
      if (res === true) {
        setIsAuthenticated(true);
        setCookie('user', email, { path: '/' });
      } else {
        setIsAuthenticated(false);
        alert('Authentication failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login.');
      setIsAuthenticated(false);
      return false;
    }
  };

  const logout = () => {
      setIsAuthenticated(false);
      removeCookie('name');
  };


  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// PrivateRoute component to protect routes
export const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" />;
};
