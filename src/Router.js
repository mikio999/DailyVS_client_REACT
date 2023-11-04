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
import Email from './pages/Signup/Email';
import Password from './pages/Signup/Password';
import PasswordInput from './pages/Signup/PasswordInput';
import KakaoAuth from './pages/Login/KakaoAuth';

const Router = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {isAuthenticated ? (
              <>
                <Route path="/signup" element={<Navigate to="/" />} />
                <Route path="/signup/email" element={<Navigate to="/" />} />
                <Route path="/new-password" element={<Navigate to="/" />} />
                <Route path="/login" element={<Navigate to="/" />} />
              </>
            ) : (
              <>
                <Route path="/signup" element={<Signup />} />
                <Route path="/signup/email" element={<Email />} />

                <Route
                  path="/new-password/:uid/:token"
                  element={<PasswordInput />}
                />
                <Route path="/login" element={<Login />} />
              </>
            )}
            <Route path="/find-password" element={<Password />} />
            <Route path="/oauth/kakao/callback/" element={<KakaoAuth />} />
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
