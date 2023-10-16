import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LoginNav from '../../components/LoginNav/LoginNav';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setEmail } from '../../actions/actions';

const Password = () => {
  const dispatch = useDispatch();
  const [newemail, setNewemail] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleEmailChange = e => {
    const newEmail = e.target.value;
    setNewemail(newEmail);

    const isValidEmail =
      newEmail.includes('.') && newEmail.includes('@') && newEmail.length >= 8;
    setIsButtonDisabled(!isValidEmail);
  };
  const handleEmailDispatch = selectedEmail => {
    dispatch(setEmail(selectedEmail));
  };

  console.log(newemail);
  const handleResendEmail = async () => {
    try {
      await axios.post(`http://localhost:8000/accounts/password/reset/`);
    } catch (error) {
      console.error('Error resending email:', error);
    }
  };

  return (
    <>
      <LoginNav />
      <Container>
        <LogoImg src="/images/LoginNav/Only_Tex.png" />
        <EmailTitle>비밀번호 재설정</EmailTitle>
        <EmailQuestion>
          가입 시 사용한 계정을 입력해주세요. <br />
          <EmailInput
            type="email"
            placeholder="이메일 입력"
            value={newemail}
            onChange={handleEmailChange}
          />
        </EmailQuestion>
        <EmailRegister
          onClick={() => {
            handleEmailDispatch(newemail);
            handleResendEmail();
          }}
          disabled={isButtonDisabled}
        >
          이메일 전송하기
        </EmailRegister>
      </Container>
    </>
  );
};
export default Password;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 40rem;
  white-space: nowrap;
`;

const EmailTitle = styled.h1`
  font-family: 'GongGothicLight';
  color: #17355a;
  font-size: 28px;
`;

const EmailInput = styled.input`
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

const EmailQuestion = styled.div`
  margin-top: 1rem;
  font-size: 20px;
  text-align: center;
`;

const EmailRegister = styled.button`
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

  &:hover {
    cursor: pointer;
  }
`;
