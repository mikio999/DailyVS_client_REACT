import React, { createContext, useContext, useState } from 'react';

// Context 생성
const AuthContext = createContext();

// Context의 Provider 컴포넌트
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // 로그인한 사용자 정보

  // 로그인 함수
  const login = userData => {
    setUser(userData);
  };

  // 로그아웃 함수
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 커스텀 Hook으로 사용할 함수
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
