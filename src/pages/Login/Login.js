import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LoginNav from '../../components/LoginNav/LoginNav';

const Login = () => {
  const [userInfo, setuserInfo] = useState({ userID: '', userPW: '' });
  const { userID, userPW } = userInfo;
  const onChangeHandler = e => {
    const { name, value } = e.target;
    setuserInfo({ ...userInfo, [name]: value });
  };

  const isValid = userInfo.userID.length >= 5 && userInfo.userPW.length >= 8;

  return (
    <>
      <LoginNav />
      <LoginPage>
        <LoginLogo src="images/Nav/main_logo.png" />
        <LoginIdInput
          type="text"
          name="userID"
          value={userID}
          onChange={onChangeHandler}
          placeholder="아이디"
        />
        <LoginPwInput
          type="text"
          name="userPW"
          value={userPW}
          onChange={onChangeHandler}
          placeholder="비밀번호"
        />
        <LoginSubmitBtn disabled={isValid ? false : true}>
          로그인
        </LoginSubmitBtn>
        <LoginAsk>
          아직 로그인 계정이 없으신가요?
          <LoginToSignup to="/signup">회원가입</LoginToSignup>
          <SignupPwLine>|</SignupPwLine>
          <LoginFindPw>비밀번호 찾기</LoginFindPw>
        </LoginAsk>
      </LoginPage>
    </>
  );
};

export default Login;

const LoginPage = styled.div`
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

const SignupPwLine = styled.span`
  margin: auto 3px;
`;

const LoginFindPw = styled(Link)`
  color: #457c9e;
  font-weight: bold;
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;
