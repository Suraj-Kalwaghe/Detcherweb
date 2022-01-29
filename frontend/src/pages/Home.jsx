import React from 'react';
import styles from './styles.module.css';

import suraj from '../static/suraj.jpeg';
import yash from '../static/yash.jpeg';
import subhanshu from '../static/subhanshu.jpeg';
import { Container, HeroSectionContainer } from '../components';

export const Home = () => {
  const profileCardData = [
    {
      name: 'Suraj Kalwaghe',
      quote: 'Figuring out ways to provide value to the society.',
      profilePic: (
        <img
          src={suraj}
          alt='profilePic'
          class='lg:w-20 w-14 lg:h-20 h-14 lg:mb-8 mb-4 object-cover object-center rounded-full inline-block border-2 bg-opacity-10'
          id='Sooraj'
        />
      ),
      title: 'Founder',
    },
    {
      name: 'Subhanshu Bansal',
      quote: "Web Development isn't difficult. You just need to stay curious",
      profilePic: (
        <img
          src={subhanshu}
          alt='profilePic'
          class='lg:w-20 w-14 lg:h-20 h-14 lg:mb-8 mb-4 object-cover object-center rounded-full inline-block border-2 bg-opacity-1'
          id='Subhanshu'
        />
      ),
      title: 'WebDev Head',
    },
    {
      name: 'Yash Markad',
      quote:
        'Electronics, Micro-controller, Artificial Intelligence, GAN, Automation, Robotics, Block-Chain',
      profilePic: (
        <img
          src={yash}
          alt='profilePic'
          class='lg:w-20 w-14 lg:h-20 h-14 lg:mb-8 mb-4 object-cover object-center rounded-full inline-block border-2 bg-opacity-1'
          id='yash'
        />
      ),
      title: 'Co-Founder, CTO',
    },
  ];

  return (
    <Container>
      <HeroSectionContainer>
        <div className='xl:w-8/12 lg:w-full md:w-4/5 w-full lg:mb-20 md:mb-14 md:mt-32 mt-20 mb-10 relative'>
          <div className='z-40 relative'>
            <h1 className='lg:text-7xl md:text-5xl text-4xl font-black text-center bg-clip-text text-transparent bg-gradient-to-br from-slate-900 to-cyan-900 pb-2.5 lg:mb-7 md:mb-5 mb-2'>
              Short motto of company lorem ipsum something
            </h1>
            <h4 className='text-slate-600 font-medium lg:text-2xl text-xl text-center'>
              Some big subtitle describing what the company is about or a motto.
              This could be a long one to take up some positive space in the sub
              header.
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
              {profileCardData.map(profile => (
                <div class='lg:w-1/3 lg:mb-0 mb-6 p-4'>
                  <div class='h-full text-center'>
                    {profile.profilePic}
                    <p class='leading-relaxed'>{profile.quote}</p>
                    <span class='inline-block h-1 w-10 rounded bg-indigo-500 lg:mt-6 mt-3 lg:mb-4 mb-2'></span>
                    <h2 class='font-medium title-font tracking-wider text-sm'>
                      {profile.name}
                    </h2>
                    <p class='text-gray-500'>{profile.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
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
    </Container>
  );
};
