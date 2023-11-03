// 토큰을 localStorage에 저장
export const saveTokensToLocalStorage = (accessToken, refreshToken) => {
  localStorage.setItem('access_token', accessToken);
  localStorage.setItem('refresh_token', refreshToken);
};

// localStorage에서 토큰을 불러옴
export const getTokensFromLocalStorage = () => {
  const accessToken = localStorage.getItem('access_token');
  const refreshToken = localStorage.getItem('refresh_token');
  return { accessToken, refreshToken };
};
