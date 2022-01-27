import React from 'react';
import { NavLink } from 'react-router-dom';
import detcherLogo from '../static/detcherLogo.png';

export const Navbar = () => {
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

  return (
    <nav className='container flex items-center h-20 px-5 py-4 font-medium text-lg justify-between'>
      <div className='flex space-x-8 items-center'>
        <img src={detcherLogo} alt='companyLogo' className='h-10 mb-3' />
        {navItems.map(navLink => (
          <NavLink
            to={navLink.link}
            className={({ isActive }) =>
              isActive
                ? 'border-b-2 border-indigo-500 text-slate-900 flex items-center'
                : 'text-slate-500 mb-0.5 flex items-center'
            }>
            {navLink.name}
          </NavLink>
        ))}
      </div>
      <div className='flex space-x-8 items-center'>
        <div>
          <svg
            width='30'
            height='30'
            viewBox='0 0 30 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M15 3.75V5M15 25V26.25M26.25 15H25M5 15H3.75M22.955 22.955L22.0711 22.0711M7.92893 7.92893L7.04505 7.04505M22.955 7.04512L22.0711 7.929M7.929 22.0711L7.04511 22.955M20 15C20 17.7614 17.7614 20 15 20C12.2386 20 10 17.7614 10 15C10 12.2386 12.2386 10 15 10C17.7614 10 20 12.2386 20 15Z'
              stroke='#111827'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </div>
        <a
          href='https://forms.gle/1fFKhiPpFH452hvNA'
          target={'_blank'}
          rel='noreferrer'>
          <button className='bg-blue-600 text-white px-9 py-2 rounded-full'>
            <span className='font-medium'>Apply</span>
          </button>
        </a>
      </div>
    </nav>
  );
};
