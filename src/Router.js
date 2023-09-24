import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import RouteWithNavFooter from './RouteWithNavFooter';
import { AuthProvider } from './AuthContext';
import Activate from './pages/Signup/Activate';
import { Provider } from 'react-redux';
import store from './store';

const Router = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<RouteWithNavFooter />} />
            <Route path="/activate/:uid/:token" element={<Activate />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
};

export default Router;
