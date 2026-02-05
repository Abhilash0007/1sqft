import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [credits, setCredits] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (username, password, role) => {
    // Hardcoded credentials
    const validCredentials = {
      seller: { username: 'seller', password: 'adminseller' },
      buyer: { username: 'buyer', password: 'adminbuyer' },
    };

    const credentials = validCredentials[role];
    if (credentials && credentials.username === username && credentials.password === password) {
      setUser({ username, role });
      setIsLoggedIn(true);
      setCredits(1000); // Default credits for logged-in users
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setCredits(0);
  };

  const buyCredits = (amount) => {
    setCredits(prev => prev + amount);
  };

  const deductCredits = (amount) => {
    if (credits >= amount) {
      setCredits(prev => prev - amount);
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ user, credits, isLoggedIn, login, logout, buyCredits, deductCredits }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
