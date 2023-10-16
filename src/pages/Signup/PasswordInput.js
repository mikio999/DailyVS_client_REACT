import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LoginNav from '../../components/LoginNav/LoginNav';
import axios from 'axios';
import { useSelector } from 'react-redux';

const PasswordInput = () => {
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const selectedEmail = useSelector(state => state.email.selectedEmail);

  const handlePassword1Change = e => {
    const newPassword1 = e.target.value;
    setPassword1(newPassword1);
    console.log(newPassword1);
  };

  const handlePassword2Change = e => {
    const newPassword2 = e.target.value;
    setPassword2(newPassword2);
    console.log(newPassword2);
  };
  useEffect(() => {
    if (password1 === password2 && password1.length >= 8) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  }, [password1, password2]);

  return (
    <>
      <LoginNav />
      <Container>
        <LogoImg src="/images/LoginNav/Only_Tex.png" />
        <PasswordTitle>비밀번호 재설정</PasswordTitle>
        <PasswordContent>새로운 비밀번호를 설정해주세요</PasswordContent>
        <PasswordQuestion>
          {/* {selectedEmail}님 <br /> */}
          <PasswordLabel>비밀번호(8자 이상 15자 이하)</PasswordLabel>
          <PasswordWrite
            placeholder="비밀번호 입력"
            type="password"
            value={password1}
            onChange={handlePassword1Change}
          />
          <PasswordLabel>비밀번호 재입력(8자 이상 15자 이하)</PasswordLabel>
          <PasswordReWrite
            placeholder="비밀번호 재입력"
            type="password"
            name="password2"
            value={password2}
            onChange={handlePassword2Change}
          />
        </PasswordQuestion>
        <PasswordLabel>
          {passwordMatch && (
            <PasswordMatchText>
              비밀번호 일치 <PassWordCheck src="images/LoginNav/check.png" />
            </PasswordMatchText>
          )}
        </PasswordLabel>
        <PasswordRegister disabled={!passwordMatch}>
          비밀번호 변경하기
        </PasswordRegister>
      </Container>
    </>
  );
};

export default PasswordInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 40rem;
  white-space: nowrap;
`;

const PasswordTitle = styled.h1`
  font-family: 'GongGothicLight';
  color: #17355a;
  font-size: 28px;
`;

const PasswordContent = styled.div`
  margin-top: 1rem;
`;

const PasswordWrite = styled.input`
  margin-top: 10px;
  width: min(100%, 300px);
  height: 50px;
  font-size: 18px;
  border: 1px rgba(128, 128, 128, 0.2) solid;
  background-color: #f4faff;
  padding-left: 20px;
`;

const PasswordReWrite = styled.input`
  margin-top: 10px;
  width: min(100%, 300px);
  height: 50px;
  font-size: 18px;
  border: 1px rgba(128, 128, 128, 0.2) solid;
  background-color: #f4faff;
  padding-left: 20px;
`;

const LogoImg = styled.img`
  width: 220px;
  margin-top: 3rem;
`;

const PasswordQuestion = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  font-size: 20px;
  text-align: center;
`;

const PasswordRegister = styled.button`
  margin-left: 10px;
  margin-top: 1rem;
  font-size: 18px;
  width: 200px;
  height: 35px;
  border: solid 1px #17355a;
  background-color: white;
  color: #17355a;
  &:disabled {
    background-color: #bdbdbd;
    border: 1px solid #bdbdbd;
    color: white;
    cursor: not-allowed;
  }
`;

const PasswordLabel = styled.label`
  font-size: 14px;
  display: flex;
  align-items: center;
  height: 20px;
  margin-top: 10px;
  margin-bottom: -10px;
`;

const PassWordCheck = styled.img`
  opacity: 0.9;
  width: 20px;
  margin-left: 5px;
`;

const PasswordMatchText = styled.span`
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: green;
  transition: opacity 0.3s ease;
`;
