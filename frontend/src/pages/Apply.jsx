import React from 'react';

import { Container } from '../components';
import internshipPoster from '../static/internship_poster.png';

export const Apply = () => {
  return (
    <Container>
      <img
        src={internshipPoster}
        alt='poster'
        className='w-1/4 m-auto shadow-lg shadow-pink-300 mt-4'
      />
      <a
        href='https://forms.gle/1fFKhiPpFH452hvNA'
        target='_blank'
        rel='noreferrer'
        className='flex justify-center mt-4 w-1/4 m-auto'>
        <button className='bg-blue-600 text-white lg:px-9 px-4 lg:py-2 py-1 rounded-full w-full hover:shadow-lg hover:shadow-blue-300 transition-shadow duration-150 ease-in-out'>
          <span className='font-medium lg:text-lg text-sm m-auto'>
            I am intrested !
          </span>
        </button>
      </a>
    </Container>
  );
};
