import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { GameCenterMain, SubhanshuActivities, Main } from '.';

export const Activities = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/game-center/*' element={<GameCenterMain />} />
        <Route path='/subhanshu-activities' element={<SubhanshuActivities />} />
      </Routes>
    </>
  );
};
