import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMBTI } from '../../../actions/actions';
import RegisterBtn from '../../../components/Molecules/DetailBtns/RegisterBtn';

const DetailMBTI = () => {
  const dispatch = useDispatch();
  const [selectedOptions, setSelectedOptions] = useState({
    EI: '',
    NS: '',
    TF: '',
    PJ: '',
  });

  const handleOptionClick = (option, category) => {
    const updatedOptions = { ...selectedOptions, [category]: option };
    setSelectedOptions(updatedOptions);
  };

  const mixedMBTI = () => {
    const { EI, NS, TF, PJ } = selectedOptions;
    const newUserMBTI = EI + NS + TF + PJ;
    dispatch(setMBTI(newUserMBTI));
    return newUserMBTI;
  };

  const isFormValid = selectedOptions => {
    const mbtiValue = mixedMBTI(selectedOptions);
    return mbtiValue.length === 4;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <MbtiQuestion>당신의 MBTI는?</MbtiQuestion>
      <MBTIContainer>
        <MbtiOption>
          <MbtiCheck
            onClick={() => handleOptionClick('E', 'EI')}
            selected={selectedOptions.EI === 'E'}
            value="E"
          >
            E
          </MbtiCheck>
          <MbtiCheck
            onClick={() => handleOptionClick('I', 'EI')}
            selected={selectedOptions.EI === 'I'}
            value="I"
          >
            I
          </MbtiCheck>
        </MbtiOption>
        <MbtiOption>
          <MbtiCheck
            onClick={() => handleOptionClick('N', 'NS')}
            selected={selectedOptions.NS === 'N'}
            value="N"
          >
            N
          </MbtiCheck>
          <MbtiCheck
            onClick={() => handleOptionClick('S', 'NS')}
            selected={selectedOptions.NS === 'S'}
            value="S"
          >
            S
          </MbtiCheck>
        </MbtiOption>
        <MbtiOption>
          <MbtiCheck
            onClick={() => handleOptionClick('T', 'TF')}
            selected={selectedOptions.TF === 'T'}
            value="T"
          >
            T
          </MbtiCheck>
          <MbtiCheck
            onClick={() => handleOptionClick('F', 'TF')}
            selected={selectedOptions.TF === 'F'}
            value="F"
          >
            F
          </MbtiCheck>
        </MbtiOption>
        <MbtiOption>
          <MbtiCheck
            onClick={() => handleOptionClick('P', 'PJ')}
            selected={selectedOptions.PJ === 'P'}
            value="P"
          >
            P
          </MbtiCheck>
          <MbtiCheck
            onClick={() => handleOptionClick('J', 'PJ')}
            selected={selectedOptions.PJ === 'J'}
            value="J"
          >
            J
          </MbtiCheck>
        </MbtiOption>
      </MBTIContainer>
      <MBTICooperation>
        <MBTIMix>선택된 MBTI 조합 : </MBTIMix>
        <MBTIMixValue>{mixedMBTI()}</MBTIMixValue>
      </MBTICooperation>
      <RegisterBtn isFormValid={isFormValid} />
    </Container>
  );
};
export default DetailMBTI;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f8f8ff;
  width: 100vw;
  min-height: 60vh;
`;

const MbtiQuestion = styled.h1`
  margin: 50px auto 10px;
  font-size: 28px;
  font-family: 'GongGothicMedium';
  color: #17355a;
`;

const MBTIContainer = styled.div`
  display: flex;
  margin: 50px auto;
  justify-content: center;
  align-items: center;
  width: 350px;
`;

const MbtiOption = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 32px;
`;

const MbtiCheck = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'GongGothicMedium';
  min-width: 60px;
  min-height: 60px;
  width: 10vw;
  height: 10vh;
  margin: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color 0.3s ease;

  background-color: ${props => (props.selected ? '#ff495a' : 'white')};
  color: ${props => (props.selected ? 'white' : 'black')};

  &:hover {
    background-color: ${props => (props.selected ? '#ff495a' : '#ccc')};
    color: white;
  }
`;

const MBTICooperation = styled.div`
  height: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: auto;
  margin-right: auto;
`;

const MBTIMix = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-left: 60px;
  white-space: nowrap;
`;

const MBTIMixValue = styled.div`
  display: flex;
  margin-left: 10px;
  align-items: center;
  font-size: 22px;
  font-family: 'GongGothicMedium';
`;
