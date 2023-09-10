import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import RouteWithNavFooter from './RouteWithNavFooter';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<RouteWithNavFooter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
