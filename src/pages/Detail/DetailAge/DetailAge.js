import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setAge } from '../../../actions/actions';
import RegisterBtn from '../../../components/Molecules/DetailBtns/RegisterBtn';

const AGE_LIST = [
  { label: '10대', value: '10' },
  { label: '20대 초반', value: '20_1' },
  { label: '20대 후반', value: '20_2' },
  { label: '30대 초반', value: '30_1' },
  { label: '30대 후반', value: '30_2' },
  { label: '40대 이상', value: '40' },
];

const DetailAge = () => {
  const dispatch = useDispatch();
  const [selectedAge, setSelectedAge] = useState('');
  const gridData = [];
  for (let i = 0; i < AGE_LIST.length; i += 2) {
    gridData.push(AGE_LIST.slice(i, i + 2));
  }

  const handleAgeChange = e => {
    const selectedAge = e.target.value;
    setSelectedAge(selectedAge);
  };

  const handleDispatch = selectedAge => {
    dispatch(setAge(selectedAge));
  };

  handleDispatch(selectedAge);

  const isFormValid = () => {
    return selectedAge !== '';
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <AgeQuestion>당신의 연령대는?</AgeQuestion>
      <AgeSection>
        {gridData.map((row, rowIndex) => (
          <AgeRow key={rowIndex}>
            {row.map(item => (
              <React.Fragment key={item.value}>
                <AgeOption
                  className="radio-input"
                  type="radio"
                  value={item.value}
                  checked={selectedAge === item.value}
                  onChange={e => handleAgeChange(e)}
                />
                <AgeSquare onClick={() => setSelectedAge(item.value)}>
                  {item.label}
                </AgeSquare>
              </React.Fragment>
            ))}
          </AgeRow>
        ))}
      </AgeSection>
      <RegisterBtn isFormValid={isFormValid} />
    </Container>
  );
};

export default DetailAge;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: #f8f8ff;
`;

const AgeQuestion = styled.h1`
  margin: 3rem auto 10px;
  font-size: 28px;
  font-family: 'GongGothicMedium';
  color: #17355a;
`;

const AgeSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const AgeRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const AgeSquare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'GongGothicMedium';
  font-size: 22px;
  height: 70px;
  width: 180px;
  margin: 1rem;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
  &:hover {
    cursor: pointer;
    background-color: #bdbdbd;
  }
`;

const AgeOption = styled.input`
  display: none;
  &:checked + ${AgeSquare} {
    background-color: #ff495a;
    color: white;
  }
`;
