import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Characters from '../components/Characters';
import Character from '../components/Character';
import Houses from '../components/Houses';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/character/:id" element={<Character />} />
      <Route path="/houses" element={<Houses />} />
    </Routes>
  );
};

const RoutesContainer = () => {
  return <AppRoutes />;
};

export default RoutesContainer;
