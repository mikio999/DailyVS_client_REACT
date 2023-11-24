import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import UserOut from '../../../components/Atoms/UserOut';

const Modify = ({ isAuthenticated }) => {
  const [userInformation, setUserInformation] = useState({
    nickname: '',
    gender: '',
    mbti: '',
    age: '',
  });
  const navigate = useNavigate();
  const [formData, setFormData] = useState(userInformation);
  const [BtnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const accessToken = localStorage.getItem('access');
    if (accessToken) {
      headers.append('Authorization', `Bearer ${accessToken}`);
    }

    const requestOptions = {
      method: 'GET',
      headers: headers,
    };

    fetch(`${process.env.REACT_APP_HOST}/mypage`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setUserInformation(result.user);
        console.log(result.user);
      });
  }, []);
  formData.nickname = userInformation?.nickname;

  console.log('formData', formData);

  const formFull = () => {
    if (userInformation.gender == null) {
      formData.nickname = 'M';
      userInformation.gender = 'M';
    } else formData.gender = userInformation.gender;

    if (userInformation.mbti == null) {
      formData.mbti = 'ISTJ';
      userInformation.mbti = 'ISTJ';
    } else formData.mbti = userInformation.mbti;

    if (userInformation.age == null) {
      formData.age = '10';
      userInformation.age = '10';
    } else {
      formData.age = userInformation.age;
    }
  };

  formFull();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

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

  const ageOptions = [
    { label: '10대', value: '10' },
    { label: '20대 초반', value: '20_1' },
    { label: '20대 후반', value: '20_2' },
    { label: '30대 초반', value: '30_1' },
    { label: '30대 후반', value: '30_2' },
    { label: '40대', value: '40' },
  ];

  const handleModifyClick = event => {
    event.preventDefault();
    formFull();

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const accessToken = localStorage.getItem('access');

    if (accessToken) {
      headers.append('Authorization', `Bearer ${accessToken}`);
    }

    const requestOptions = {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(userInformation),
    };

    fetch(`${process.env.REACT_APP_HOST}/mypage`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log('서버 응답:', result);

        if (result) {
          navigate(`/my-page`);
        }
      })
      .catch(error => {
        console.error('POST 요청 오류:', error);
      });
  };
  return (
    <SignupPage>
      <SignupContainer>
        <SignupLogo src={require('../../../assets/LoginNav/Only_Tex.png')} />
        <ModifyTitle>개인정보 수정하기</ModifyTitle>
        <MBTIDropdown
          value={userInformation.mbti}
          onChange={e => {
            const newValue = e.target.value;
            setUserInformation({ ...userInformation, mbti: newValue });
            setFormData({ ...formData, mbti: newValue });
          }}
        >
          {mbtiOptions.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </MBTIDropdown>
        <TextInput
          value={userInformation.nickname}
          placeholder="닉네임 (2자 이상 10자 이하)"
          onChange={e => {
            const newNickname = e.target.value;
            if (newNickname.length <= 10) {
              setUserInformation({ ...userInformation, nickname: newNickname });
              setFormData({ ...formData, nickname: newNickname });
            } else {
              window.alert('닉네임은 10자를 넘을 수 없습니다.');
            }
          }}
        />
        <GenderRadioGroup>
          <input
            className="radio-input"
            type="radio"
            name="gender"
            value="M"
            checked={formData.gender === 'M'}
            onChange={e => {
              const newGender = e.target.value;
              setUserInformation({ ...userInformation, gender: newGender });
              setFormData({ ...formData, gender: newGender });
            }}
            id="male-radio"
            style={{ display: 'none' }}
          />
          <GenderOption
            htmlFor="male-radio"
            className={userInformation.gender === 'M' ? 'selected' : ''}
          >
            남성
          </GenderOption>
          <input
            className="radio-input"
            type="radio"
            name="gender"
            value="W"
            checked={formData.gender === 'W'}
            onChange={e => {
              const newGender = e.target.value;
              setUserInformation({ ...userInformation, gender: newGender });
              setFormData({ ...formData, gender: newGender });
            }}
            id="female-radio"
            style={{ display: 'none' }}
          />
          <GenderOption
            htmlFor="female-radio"
            className={userInformation.gender === 'W' ? 'selected' : ''}
          >
            여성
          </GenderOption>
        </GenderRadioGroup>

        <SignupLabel>나이</SignupLabel>
        <MBTIDropdown
          value={userInformation.age || ''}
          onChange={e => {
            const newAge = e.target.value;
            setUserInformation({ ...userInformation, age: newAge });
            setFormData({ ...formData, age: newAge });
          }}
        >
          {ageOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </MBTIDropdown>
        <SignupBtn
          onClick={handleModifyClick}
          disabled={userInformation.nickname.length < 3}
        >
          수정하기
        </SignupBtn>
      </SignupContainer>
      <SignupToLogin>
        <UserOut />
        <SignupLoginBtn to="/find-password">비밀번호 변경</SignupLoginBtn>
      </SignupToLogin>
    </SignupPage>
  );
};

export default Modify;

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
  padding: 0 20px 30px;
`;

const SignupLogo = styled.img`
  width: 280px;
`;

const ModifyTitle = styled.h1`
  font-family: 'GongGothicLight';
  font-size: 24px;
  color: #17355a;
  text-align: center;
  margin-bottom: 1rem;
`;

const SignupLabel = styled.label`
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-top: 10px;
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
    display: none !important;
  }

  &:hover {
    border: 5px #17355a solid;
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
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
`;

const SignupLoginBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff495a !important;
  width: 120px;
  height: 40px;
  margin-bottom: 10px;
  font-size: 15px;
  border: 1px solid #ff495a;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    color: white !important;
    background-color: #ff495a;
    border: 1px solid #ff495a;
  }
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
