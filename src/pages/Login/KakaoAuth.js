import { useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
import { useNavigate, useSearchParams } from 'react-router-dom';

const KakaoAuth = () => {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const CLIENT_SECRET = process.env.REACT_APP_REST_CLIENT_SECRET;

  const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';

  const [searchParams, setSearchParams] = useSearchParams();

  const code = searchParams.get('code');

  const navigate = useNavigate();

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: 'authorization_code',
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });
    try {
      const res = await axios.post(
        'https://kauth.kakao.com/oauth/token',
        payload,
      );

      const token = res.data.access_token;

      const accessTokenPost = await axios.post(
        'http://localhost:3000/auth/kakao/signin',
        {},
        {
          headers: { Authorization: token },
        },
      );
      const ourToken = accessTokenPost.data.accessToken;

      localStorage.setItem('token', ourToken);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getToken();
  }, []);
  return null;
};
export default KakaoAuth;
