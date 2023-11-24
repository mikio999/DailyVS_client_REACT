import { useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
import { useNavigate, useSearchParams } from 'react-router-dom';

const KakaoAuth = () => {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_KAKAO_URI;

  const [searchParams, setSearchParams] = useSearchParams();

  const code = searchParams.get('code');

  const navigate = useNavigate();

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: 'authorization_code',
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
    });
    try {
      const res = await axios.post(
        'https://kauth.kakao.com/oauth/token',
        payload,
      );

      const token = res.data.access_token;
      const accessTokenPost = await axios.post(
        `${process.env.REACT_APP_HOST}/accounts/kakao/login/callback/`,
        { code: code, access: token },
        {
          headers: { Authorization: code },
        },
      );
      const ourToken = accessTokenPost.data.access;
      localStorage.setItem('token', ourToken);
      localStorage.setItem('refresh', ourToken);
      localStorage.setItem('access', ourToken);
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
