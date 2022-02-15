import React from 'react';
import { Link } from 'react-router-dom';

import footerGif from '../static/footerVideo.gif';
import { Container } from '.';
import './style.css';

export const FooterPagePro = () => {
  return (
    <div className='bg-white dark:bg-slate-800 z-50'>
      <div className='border-t dark:border-slate-800 px-4 py-5 mt-10'>
        <Container>
          <div className='footer w-full lg:grid grid-cols-6 gap-x-10'>
            <img
              src={footerGif}
              className='lg:w-3/5 w-1/4 shadow-lg rounded-xl m-auto lg:ml-auto ml-0 col-span-2 lg:flex hidden'
              height={100}
              width={200}
            />
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-x-4 gap-y-5 flex-1 col-span-4'>
              <div className='flex flex-col gap-5'>
                <h4 className='font-bold text-lg text-slate-700 dark:text-slate-200'>
                  Company
                </h4>
                <ul className='flex flex-col gap-1 font-medium text-slate-500 dark:text-slate-400 text-md'>
                  <li>
                    <Link to='/about-us'>About Us</Link>
                  </li>
                  <Link to='/reach-us'>Reach Us</Link>
                  <li>Career</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div className='flex flex-col gap-5'>
                <h4 className='font-bold text-lg text-slate-700 dark:text-slate-200'>
                  Overview
                </h4>
                <ul className='flex flex-col gap-1 font-medium text-slate-500 dark:text-slate-400 text-md'>
                  <Link to='/portfolio'>Portfolio</Link>
                  <li>Software</li>
                  <li>Automation</li>
                  <li>Sitemap</li>
                </ul>
              </div>
              <div className='flex flex-col gap-5'>
                <h4 className='font-bold text-lg text-slate-700 dark:text-slate-200'>
                  Contact info
                </h4>
                <ul className='flex flex-col gap-1 font-medium text-slate-500 dark:text-slate-400 text-md'>
                  <li>Address: SKNCOE, Pune</li>
                  <li>Phone: 9561247091</li>
                  <li>
                    Email:{' '}
                    <a
                      href='mailto:support@detcher.com'
                      className='underline text-blue-600'>
                      support@detcher.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className='flex flex-col'>
                <h4 className='font-bold text-lg text-slate-700 dark:text-slate-200'>
                  Subscribe
                </h4>
                <ul>
                  <li className='font-medium text-slate-500 dark:text-slate-400 text-md'>
                    Hop on for latest update:
                  </li>
                  <li>
                    <input
                      type='text'
                      placeholder='Enter email'
                      className='p-2 border border-slate-300 dark:border-slate-700 dark:bg-slate-900/50 rounded-lg mt-2 w-full'
                    />
                  </li>
                  <li
                    id='button'
                    className='transition-all duration-200 delay-100'>
                    <button className='rounded-lg bg-blue-600 w-full mt-2 p-2 font-bold text-white hover:bg-blue-700'>
                      Submit
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
