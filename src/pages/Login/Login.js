import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import axios from 'axios';
import LoginNav from '../../components/LoginNav/LoginNav';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    login(email, password);
  };

  if (isAuthenticated) {
    navigate('/');
    return null;
  }

  const isValid =
    email.length >= 8 &&
    email.includes('@') &&
    email.includes('.') &&
    password.length >= 8;

  return (
    <>
      <LoginNav />
      <LoginPage onSubmit={e => onSubmit(e)}>
        <LoginLogo src="images/Nav/main_logo.png" />
        <LoginIdInput
          type="text"
          name="email"
          value={email}
          onChange={e => onChange(e)}
          required
          placeholder="이메일"
        />
        <LoginPwInput
          type="password"
          name="password"
          value={password}
          onChange={e => onChange(e)}
          placeholder="비밀번호"
          autoComplete="current-password"
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

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);

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
  font-size: 18px;
  border: 1px rgba(128, 128, 128, 0.2) solid;
  background-color: #f4faff;
  padding-left: 20px;
`;

const LoginPwInput = styled.input`
  width: 300px;
  height: 50px;
  margin-bottom: 30px;
  font-size: 18px;
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
