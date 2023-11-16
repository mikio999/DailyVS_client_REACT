import React, { useContext, useEffect, useRef } from 'react';
import InputBox from '../Atoms/InputBox';
import styled from 'styled-components';
import useClickEffect from '../../utils/hooks/useClickEffect';
import theme from '../../styles/theme';

function InputCatBox({ value, placeholder, id, selectedCat, setSelectedCat }) {
  const isSelected = selectedCat.includes(id);
  const ref = useRef(null);

  const { handleBtnMD, handleBtnMU, handleBtnME, handleBtnML } =
    useClickEffect(ref);

  useEffect(() => {
    if (isSelected) {
      ref.current.style.border = `4px solid ${theme.colors.turquoisSecondaryColor}`;
    } else {
      ref.current.style.border = `none`;
    }
  }, [isSelected])
  const handleClick = () => {
    if (isSelected) {
      ref.current.style.border = `none`;
      const updatedSelectedCat = selectedCat.filter(item => item !== id);
      updatedSelectedCat.sort((a, b) => a - b);
      setSelectedCat([...updatedSelectedCat]);
    } else {
      const addSelectedCat = [...selectedCat, id].sort((a, b) => a - b);
      setSelectedCat(addSelectedCat);
      ref.current.style.border = `4px solid ${theme.colors.turquoisSecondaryColor}`;
    }
  };
  return (
    <Container
      value={value}
      placeholder={placeholder}
      ref={ref}
      onMouseDown={handleBtnMD}
      onMouseUp={handleBtnMU}
      onMouseEnter={handleBtnME}
      onMouseLeave={handleBtnML}
      onClick={handleClick}
    >
      <InputBox value={value} placeholder={placeholder} readOnly={true} isSelected={isSelected}/>
    </Container>
  );
}
const Container = styled.div`
  transition: 0.1s;
`;
export default InputCatBox;
