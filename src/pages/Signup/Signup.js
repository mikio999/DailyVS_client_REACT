import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import LoginNav from '../../components/LoginNav/LoginNav';
import EmailVerification from './EmailVerification';

const Signup = () => {
  const [userSignupInfo, setUserSignupInfo] = useState({
    signupEmail: '',
    signupPW: '',
    signupMBTI: '',
    signupNickName: '',
    signupGender: '',
  });
  const [signupPWCheck, setSignupPWCheck] = useState('');
  const { signupEmail, signupPW, signupMBTI, signupNickName, signupGender } =
    userSignupInfo;
  const [passwordMatch, setPasswordMatch] = useState(false);

  const navigate = useNavigate();
  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderChange = e => {
    setSelectedGender(e.target.value);
    setUserSignupInfo({
      ...userSignupInfo,
      signupGender: e.target.value,
    });
  };

  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const passwordRegEx = /^[A-Za-z0-9]{8,15}$/;

  const emailCheck = userSignupEmail => emailRegEx.test(userSignupEmail);

  const passwordCheck = userSignupPW => {
    return userSignupPW.match(passwordRegEx) !== null;
  };

  const passwordDoubleCheck = (userSignupPW, signupPWCheck) => {
    const match = userSignupPW === signupPWCheck;
    setPasswordMatch(match);
    return match;
  };

  const isFormValid = () => {
    console.log('Email:', signupEmail);
    console.log('MBTI:', signupMBTI);
    console.log('NickName:', signupNickName);
    console.log('Gender:', signupGender);

    return (
      signupEmail.length > 0 &&
      signupMBTI.length > 0 &&
      signupNickName.length >= 2 &&
      signupGender.length > 0
    );
  };

  const onSubmit = async e => {
    e.preventDefault();
    console.log(userSignupInfo);

    if (!passwordCheck(signupPW)) {
      alert('비밀번호 형식을 확인해주세요.');
      return;
    }

    if (!passwordDoubleCheck(signupPW, signupPWCheck)) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (!isFormValid()) {
      alert('입력 정보를 확인해주세요.');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/account/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userSignupInfo),
      });

      if (response.ok) {
        // 회원가입 성공 시 이메일 인증 페이지로 이동
        navigate('/email-verification');
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (response) {
      console.error('Server Error:', response.statusText);
      alert('회원가입 에러:', response.statusText);
    }
  };
  // MBTI 선택 항목
  const mbtiOptions = [
    'ISTJ',
    'ISFJ',
    'INFJ',
    'INTJ',
    'ISTP',
    'ISFP',
    'INFP',
    'INTP',
    'ESTP',
    'ESFP',
    'ENFP',
    'ENTP',
    'ESTJ',
    'ESFJ',
    'ENFJ',
    'ENTJ',
  ];

  return (
    <>
      <LoginNav />
      <SignupPage>
        <SignupContainer onSubmit={onSubmit}>
          <SignupLogo src="images/LoginNav/Only_Tex.png" />
          <SignupLabel>이메일</SignupLabel>
          <TextInput
            value={signupEmail}
            type="email"
            placeholder="이메일 주소"
            onChange={e => {
              setUserSignupInfo({
                ...userSignupInfo,
                signupEmail: e.target.value,
              });
              emailCheck(e.target.value);
            }}
          />
          <SignupLabel>비밀번호(8자 이상 15자 이하) </SignupLabel>
          <TextInput
            value={signupPW}
            type="password"
            placeholder="비밀번호"
            onChange={e => {
              setUserSignupInfo({
                ...userSignupInfo,
                signupPW: e.target.value,
              });
              passwordCheck(e.target.value);
            }}
          />
          <SignupLabel>
            확인 비밀번호
            {passwordMatch && (
              <PasswordMatchText>
                비밀번호 일치 <PassWordCheck src="images/LoginNav/check.png" />
              </PasswordMatchText>
            )}
          </SignupLabel>
          <TextInput
            value={signupPWCheck}
            type="password"
            placeholder="확인 비밀번호"
            onChange={e => {
              setSignupPWCheck(e.target.value);
              passwordDoubleCheck(signupPW, e.target.value);
            }}
          />
          <SignupLabel>기타 정보 (성향 분석에 필요합니다!)</SignupLabel>
          <MBTIDropdown
            value={signupMBTI}
            onChange={e =>
              setUserSignupInfo({
                ...userSignupInfo,
                signupMBTI: e.target.value,
              })
            }
          >
            <option value="">MBTI 선택</option>
            {mbtiOptions.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </MBTIDropdown>
          <TextInput
            value={signupNickName}
            placeholder="닉네임 (2자 이상 10자 이하)"
            onChange={e =>
              setUserSignupInfo({
                ...userSignupInfo,
                signupNickName: e.target.value,
              })
            }
          />
          <GenderRadioGroup>
            <input
              className="radio-input"
              type="radio"
              name="gender"
              value="male"
              checked={selectedGender === 'male'}
              onChange={handleGenderChange}
              id="male-radio"
            />
            <GenderOption
              htmlFor="male-radio"
              className={selectedGender === 'male' ? 'selected' : ''}
            >
              남성
            </GenderOption>

            <input
              className="radio-input"
              type="radio"
              name="gender"
              value="female"
              checked={selectedGender === 'female'}
              onChange={handleGenderChange}
              id="female-radio"
            />
            <GenderOption
              htmlFor="female-radio"
              className={selectedGender === 'female' ? 'selected' : ''}
            >
              여성
            </GenderOption>
          </GenderRadioGroup>
          <SignupBtn disabled={!isFormValid()}>회원가입</SignupBtn>
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
  font-size: 18px;
`;

const SignupContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const SignupLogo = styled.img`
  width: 280px;
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

const SignupLabel = styled.label`
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  height: 20px;
`;

const TextInput = styled.input`
  width: 300px;
  height: 50px;
  margin-bottom: 10px;
  font-size: 18px;
  border: 1px rgba(128, 128, 128, 0.2) solid;
  background-color: #f4faff;
  padding-left: 20px;
`;

const GenderRadioGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

const GenderOption = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px rgba(128, 128, 128, 0.2) solid;
  background-color: #f4faff;
  height: 50px;
  width: 140px;
  cursor: pointer;
  transition: border 0.3s ease;

  .radio-input {
    display: none;
  }

  .radio-input:checked + & {
    border: 5px #17355a solid;
  }
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
  color: #ff495a;
  margin: 0px 5px;
`;

const MBTIDropdown = styled.select`
  width: 300px;
  height: 50px;
  margin-bottom: 10px;
  font-size: 18px;
  border: 1px rgba(128, 128, 128, 0.2) solid;
  background-color: #f4faff;
  padding-left: 20px;
`;
