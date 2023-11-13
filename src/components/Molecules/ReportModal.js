import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const ReportModal = ({ isOpen, onClose, information }) => {
  const reportRef = useRef(null);
  const [reportType, setReportType] = useState('');

  const handleOverlayClick = e => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const reportOptions = [
    { value: '도배성 게시물 ', label: '도배성 게시물 ' },
    { value: '불법 홍보 게시물 ', label: '불법 홍보 게시물 ' },
    {
      value: '청소년에게 부적절한 게시물',
      label: '청소년에게 부적절한 게시물',
    },
    {
      value: '타인 비방 목적의 게시물',
      label: '타인 비방 목적의 게시물',
    },
    {
      value: '개인 정보 유출',
      label: '개인 정보 유출',
    },
    {
      value: '기타',
      label: '기타',
    },
  ];

  const handleReportTypeChange = e => {
    console.log('Selected value:', e.target.value);
    setReportType(e.target.value);
  };

  const detailId = information?.id;

  const isFormValid = () => {
    return reportType !== '';
  };

  const handleReportSubmit = () => {
    if (!isAuthenticated) {
      alert('로그인 후 이용해주시길 바랍니다.');
    } else {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');

      const accessToken = localStorage.getItem('access');
      if (accessToken) {
        headers.append('Authorization', `Bearer ${accessToken}`);
      }

      const requestOptions = {
        method: 'POST',
        headers: headers,
      };

      const requestBody = JSON.stringify({
        content: reportType,
      });

      fetch(`${process.env.REACT_APP_HOST}/${detailId}/report`, {
        ...requestOptions,
        body: requestBody,
      })
        .then(response => response.json())
        .then(result => {
          console.log(result);
          alert('신고가 정상적으로 접수되었습니다.');
        });
    }
    onClose();
  };

  return isOpen ? (
    <ModalOverlay onClick={handleOverlayClick}>
      <FortuneModalContainer>
        <ModalCloseButton onClick={onClose}>&times;</ModalCloseButton>
        <ModalContent ref={reportRef}>
          <ModalTitle>투표 신고하기</ModalTitle>
          <ReportImg src={require('../../assets/Buttons/report2.png')} />
          <ReportContent>투표 신고 사유를 선택해주세요</ReportContent>
          <ReportOptions>
            {reportOptions.map(option => (
              <React.Fragment key={option.value}>
                <ReportOption
                  className="radio-input"
                  type="radio"
                  value={option.value}
                  checked={reportType === option.value}
                  onChange={e => handleReportTypeChange(e)}
                />
                <ReportSquare onClick={() => setReportType(option.value)}>
                  {option.label}
                </ReportSquare>
              </React.Fragment>
            ))}
          </ReportOptions>
          <SubmitButton onClick={handleReportSubmit} disabled={!isFormValid()}>
            신고하기
          </SubmitButton>
        </ModalContent>
      </FortuneModalContainer>
    </ModalOverlay>
  ) : null;
};

export default ReportModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const FortuneModalContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  width: 400px;
  height: 430px;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ModalTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-family: 'GongGothicLight';
`;

const ReportImg = styled.img`
  width: 40px;
  margin-left: 10px;
  margin-top: 1rem;
`;

const ReportOptions = styled.div`
  display: flex;
  flex-direction: column;
  & > label {
    margin-top: 1rem;
  }
`;

const ReportContent = styled.div`
  margin-top: 1rem;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: ${props => (props.disabled ? '#BDBDBD' : '#17355a')};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const ReportSquare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  height: 25px;
  width: 200px;
  margin-top: 10px;
  background-color: white;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
  &:hover {
    cursor: pointer;
    background-color: #bdbdbd;
  }
`;

const ReportOption = styled.input`
  display: none;
  &:checked + ${ReportSquare} {
    background-color: #ff495a;
    color: white;
  }
`;
