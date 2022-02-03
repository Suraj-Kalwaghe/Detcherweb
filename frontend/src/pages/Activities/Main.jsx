import React from 'react';

import './styles.css';
import { Container, Pong, CarGame } from '../../components';
import { Link, Navigate } from 'react-router-dom';

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
      <div className='grid lg:grid-rows-none lg:grid-cols-2 gap-5 min-h-screen mt-[5%]'>
        <div className='flex flex-col h-4/6'>
          <div className='rounded-3xl overflow-hidden h-full flex items-center justify-center bg-gray-100 hover:shadow-lg transition-shadow hover:transition-transform cursor-pointer duration-150 ease-in hover:-translate-y-2 hover:translate-x-2'>
            <Pong />
          </div>
          <h1 className='text-3xl font-bold text-slate-500 mt-5 w-full row-span-1 text-center'>
            Our Games
          </h1>
        </div>
        <div className='flex flex-col h-4/6'>
          <div className='rounded-3xl overflow-hidden h-full bg-gray-100 flex justify-center items-center hover:shadow-lg transition-all cursor-pointer duration-150 ease-in hover:-translate-y-2 hover:translate-x-2'>
            <Link to={'/activities/game-center'}>
              <CarGame />
            </Link>
          </div>
          <h1 className='text-3xl font-bold text-slate-500 mt-5 w-full row-span-1 text-center'>
            Games Center
          </h1>
        </div>
      </div>
    </Container>
  );
};
