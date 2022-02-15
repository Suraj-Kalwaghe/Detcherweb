import React from 'react';
import Particles from 'react-tsparticles';
import './styles.css';
import config from './particlesConfig.json';

export const ParticlesJS = () => {
  const particlesInit = main => {
    console.log(main);
  };

  const particlesLoaded = container => {
    // console.log(container);
    console.log('Particles Loaded');
  };
  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={config}
    />
  );
};
