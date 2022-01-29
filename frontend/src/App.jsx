import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Home, Portfolio, Activities, AboutUs, ReachUs } from './pages';
import { Navbar } from './components';

export default function App() {
  let initialNavState = false;

  if (window.innerWidth > 768) {
    initialNavState = true;
  }

  const [navIsOpen, setNavIsOpen] = React.useState(initialNavState);

  const toggle = () => {
    setNavIsOpen(!navIsOpen);
  };

  React.useEffect(() => {
    const hideNav = () => {
      if (window.innerWidth < 1024) {
        setNavIsOpen(false);
      } else setNavIsOpen(true);
    };

    window.addEventListener('resize', hideNav);
    return () => {
      window.removeEventListener('resize', hideNav);
    };
  }, []);

  return (
    <div className='min-h-screen bg-white text-gray-900 font-redHatDisplay'>
      <header className='flex flex-col items-center'>
        <Navbar toggle={toggle} isOpen={navIsOpen} />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/activities' element={<Activities />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/reach-us' element={<ReachUs />} />
      </Routes>
    </div>
  );
}
