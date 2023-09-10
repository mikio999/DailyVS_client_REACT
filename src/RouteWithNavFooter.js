import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Fortune from './pages/Fortune/Fortune';
import VoteDetail from './pages/Detail/Detail';
import VoteResult from './pages/Result/Result';

const RouteWithNavFooter = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/vote-detail/:id" element={<VoteDetail />} />
        <Route path="/vote-result/:id" element={<VoteResult />} />
        <Route path="/fortune" element={<Fortune />} />
      </Routes>
      <Footer />
    </>
  );
};

export default RouteWithNavFooter;
