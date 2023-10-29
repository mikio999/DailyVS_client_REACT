import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
const FixPassWord = () => {
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(false);

  useEffect(() => {
    if (password1 === password2 && password1.length >= 8) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  }, [password1, password2]);

  return (
    <Container>
      <SignupLogo src="/images/LoginNav/Only_Tex.png" />
      <PasswordModify>비밀번호 변경하기</PasswordModify>
      <SignupLabel>비밀번호(8자 이상 15자 이하) </SignupLabel>
      <TextInput
        value={password1}
        type="password"
        placeholder="비밀번호"
        onChange={e => {
          const newPassword = e.target.value;
          setPassword1(newPassword);
        }}
        required
      />
      <SignupLabel>
        확인 비밀번호
        {passwordMatch && (
          <PasswordMatchText>
            비밀번호 일치 <PassWordCheck src="/images/LoginNav/check.png" />
          </PasswordMatchText>
        )}
      </SignupLabel>
      <TextInput
        type="password"
        placeholder="확인 비밀번호"
        name="password2"
        value={password2}
        onChange={e => {
          const newPassword = e.target.value;
          setPassword2(newPassword);
        }}
      />
      <Register disabled={!passwordMatch}>등록하기</Register>
    </Container>
  );
};
export default FixPassWord;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SignupLogo = styled.img`
  width: 280px;
`;

const PasswordModify = styled.h1`
  font-family: 'GongGothicLight';
  font-size: 24px;
  color: #17355a;
  text-align: center;
  margin-bottom: 1rem;
`;

const SignupLabel = styled.label`
  font-size: 14px;
  display: flex;
  margin-top: 10px;
  height: 20px;
`;

const TextInput = styled.input`
  width: 300px;
  height: 50px;
  margin-bottom: 10px;
  font-size: 16px;
  border: 1px rgba(128, 128, 128, 0.2) solid;
  background-color: #f4faff;
  padding-left: 20px;
`;

const PasswordMatchText = styled.span`
  display: flex;
  align-items: center;
  margin-left: 10px;
  padding-bottom: 7px;
  color: green;
  transition: opacity 0.3s ease;
`;

const PassWordCheck = styled.img`
  opacity: 0.9;
  width: 20px;
  margin-left: 5px;
`;

const Register = styled.button`
  margin-top: 10px;
  width: 300px;
  height: 50px;
  font-size: 20px;
  color: white;
  background-color: ${props => (props.disabled ? '#d4d4d4' : '#ff495a')};
  border: none;
  border-radius: 5px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;
