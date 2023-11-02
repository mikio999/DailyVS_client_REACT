import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

const Search = () => {
  const [loading, setLoading] = useState(true);
  const [searchData, setSearchData] = useState([]);
  const location = useLocation();
  const value = new URLSearchParams(location.search).get('keyword');
  console.log(value);
  useEffect(() => {
    fetch(`http://localhost:8000/search?keyword=${value}`, {
      method: 'GET',
      credentials: 'include',
    })
      .then(response => response.json())
      .then(result => {
        setSearchData(result);
        setLoading(false);
      });
  }, [value]);
  console.log(searchData);

  if (loading) return;
  return (
    <Container>
      <SearchTitle>검색 목록</SearchTitle>
      {searchData.map(item => (
        <SearchContent key={item.id}>
          <h2>{item.title}</h2>
        </SearchContent>
      ))}
    </Container>
  );
};
export default Search;

const Container = styled.div``;

const SearchTitle = styled.h1`
  font-family: 'GongGothicLight';
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 1rem;
  font-size: 24px;
  color: #17355a;
`;

const SearchContent = styled.div``;
