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

const Router = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const selectedOption = useSelector(state => state.option.selectedOption);
  const selectedGender = useSelector(state => state.gender.selectedGender);
  const selectedMBTI = useSelector(state => state.mbti.selectedMBTI);
  const selectedAge = useSelector(state => state.age.selectedAge);
  const selectedCategory = useSelector(
    state => state.category.selectedCategory,
  );

  const selectedCategoryList = useSelector(
    state => state.categoryList.selectedCategoryList,
  );

  console.log({
    'Selected Option': selectedOption,
    'Selected Gender': selectedGender,
    'Selected MBTI': selectedMBTI,
    'Selected Age': selectedAge,
    'Selected Category': selectedCategory,
    'Selected List': selectedCategoryList,
  });

  // console.log(isAuthenticated);
  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {isAuthenticated ? (
              <>
                <Route path="/signup" element={<Navigate to="/" />} />
                <Route path="/signup/email" element={<Navigate to="/" />} />
                <Route path="/find-password" element={<Navigate to="/" />} />
                <Route path="/new-password" element={<Navigate to="/" />} />
                <Route path="/login" element={<Navigate to="/" />} />
              </>
            ) : (
              <>
                <Route path="/signup" element={<Signup />} />
                <Route path="/signup/email" element={<Email />} />
                <Route path="/find-password" element={<Password />} />
                <Route
                  path="/new-password/:uid/:token"
                  element={<PasswordInput />}
                />
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
