import React from 'react';
import './style.css';

export const FooterPagePro = () => {
  return (
    <div className='w-screen flex flex-col items-center justify-center'>
      <div className='footer w-full flex items-center justify-evenly'>
        <h1 className='text-3xl '>
          <b>Detcher.com</b>
        </h1>
        <div className='Child'>
          <h4>
            <b>Company</b>
          </h4>
          <ul>
            <li>About Us</li>
            <li>Reach Us</li>
            <li>Carrer</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='Child'>
          <h4>
            <b>Company</b>
          </h4>
          <ul>
            <li>About Us</li>
            <li>Reach Us</li>
            <li>Carrer</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='Child'>
          <h4>
            <b>Company</b>
          </h4>
          <ul>
            <li>About Us</li>
            <li>Reach Us</li>
            <li>Carrer</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='Child'>
          <h4>
            <b>Subscribe</b>
          </h4>
          <ul>
            <li>Hop on for latest update:</li>
            <li id='ip'>
              <input type='text' placeholder='Enter ur email.....' />
            </li>
            <li id='button' className='transition-all duration-200 delay-100'>
              <button>
                <b> Submit</b>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className='Bottom w-full'>
        <p>
          <b>&copy;2022 Detcher</b>
        </p>
      </div>
    </div>
  );
};
