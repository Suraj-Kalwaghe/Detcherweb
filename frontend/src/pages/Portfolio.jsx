import React from 'react';
import styles from './styles.module.css';
import { Container, HeroSectionContainer } from '../components';

export const Portfolio = () => {
  return (
    <>
      <section className='max-h-screen'>
        <Container>
          <HeroSectionContainer>
            <div className='w-8/12 mb-20 mt-32 relative'>
              <h1 className='text-center bg-clip-text text-transparent bg-gradient-to-br from-slate-900 to-indigo-900 pb-2.5 mb-7'>
                Developing the best <br /> for our users
              </h1>
              <h4 className='text-slate-600 font-medium text-2xl text-center'>
                Some big subtitle describing what the company is about or a
                motto.
                <br />
                This could be a long one to take up some positive space in the
                sub header.
              </h4>
            </div>
            <button className='mt-36 animate-bounce'>
              <svg
                className='h-10'
                // width='40'
                // height='40'
                viewBox='0 0 40 40'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M28.0485 20.3515C28.5172 20.8201 28.5172 21.5799 28.0485 22.0485L20.8485 29.2485C20.3799 29.7172 19.6201 29.7172 19.1515 29.2485L11.9515 22.0485C11.4828 21.5799 11.4828 20.8201 11.9515 20.3515C12.4201 19.8828 13.1799 19.8828 13.6485 20.3515L18.8 25.5029L18.8 11.6C18.8 10.9373 19.3373 10.4 20 10.4C20.6627 10.4 21.2 10.9373 21.2 11.6L21.2 25.5029L26.3515 20.3515C26.8201 19.8828 27.5799 19.8828 28.0485 20.3515Z'
                  fill='#2563EB'
                />
                <rect
                  x='1'
                  y='1'
                  width='38'
                  height='38'
                  rx='19'
                  stroke='#93C5FD'
                  stroke-width='2'
                />
              </svg>
            </button>
          </HeroSectionContainer>
        </Container>
        <svg
          id={styles.mysvg}
          className='w-full'
          // width='1920'
          // height='256'
          viewBox='0 0 1920 256'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M0 96L160 112C320 128 640 160 960 144C1280 128 1600 64 1760 32L1920 0V256H1760C1600 256 1280 256 960 256C640 256 320 256 160 256H0V96Z'
            fill='url(#paint0_linear_714_1107)'
          />
          <defs>
            <linearGradient
              id='paint0_linear_714_1107'
              x1='960'
              y1='0'
              x2='960'
              y2='256'
              gradientUnits='userSpaceOnUse'>
              <stop stop-color='#5EEAD4' />
              <stop offset='1' stop-color='white' stop-opacity='0.3' />
            </linearGradient>
          </defs>
        </svg>
      </section>
    </>
  );
};
