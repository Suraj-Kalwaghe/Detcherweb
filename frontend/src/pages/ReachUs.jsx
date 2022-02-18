import React, { useState } from 'react';
// import axios from 'axios';

// import { useDatabase } from '../hooks';
import { Container } from '../components';

export const ReachUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formMessage, setFormMessage] = useState('');

  // const { handleDB } = useDatabase();

  // async function handleFormSubmit(data) {
  //   if (handleDB('post', { name: name, email: email, message: message }))
  //     setFormMessage('Form Submitted Successfully');
  //   else setFormMessage(`Error Occured`);
  // }

  const handleForm = e => {
    e.preventDefault();
    // handleFormSubmit({ name: name, email: email, message: message });
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
    <Container>
      <div className='grid lg:grid-cols-3 grid-cols-none lg:grid-rows-none grid-rows-2 lg:space-x-5 lg:space-y-0 md:space-y-20 space-y-40 xl:my-12 lg:my-24 my-4 lg:mb-0 mb-14'>
        <div className='col-span-2 border border-slate-200 dark:border-slate-800 rounded-2xl relative'>
          <iframe
            className='h-full w-full rounded-2xl'
            title='map'
            frameborder='0'
            marginheight='0'
            marginwidth='0'
            scrolling='no'
            style={customFilter}
            src='https://maps.google.com/maps?q=SKNCOE,Pune&t=&z=13&ie=UTF8&iwloc=&output=embed'></iframe>
          <div className='bg-white dark:bg-slate-900 relative flex flex-wrap lg:py-5 py-2.5 lg:px-7 md:px-5 px-3 shadow-xl lg:-top-40 -top-32 md:w-5/6 w-11/12 m-auto border border-slate-200 dark:border-slate-800 rounded-2xl'>
            <div className='md:grid md:grid-cols-2 w-full md:space-x-5'>
              <div className='lg:text-lg text-base md:mb-0 mb-4'>
                <h4 className='text-slate-500 dark:text-slate-200 font-bold uppercase'>
                  Address
                </h4>
                <p className='text-slate-700 dark:text-slate-100 font-medium'>
                  Programming Lab, Smt Kashibai navale College of Engineering,
                  Pune
                </p>
              </div>
              <div className='md:grid md:grid-rows-2 md:space-y-5'>
                <div className='lg:text-lg text-base md:mb-0 mb-4'>
                  <h4 className='text-slate-500 dark:text-slate-200 font-bold uppercase'>
                    Email
                  </h4>
                  <a
                    rel='noreferrer'
                    href='https://detcher.com'
                    target='_blank'
                    className='text-indigo-500 font-medium underline'>
                    support@detcher.com
                  </a>
                </div>
                <div className='lg:text-lg text-base'>
                  <h4 className='text-slate-500 dark:text-slate-200 font-bold uppercase'>
                    Phone
                  </h4>
                  <p className='text-slate-700 dark:text-slate-100 font-medium'>
                    9561247091
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:col-span-1 col-span-2 border border-slate-200 dark:border-slate-800 rounded-2xl md:px-7 px-4 md:py-5 py-3 w-full'>
          <div className='flex flex-col md:ml-auto w-full'>
            <h2 className='text-slate-700 dark:text-slate-100 text-xl mb-1 font-bold'>
              Feedback
            </h2>
            <p className='text-lg font-medium mb-5 text-slate-500 dark:text-slate-200'>
              Your suggestions are always welcomed
            </p>
            <div className='flex flex-col justify-evenly space-y-5'>
              <p className='font-semibold dark:text-white'>{formMessage}</p>
              <div className='relative'>
                <label
                  for='name'
                  className='mb-1 text-base font-medium text-slate-400'>
                  Name
                </label>
                <input
                  onChange={e => setName(e.target.value)}
                  value={name}
                  type='text'
                  id='name'
                  name='name'
                  className='w-full rounded-md text-lg border dark:bg-slate-800 border-slate-200 dark:border-slate-800 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-300 outline-none text-slate-700 dark:text-slate-100 font-medium py-1.5 px-2.5 transition-colors duration-200 ease-in-out'
                  required
                />
              </div>
              <div className='relative'>
                <label
                  for='email'
                  className='mb-1 text-base font-medium text-slate-400'>
                  Email
                </label>
                <input
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  type='email'
                  id='email'
                  name='email'
                  className='w-full rounded-md text-lg border dark:bg-slate-800 border-slate-200 dark:border-slate-800 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-300 outline-none text-slate-700 dark:text-slate-100 font-medium py-1.5 px-2.5 transition-colors duration-200 ease-in-out'
                  required
                />
              </div>
              <div className='relative'>
                <label
                  for='message'
                  className='mb-1 text-base font-medium text-slate-400'>
                  Message
                </label>
                <textarea
                  onChange={e => setMessage(e.target.value)}
                  value={message}
                  id='message'
                  name='message'
                  className='w-full rounded-md text-lg border dark:bg-slate-800 border-slate-200 dark:border-slate-800 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-300 h-32 outline-none text-slate-700 dark:text-slate-100 font-medium py-1.5 px-2.5 resize-none transition-colors duration-200 ease-in-out'
                  required></textarea>
              </div>
              <button
                onClick={handleForm}
                className='text-white bg-indigo-500 border-0 md:py-3.5 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded-md font-bold text-lg'>
                Submit
              </button>
            </div>
            <p className='text-xs text-gray-400 text-opacity-90 mt-3'></p>
          </div>
        </div>
      </div>
    </Container>
  );
};
