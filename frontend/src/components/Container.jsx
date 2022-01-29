import React from 'react';

export const Container = ({ children }) => {
  return (
    <div className='flex flex-col items-center flex-1'>
      <div className='lg:px-5 px-2.5 container'>{children}</div>
    </div>
  );
};
