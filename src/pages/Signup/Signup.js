import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LoginNav from '../../components/LoginNav/LoginNav';

const Signup = () => {
  const [userSignupEmail, setUserSignupEmail] = useState('');
  const [userSignupPW, setUserSignupPW] = useState('');
  const [signupPWCheck, setSignupPWCheck] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [userSignupInfo, setUserSignupInfo] = useState({
    signupEmail: '',
    signupID: '',
    signupPW: '',
    signupMBTI: '',
    signupNickName: '',
    signupGender: '',
  });
  console.log(userSignupInfo);
  // const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {
    signupEmail,
    signupID,
    signupPW,
    signupMBTI,
    signupNickName,
    signupGender,
  } = userSignupInfo;

  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const passwordRegEx = /^[A-Za-z0-9]{8,15}$/;
  const emailCheck = userSignupEmail => {
    return emailRegEx.test(userSignupEmail); //형식에 맞을 경우, true 리턴
  };
  const passwordCheck = userSignupPW => {
    if (userSignupPW.match(passwordRegEx) === null) {
      //형식에 맞지 않을 경우 아래 콘솔 출력
      console.log('비밀번호 형식을 확인해주세요');
      return;
    } else {
      // 맞을 경우 출력
      console.log('비밀번호 형식이 맞아요');
    }
  };
  const passwordDoubleCheck = (userSignupPW, signupPWCheck) => {
    if (userSignupPW !== signupPWCheck) {
      console.log('비밀번호가 다릅니다.');
      return;
    } else {
      console.log('비밀번호가 동일합니다');
    }
  };

  const isSignupValid =
    userSignupInfo.signupEmail.length >= 10 &&
    5 <= userSignupInfo.signupID.length <= 10 &&
    8 <= userSignupInfo.signupPW.length <= 15 &&
    userSignupInfo.signupMBTI.length === 4 &&
    2 <= userSignupInfo.signupNickName <= 10 &&
    userSignupInfo.signupGender.length === 2;
  return (
    <>
      <LoginNav />
      <SignupPage>
        <SignupContainer>
          <SignupLogo src="images/LoginNav/Only_Tex.png" />
          <SignupEmailInput
            value={signupEmail}
            type="email"
            placeholder="이메일 주소"
            onChange={e => {
              setUserSignupInfo({
                ...userSignupInfo,
                signupEmail: e.target.value,
              });
              setUserSignupEmail(e.target.value);
              emailCheck(e.target.value);
            }}
          />
          <SignupIdInput
            value={signupID}
            placeholder="아이디 (5자 이상 10자 이하)"
            onChange={e => {
              setUserSignupInfo({
                ...userSignupInfo,
                signupID: e.target.value,
              });
            }}
          />
          <SignupPwInput
            value={signupPW}
            type="password"
            placeholder="비밀번호 (8자 이상 15자 이하)"
            onChange={e => {
              setUserSignupPW(e.target.value);
              passwordCheck(e.target.value);
              setUserSignupInfo({
                ...userSignupInfo,
                signupPW: e.target.value,
              });
            }}
          />
          <SignupPwCheckInput
            value={signupPWCheck}
            type="password"
            placeholder="확인 비밀번호"
            onChange={e => {
              setSignupPWCheck(e.target.value);
              passwordDoubleCheck(userSignupPW, e.target.value);
            }}
          />
          <SignupMBTIInput
            value={signupMBTI}
            placeholder="MBTI"
            onChange={e => {
              setUserSignupInfo({
                ...userSignupInfo,
                signupMBTI: e.target.value,
              });
            }}
          />
          <SignupNickNameInput
            value={signupNickName}
            placeholder="닉네임 (2자 이상 10자 이하)"
            onChange={e => {
              setUserSignupInfo({
                ...userSignupInfo,
                signupNickName: e.target.value,
              });
            }}
          />
          <GenderLabel>성별</GenderLabel>
          <GenderRadioGroup>
            <GenderRadio
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={selectedGender === 'male'}
              onChange={e => setSelectedGender('male')}
            />
            <GenderLabel htmlFor="male">남성</GenderLabel>
            <GenderRadio
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={selectedGender === 'female'}
              onChange={() => setSelectedGender('female')}
            />
            <GenderLabel htmlFor="female">여성</GenderLabel>
            {/* Add more options if needed */}
          </GenderRadioGroup>

          <SignupBtn disabled={isSignupValid ? false : true}>
            회원가입
          </SignupBtn>
          <SignupToLogin>
            바로 <SignupLoginBtn to="/login">로그인</SignupLoginBtn>하러 가기
          </SignupToLogin>
        </SignupContainer>
      </SignupPage>
    </>
  );
};

export default Signup;

const SignupPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const SignupContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const SignupLogo = styled.img`
  width: 280px;
`;

const SignupEmailInput = styled.input`
  width: 300px;
  height: 50px;
  margin-bottom: 10px;
  font-size: 20px;
  border: 1px rgba(128, 128, 128, 0.2) solid;
  background-color: #f4faff;
  padding-left: 20px;
`;

const SignupIdInput = styled.input`
  width: 300px;
  height: 50px;
  margin-bottom: 10px;
  font-size: 20px;
  border: 1px rgba(128, 128, 128, 0.2) solid;
  background-color: #f4faff;
  padding-left: 20px;
`;

const SignupPwInput = styled.input`
  width: 300px;
  height: 50px;
  margin-bottom: 10px;
  font-size: 20px;
  border: 1px rgba(128, 128, 128, 0.2) solid;
  background-color: #f4faff;
  padding-left: 20px;
`;

const SignupPwCheckInput = styled.input`
  width: 300px;
  height: 50px;
  margin-bottom: 10px;
  font-size: 20px;
  border: 1px rgba(128, 128, 128, 0.2) solid;
  background-color: #f4faff;
  padding-left: 20px;
`;

const SignupMBTIInput = styled.input`
  width: 300px;
  height: 50px;
  margin-bottom: 10px;
  font-size: 20px;
  border: 1px rgba(128, 128, 128, 0.2) solid;
  background-color: #f4faff;
  padding-left: 20px;
`;

const SignupNickNameInput = styled.input`
  width: 300px;
  height: 50px;
  margin-bottom: 10px;
  font-size: 20px;
  border: 1px rgba(128, 128, 128, 0.2) solid;
  background-color: #f4faff;
  padding-left: 20px;
`;

const GenderLabel = styled.label`
  margin-top: 10px;
  font-size: 20px;
`;

const GenderRadioGroup = styled.div`
  margin-top: 5px;
`;

const GenderRadio = styled.input`
  margin-right: 5px;
`;

const SignupBtn = styled.button`
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

const SignupToLogin = styled.div`
  font-size: 14px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

const SignupLoginBtn = styled(Link)`
  margin: auto 3px;
  color: #ff495a;
  &:hover {
    border-bottom: 1px solid #ff495a;
    cursor: pointer;
  }
`;
