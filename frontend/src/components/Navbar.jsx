import React from 'react';
import { NavLink } from 'react-router-dom';

// import detcherLogo from '../static/detcherLogo.png';

export const Navbar = ({ isOpen, toggle, darkModeToggler }) => {
  const [isMobile, setIsMobile] = React.useState(
    window.innerWidth < 1024 ? true : false
  );
  const navItems = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Portfolio',
      link: '/portfolio',
    },
    {
      name: 'Activities',
      link: '/activities',
    },
    {
      name: 'About Us',
      link: '/about-us',
    },
    {
      name: 'Reach Us',
      link: '/reach-us',
    },
  ];

  React.useEffect(() => {
    if (window.innerWidth < 1024) setIsMobile(true);
    else setIsMobile(false);
  }, [isMobile]);

  return (
    <nav
      className={
        'container max-h-screen lg:flex lg:justify-between lg:bg-transparent dark:lg:bg-transparent bg-white dark:bg-slate-900 items-center lg:h-20 h-16 lg:px-5 px-2.5 lg:py-4 py-2 font-medium text-lg z-50'
      }>
      <div className='flex justify-between'>
        <a
          href='/'
          className='font-bebasNeue text-slate-900 dark:text-slate-100 lg:mr-10'>
          {/* <img src={detcherLogo} alt='companyLogo' className='h-10 lg:mr-10' /> */}
          <span className='lg:text-3xl text-xl'>DTC</span>
        </a>
        <button
          onClick={toggle}
          className='lg:hidden rounded-lg focus:outline-none focus:shadow-outline dark:text-white'>
          <svg fill='currentColor' viewBox='0 0 20 20' className='w-6 h-6'>
            <path
              fill-rule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
              clip-rule='evenodd'
              className={isOpen ? 'hidden' : 'w-6 h-6'}></path>
            <path
              fill-rule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clip-rule='evenodd'
              className={isOpen ? 'w-6 h-6' : 'hidden'}></path>
          </svg>
        </button>
      </div>
      <div
        className={
          isOpen
            ? 'flex lg:flex-row flex-col lg:justify-between justify-evenly flex-1 bg-inherit'
            : 'hidden'
        }>
        <div className='flex lg:flex-row flex-col space-x-8 lg:items-center'>
          <div
            className={
              isOpen
                ? 'flex lg:flex-row flex-col lg:space-x-8 lg:items-center lg:ml-0 ml-2'
                : 'hidden'
            }>
            {navItems.map(navLink => (
              <NavLink
                onClick={isMobile ? toggle : null}
                to={navLink.link}
                className={({ isActive }) =>
                  isActive
                    ? 'border-b-2 border-indigo-500 text-slate-900 dark:text-white lg:mb-0 mb-2 flex items-center'
                    : 'text-slate-500 dark:text-slate-400 flex lg:mb-0.5 mb-2 items-center'
                }>
                {navLink.name}
              </NavLink>
            ))}
          </div>
        </div>
        <div
          className={
            isOpen
              ? 'flex lg:space-x-8 justify-between items-center lg:my-0 my-4'
              : 'hidden'
          }>
          <div>
            <button
              onClick={darkModeToggler}
              className='text-slate-900 dark:text-white'>
              <svg
                width='30'
                height='30'
                viewBox='0 0 30 30'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M15 3.75V5M15 25V26.25M26.25 15H25M5 15H3.75M22.955 22.955L22.0711 22.0711M7.92893 7.92893L7.04505 7.04505M22.955 7.04512L22.0711 7.929M7.929 22.0711L7.04511 22.955M20 15C20 17.7614 17.7614 20 15 20C12.2386 20 10 17.7614 10 15C10 12.2386 12.2386 10 15 10C17.7614 10 20 12.2386 20 15Z'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </button>
          </div>
          <NavLink
            onClick={isMobile ? toggle : null}
            className={({ isActive }) =>
              isActive
                ? 'shadow-lg shadow-blue-300 dark:shadow-blue-600/80 bg-blue-700 text-white lg:px-9 px-4 lg:py-2 py-1 rounded-full hover:shadow-blue-300 transition-shadow duration-150 ease-in-out'
                : 'bg-blue-600 text-white lg:px-9 px-4 lg:py-2 py-1 rounded-full hover:shadow-md hover:shadow-blue-300 dark:hover:shadow-blue-600/50 transition-shadow duration-150 ease-in-out'
            }
            to='/apply'>
            <span className='font-medium lg:text-lg text-sm m-auto'>Apply</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
