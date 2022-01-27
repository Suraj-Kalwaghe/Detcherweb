import React from 'react';

export const Container = ({ children }) => {
  return (
    <div className='flex flex-col items-center flex-1'>
      <div className='px-5 container'>{children}</div>
    </div>
  );
};
