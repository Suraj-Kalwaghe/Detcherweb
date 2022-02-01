import React from 'react';
import {
  Container,
  HeroSectionContainer,
  Waves,
  RunAwayButton,
  Cogs,
} from '../components';

export const Portfolio = () => {
  return (
    <>
      <section className=''>
        <Container>
          <div className='min-h-screen'>
            <HeroSectionContainer>
              <div className='xl:w-8/12 lg:w-full md:w-4/5 w-full lg:mb-20 md:mb-14 md:mt-32 mt-20 mb-10 relative'>
                <h1 className='lg:text-7xl md:text-5xl text-4xl font-black text-center bg-clip-text text-transparent bg-gradient-to-br from-slate-900 to-indigo-900 pb-2.5 lg:mb-7 md:mb-5 mb-2'>
                  Developing the best for our users
                </h1>
                <h4 className='text-slate-600 font-medium lg:text-2xl text-xl text-center'>
                  Some big subtitle describing what the company is about or a
                  motto. This could be a long one to take up some positive space
                  in the sub header.
                </h4>
              </div>
              <button className='lg:mt-20 md:mt-16 mt-12 animate-bounce'>
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
          </div>
          <Waves />
        </Container>
        <Container>
          <div className='h-screen bg-transparent'>
            <div className='h-20 mb-10'>
              <RunAwayButton text={'Our Services'} />
            </div>
            <div className='grid grid-cols-2 gap-5 h-3/5'>
              <div className='border border-slate-700 rounded-xl overflow-hidden'>
                <Cogs />
              </div>
              <div className='border border-slate-700 rounded-xl'></div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
