const REST_API_KEY = 'b7579b0db17d871b3cc711e63ccf1648';
const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
