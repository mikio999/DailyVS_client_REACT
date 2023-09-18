import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import RouteWithNavFooter from './RouteWithNavFooter';
import { AuthProvider } from './AuthContext';
import EmailVerification from './pages/Signup/EmailVerification';

const Router = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<RouteWithNavFooter />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Router;
