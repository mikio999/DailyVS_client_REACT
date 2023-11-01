import React from 'react';
import styled from 'styled-components';
import SearchIcon from '../Atoms/SearchIcon';

const SearchBox = () => {
  return (
    <Container>
      <SearchIcon />
      <SearchInput />
    </Container>
  );
};
export default SearchBox;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  border-radius: 30px;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
  width: 15rem;
  height: 2.5rem;
`;

const SearchInput = styled.input`
  margin-left: 0.2rem;
  height: 2rem;
  width: 12rem;
  border: none;
`;
