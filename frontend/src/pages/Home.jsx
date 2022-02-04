import React from 'react';
import styles from './styles.module.css';

import Arduino from '../static/Arduino.jpg';
import RPie from '../static/RPie.jpg';
import IoT from '../static/IoT.jpg';

import { Container, HeroSectionContainer } from '../components';

export const Home = () => {
  const cards = [
    { title: 'Arduino', img: Arduino },
    { title: 'Raspberry Pi', img: RPie },
    { title: 'IoT', img: IoT },
  ];
  return (
    <Container>
      <HeroSectionContainer>
        <div className='xl:w-8/12 lg:w-full md:w-4/5 w-full lg:mb-20 md:mb-14 md:mt-32 mt-20 mb-10 relative'>
          <div className='z-40 relative'>
            <h1 className='lg:text-7xl md:text-5xl text-4xl font-black text-center bg-clip-text text-transparent bg-gradient-to-br from-slate-900 to-cyan-900 dark:from-white dark:to-cyan-300  pb-2.5 lg:mb-7 md:mb-5 mb-2'>
              Offering world class services to our clients
            </h1>
            <h4 className='text-slate-600 font-medium lg:text-2xl text-xl text-center'>
              Providing customized solutions in Electronics, Automation,
              Robotics, etc. We In-House state of the art technology for
              providing efficient solution to our clients.
            </h4>
          </div>
          <svg
            id={styles.moveUpDown}
            className='absolute md:-top-20 -top-7 lg:h-64 md:h-48 h-32 z-10'
            // width='258'
            // height='293'
            viewBox='0 0 258 293'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M241.002 231.889C216.669 296.556 175.835 309.889 118.502 271.889C61.1686 233.889 23.5019 181.889 5.50189 115.889C-12.4981 49.8892 13.6685 12.0559 84.0019 2.3892C154.335 -7.27746 204.169 12.3892 233.502 61.3892C262.835 110.389 265.335 167.223 241.002 231.889Z'
              fill='#DCFCE7'
            />
          </svg>
          <svg
            id={styles.moveUpDown100}
            className='absolute bottom-0 md:right-12 right-3 lg:h-36 md:h-20 h-14 z-10'
            // width='193'
            // height='143'
            viewBox='0 0 193 143'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M161.5 121.781C119.833 149.74 77 149.74 33 121.781C-11 93.8225 -11 62.1003 33 26.6144C77 -8.87147 119.833 -8.87147 161.5 26.6144C203.167 62.1003 203.167 93.8225 161.5 121.781Z'
              fill='#F3E8FF'
            />
          </svg>
        </div>
        <div className='bg-slate-200 h-px xl:w-8/12 lg:w-full md:w-4/5 w-full'></div>
        <section class='text-gray-400 text-base'>
          <div class='container lg:px-5 px-2.5 lg:py-24 py-12 mx-auto'>
            <div class='flex flex-wrap -m-4 md:justify-center'>
              {cards.map(card => (
                <div class='lg:w-1/3 w-full lg:mb-0 mb-6 p-4'>
                  <div class='h-full text-center flex flex-col items-center'>
                    <img
                      src={card.img}
                      height='200'
                      width='400'
                      className='rounded-xl object-cover h-[200px] w-[400px] hover:-translate-y-3 hover:translate-x-2 transition-transform duration-150 ease-linear hover:shadow-lg'
                      alt={card.title}
                    />
                    <span class='inline-block h-1 w-10 rounded bg-indigo-500 lg:mt-6 mt-3 lg:mb-4 mb-2'></span>
                    <h2 class='font-bold text-slate-700 tracking-wider text-base'>
                      {card.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </HeroSectionContainer>
    </Container>
  );
};
