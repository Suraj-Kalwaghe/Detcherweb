import React from 'react';
import './styles.css';

export const Cogs = ({ title }) => {
  return (
    <div className='gearbox opacity-70'>
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
