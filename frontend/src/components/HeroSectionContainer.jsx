import React from 'react';

export const HeroSectionContainer = ({ children }) => {
  return (
    <div className='flex flex-col items-center font-black text-7xl'>
      {children}
    </div>
  );
};
