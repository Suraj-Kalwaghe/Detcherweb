import React from 'react';

import './styles.css';
import { Container } from '../../components';

export const Main = () => {
  return (
    <Container>
      {/* <div className='flex flex-wrap'>
        <div className='border border-slate-300 rounded-lg flex xl:w-1/4 md:w-1/2 w-full h-1/3'>
          <img
            src='https://static.miniclipcdn.com/content/game-icons/small/shortride_70x59.jpg'
            alt='Games at Miniclip.com - Short Ride'
            className='w-2/5 rounded-l-lg'
          />
          <div className='my-2 mx-2'>
            <a
              href='https://www.miniclip.com/games/short-ride/en/'
              className='text-blue-700 underline font-bold text-lg'>
              Short Ride
            </a>
            <p className='font-medium text-slate-500 mt-1.5'>
              It's a Short Life! With so many dumb ways to die!
            </p>
          </div>
        </div>
      </div> */}
      <div className='Activitycontainer'>
        <div className='spinwheel'></div>
        <div className='Miniclip'></div>
      </div>
    </Container>
  );
};
