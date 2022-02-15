import React from 'react';

import { Container, ParticlesJS } from '../components';
import internshipPoster from '../static/internship_poster.png';

export const Apply = () => {
  return (
    <>
      <Container>
        <div className='xl:w-1/4 w-4/5 m-auto'>
          <img
            src={internshipPoster}
            alt='poster'
            className='m-auto shadow-2xl shadow-pink-300 dark:shadow-pink-500/50 mt-4 z-10'
          />
          <a
            href='https://forms.gle/1fFKhiPpFH452hvNA'
            target='_blank'
            rel='noreferrer'
            className='flex justify-center my-10 w-full m-auto'>
            <button className='bg-blue-600 text-white lg:px-9 px-4 lg:py-2 py-1 rounded-full w-full hover:shadow-lg hover:shadow-blue-300 dark:hover:shadow-blue-500/50 transition-shadow duration-150 ease-in-out z-50'>
              <span className='font-medium lg:text-lg text-sm m-auto'>
                I am intrested !
              </span>
            </button>
          </a>
        </div>
      </Container>
      <div className=''>
        <ParticlesJS />
      </div>
    </>
  );
};
