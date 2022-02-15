import React from 'react';
import {
  Container,
  HeroSectionContainer,
  Waves,
  RunAwayButton,
  Cogs,
  Desktop,
} from '../components';

export const Portfolio = () => {
  return (
    <>
      <section className='min-h-screen'>
        <Container>
          <div className='min-h-screen'>
            <HeroSectionContainer>
              <div className='xl:w-8/12 lg:w-full md:w-4/5 w-full lg:mb-20 md:mb-14 md:mt-32 mt-20 mb-10 relative'>
                <h1 className='lg:text-7xl md:text-5xl text-4xl font-black text-center bg-clip-text text-transparent bg-gradient-to-br from-slate-900 to-indigo-900 dark:from-slate-50 dark:to-indigo-300 pb-2.5 lg:mb-7 md:mb-5 mb-2'>
                  Developing the best for our users
                </h1>
                <h4 className='text-slate-600 dark:text-slate-400 font-medium lg:text-2xl text-xl text-center'>
                  We offer customized solutions to our clients based on their
                  industrial requirements.
                </h4>
              </div>
            </HeroSectionContainer>
            <Waves />
          </div>
        </Container>
        <Container>
          <div className='h-20 mb-10 w-full'>
            <RunAwayButton text={'Our Services'} />
          </div>
          <div className='grid lg:grid-rows-none lg:grid-cols-2 gap-5 md:min-h-screen h-full'>
            <div className='flex flex-col lg:h-4/6 h-96'>
              <div className='rounded-3xl overflow-hidden h-full bg-gray-100 dark:bg-opacity-5 cursor-pointer hover:-translate-y-3 hover:translate-x-2 transition-transform duration-150 ease-linear hover:shadow-lg'>
                <Cogs title='Robotics, IoT and Electronics' />
              </div>
              <h1 className='xl:text-3xl md:text-xl text-lg font-bold text-slate-500 dark:text-slate-200 mt-5 w-full row-span-1 text-center'>
                Robotics, IoT and Electronics
              </h1>
            </div>
            <div className='flex flex-col lg:h-4/6 h-96'>
              <div className='rounded-3xl overflow-hidden h-full bg-gray-100 dark:bg-opacity-5 flex justify-center items-center cursor-pointer hover:-translate-y-3 hover:translate-x-2 transition-transform duration-150 ease-linear hover:shadow-lg'>
                <Desktop />
              </div>
              <h1 className='xl:text-3xl md:text-xl text-lg font-bold text-slate-500 dark:text-slate-200 mt-5 w-full row-span-1 text-center'>
                Web Dev
              </h1>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
