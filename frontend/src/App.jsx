import React from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Navbar, FooterPagePro } from './components';
import { ThemeContext } from './providers/';
import {
  Home,
  Portfolio,
  Activities,
  AboutUs,
  ReachUs,
  Apply,
  Animations,
} from './pages';

export default function App() {
  const { themeToggle } = React.useContext(ThemeContext);

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
    <div className='min-h-screen flex flex-col bg-white text-gray-900 dark:bg-slate-900 dark:text-white font-redHatDisplay'>
      <Helmet>
        <title>Detcher Tech Co.</title>
      </Helmet>
      <header className='flex flex-col items-center'>
        <Navbar
          toggle={toggle}
          isOpen={navIsOpen}
          darkModeToggler={themeToggle}
        />
      </header>
      <Routes>
        <Route path='/index.html/' element={<Navigate replace to='/' />} />
        <Route exact path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/activities/*' element={<Activities />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/reach-us' element={<ReachUs />} />
        <Route path='/apply' element={<Apply />} />
        <Route path='/animations' element={<Animations />} />
      </Routes>
      <footer>
        <FooterPagePro />
      </footer>
    </div>
  );
}
