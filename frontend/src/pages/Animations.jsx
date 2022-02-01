import React from 'react';
import {
  Pong,
  SubmitButton,
  Loader,
  Loading,
  ProfilePop,
  ParticlesJS,
  Waves,
} from '../components';

export const Animations = () => {
  return (
    <div>
      <Pong />
      <SubmitButton />
      <Loader />
      <Loading />
      <ProfilePop />
      {/* <Waves /> */}
    </div>
  );
};
