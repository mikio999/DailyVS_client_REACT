import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import RouteWithNavFooter from './RouteWithNavFooter';
import { AuthProvider } from './AuthContext';
import Activate from './pages/Signup/Activate';
import { Provider } from 'react-redux';
import store from './store';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const Router = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  console.log(isAuthenticated);
  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {isAuthenticated ? (
              <>
                <Route path="/signup" element={<Navigate to="/" />} />
                <Route path="/login" element={<Navigate to="/" />} />
              </>
            ) : (
              <>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
              </>
            )}
            <Route path="/*" element={<RouteWithNavFooter />} />
            <Route path="/activate/:uid/:token" element={<Activate />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
};

export default Router;
