import React from 'react';

import './styles.css';
import { Container, Pong, CarGame } from '../../components';
import { Link } from 'react-router-dom';

export const Main = () => {
  return (
    <Container>
      <div className='grid lg:grid-rows-none lg:grid-cols-2 gap-5 md:min-h-screen mt-[5%]'>
        <div className='flex flex-col lg:h-4/6 h-96 w-full'>
          <div className='rounded-3xl overflow-hidden h-full flex items-center justify-center bg-gray-100 cursor-pointer hover:-translate-y-3 hover:translate-x-2 transition-transform duration-150 ease-linear hover:shadow-lg'>
            <Pong />
          </div>
          <h1 className='xl:text-3xl md:text-xl text-lg font-bold text-slate-500 mt-5 w-full row-span-1 text-center'>
            Our Games
          </h1>
        </div>
        <div className='flex flex-col lg:h-4/6 h-96 w-full'>
          <div className='rounded-3xl overflow-hidden h-full bg-gray-100 flex justify-center items-center cursor-pointer hover:-translate-y-3 hover:translate-x-2 transition-transform duration-150 ease-linear hover:shadow-lg'>
            <Link to={'/activities/game-center'} className='w-full h-full'>
              <CarGame />
            </Link>
          </div>
          <h1 className='xl:text-3xl md:text-xl text-lg font-bold text-slate-500 mt-5 w-full row-span-1 text-center'>
            Games Center
          </h1>
        </div>
      </div>
    </Container>
  );
};
