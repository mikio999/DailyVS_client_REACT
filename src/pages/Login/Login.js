import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LoginNav from '../../components/LoginNav/LoginNav';

const Login = () => {
  const [logInError, setLogInError] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const onSubmit = e => {
    e.preventDefault();
    fetch(`http://localhost:3095/api/users/login`, {
      method: 'POST',
      headers: { 'content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        userId: userId,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          localStorage.setItem('token', data.access_token);
          alert('환영합니다!');
          navigate('/');
        }
      })
      .catch(error => {
        setLogInError(error.response?.data?.statusCode === 401);
        alert(logInError + ': 아이디와 비밀번호를 다시 한번 확인해주세요');
      });
  };

  const isValid = userId.length >= 5 && password.length >= 8;

  return (
    <>
      <LoginNav />
      <LoginPage onSubmit={onSubmit}>
        <LoginLogo src="images/Nav/main_logo.png" />
        <LoginIdInput
          type="text"
          name="userId"
          value={userId}
          onChange={e => setUserId(e.target.value)}
          placeholder="아이디"
        />
        <LoginPwInput
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="비밀번호"
        />
        <LoginSubmitBtn disabled={isValid ? false : true}>
          로그인
        </LoginSubmitBtn>
        <LoginAsk>
          아직 로그인 계정이 없으신가요?
          <LoginToSignup to="/signup">회원가입</LoginToSignup>
          <LoginFindPw>비밀번호 찾기</LoginFindPw>
        </LoginAsk>
      </LoginPage>
    </>
  );
};

export default Login;

const LoginPage = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin: 10px auto;
`;

const LoginLogo = styled.img`
  margin-top: 30px;
  width: 250px;
`;

const LoginIdInput = styled.input`
  width: 300px;
  height: 50px;
  margin-bottom: 10px;
  font-size: 20px;
  border: 1px rgba(128, 128, 128, 0.2) solid;
  background-color: #f4faff;
  padding-left: 20px;
`;

const LoginPwInput = styled.input`
  width: 300px;
  height: 50px;
  margin-bottom: 30px;
  font-size: 20px;
  border: 1px rgba(128, 128, 128, 0.2) solid;
  background-color: #f4faff;
  padding-left: 20px;
`;

const LoginSubmitBtn = styled.button`
  width: 300px;
  height: 50px;
  font-size: 20px;
  color: white;
  background-color: ${props => (props.disabled ? '#d4d4d4' : '#ff495a')};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const LoginAsk = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  font-size: 14px;
  height: 200px;
`;

const LoginToSignup = styled(Link)`
  margin-left: 5px;
  color: #ff495a;
  font-weight: bold;
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

const LoginFindPw = styled(Link)`
  margin-left: 6px;
  color: #457c9e;
  font-weight: bold;
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;
