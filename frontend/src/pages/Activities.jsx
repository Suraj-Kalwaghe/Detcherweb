import React, { useState } from 'react';
import axios from 'axios';

export const Activities = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formMessage, setFormMessage] = useState('');

  async function handleFormSubmit(data) {
    const response = await axios.post('/api/v1', data);
    if (response.statusText === 'OK')
      setFormMessage('Form Submitted Successfully');
    else setFormMessage(`Error Occured ${response.status}`);
  }

  const handleForm = e => {
    e.preventDefault();
    handleFormSubmit({ name: name, email: email, message: message });
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => {
      setFormMessage('');
    }, 10000);
  };

  const customFilter = {
    filter: 'grayscale(100%) contrast(120%) opacity(16%)',
  };

  return (
    <div>
      <header className='text-gray-400 bg-gray-900 body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <a
            href='#'
            className='flex title-font font-medium items-center text-white mb-4 md:mb-0'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
              viewBox='0 0 24 24'>
              <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
            </svg>
            <span className='ml-3 text-xl'>Detcher</span>
          </a>
          <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
            <a href='index2.html' className='mr-5 hover:text-white'>
              Home
            </a>
            <a href='' className='mr-5 hover:text-white'>
              About Us
            </a>
            <a href='' className='mr-5 hover:text-white'>
              Portfolio
            </a>
            <a href='Reach Us.html' className='mr-5 hover:text-white'>
              Reach Us
            </a>
          </nav>
          <button
            onclick="window.location.href= 'https://forms.gle/YBVjN9Fj6Gj9Q6vA9'"
            className='inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0'>
            Fly
            <svg
              fill='none'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              className='w-4 h-4 ml-1'
              viewBox='0 0 24 24'>
              <path d='M5 12h14M12 5l7 7-7 7'></path>
            </svg>
          </button>
        </div>
      </header>
      <section className='text-gray-400 bg-gray-900 body-font relative'>
        <div className='container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap'>
          <div className='lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
            <iframe
              width='100%'
              height='100%'
              title='map'
              className='absolute inset-0'
              frameborder='0'
              marginheight='0'
              marginwidth='0'
              scrolling='no'
              src='https://maps.google.com/maps?q=SKNCOE,Pune&t=&z=13&ie=UTF8&iwloc=&output=embed'
              style={customFilter}></iframe>
            <div className='bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md'>
              <div className='lg:w-1/2 px-6'>
                <h2 className='title-font font-semibold text-white tracking-widest text-xs'>
                  ADDRESS
                </h2>
                <p className='mt-1'>
                  Programming Lab, Smt Kashibai navale College of Engineering,
                  Pune
                </p>
              </div>
              <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
                <h2 className='title-font font-semibold text-white tracking-widest text-xs'>
                  EMAIL
                </h2>
                <a href='#' className='text-purple-400 leading-relaxed'>
                  support@detcher.com
                </a>
                <h2 className='title-font font-semibold text-white tracking-widest text-xs mt-4'>
                  PHONE
                </h2>
                <p className='leading-relaxed'>9561247091</p>
              </div>
            </div>
          </div>
          <div className='lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'>
            <h2 className='text-white text-lg mb-1 font-medium title-font'>
              Feedback
            </h2>
            <p className='leading-relaxed mb-5'>
              Your suggestions are always welcomed
            </p>
            <p className='font-semibold text-white'>{formMessage}</p>
            <div className='relative mb-4'>
              <label for='name' className='leading-7 text-sm text-gray-400'>
                Name
              </label>
              <input
                onChange={e => setName(e.target.value)}
                value={name}
                type='text'
                id='name'
                name='name'
                className='w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                required
              />
            </div>
            <div className='relative mb-4'>
              <label for='email' className='leading-7 text-sm text-gray-400'>
                Email
              </label>
              <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type='email'
                id='email'
                name='email'
                className='w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                required
              />
            </div>
            <div className='relative mb-4'>
              <label for='message' className='leading-7 text-sm text-gray-400'>
                Message
              </label>
              <textarea
                onChange={e => setMessage(e.target.value)}
                value={message}
                id='message'
                name='message'
                className='w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                required></textarea>
            </div>
            <button
              onClick={handleForm}
              className='text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg'>
              Submit
            </button>
            <p className='text-xs text-gray-400 text-opacity-90 mt-3'></p>
          </div>
        </div>
      </section>
      <footer className='text-gray-400 bg-gray-900 body-font'>
        <div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
          <a
            href='#'
            className='flex title-font font-medium items-center md:justify-start justify-center text-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              className='w-10 h-10 text-white p-2 bg-purple-500 rounded-full'
              viewBox='0 0 24 24'>
              <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
            </svg>
            <span className='ml-3 text-xl'>Detcher</span>
          </a>
          <p className='text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4'>
            © 2022 DTC
            <a
              href='https://twitter.com/knyttneve'
              className='text-gray-500 ml-1'
              target='_blank'
              rel='noopener noreferrer'>
              Subhanshu Bansal
            </a>
          </p>
          <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
            <a href='#' className='text-gray-400'>
              <svg
                fill='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                className='w-5 h-5'
                viewBox='0 0 24 24'>
                <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
              </svg>
            </a>
            <a href='#' className='ml-3 text-gray-400'>
              <svg
                fill='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                className='w-5 h-5'
                viewBox='0 0 24 24'>
                <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
              </svg>
            </a>
            <a href='#' className='ml-3 text-gray-400'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                className='w-5 h-5'
                viewBox='0 0 24 24'>
                <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
                <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
              </svg>
            </a>
            <a href='#' className='ml-3 text-gray-400'>
              <svg
                fill='currentColor'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='0'
                className='w-5 h-5'
                viewBox='0 0 24 24'>
                <path
                  stroke='none'
                  d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'></path>
                <circle cx='4' cy='4' r='2' stroke='none'></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};
