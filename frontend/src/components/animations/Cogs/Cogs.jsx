import React from 'react';
import './styles.css';

export const Cogs = ({ title }) => {
  return (
    <div className='gearbox opacity-70 xl:left-[30%] md:left-[30%] lg:top-[30%] left-[20%] top-[20%]'>
      <div className='gear one'>
        <div className='gear-inner'>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
      </div>
      <div className='gear two'>
        <div className='gear-inner'>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
      </div>
      <div className='gear three'>
        <div className='gear-inner'>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
      </div>
      <div className='gear four large'>
        <div className='gear-inner'>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
      </div>
    </div>
  );
};
