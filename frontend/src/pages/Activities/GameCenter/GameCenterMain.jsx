import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GameCenter, Game } from '.';

export const GameCenterMain = () => {
  return (
    <Routes>
      <Route path='/' element={<GameCenter />} />
      <Route path='/game/:gameName' element={<Game />} />
    </Routes>
  );
};
