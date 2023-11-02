import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SearchCard = ({ item }) => {
  const navigate = useNavigate();
  const onClickDetailButton = () => {
    navigate(`/vote-detail/${item.id}`);
  };

  return (
    <Container
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item?.thumbnail})`,
      }}
      onClick={onClickDetailButton}
    >
      <GridName>{item?.title}</GridName>
    </Container>
  );
};

export default SearchCard;

const Container = styled.div`
  display: flex;
  background-size: cover;
  background-position: center;
  width: 180px;
  height: 180px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const GridName = styled.div`
  display: flex;
  font-family: 'GongGothicLight';
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  font-size: 24px;
  color: white;
`;
