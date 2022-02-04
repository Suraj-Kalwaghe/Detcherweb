import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../../../components';

export const GameCenter = () => {
  const games = {
    col1: [
      {
        link: '/activities/game-center/game/monkey-kick',
        name: 'Monkey Kick',
        img: 'https://static.miniclipcdn.com/content/game-icons/medium/monkey_150x110.jpg',
      },
      {
        link: '/activities/game-center/game/quickfire-pool-instant',
        name: '8 Ball Pool',
        img: 'https://static.miniclipcdn.com/content/game-icons/small/8ballpoolmultiplayerv6.jpg',
      },
      {
        link: '/activities/game-center/game/zomball',
        name: 'Zomball',
        img: 'https://static.miniclipcdn.com/content/game-icons/small/Zomball_70x59.jpg',
      },
    ],
    col2: [
      {
        link: '/activities/game-center/game/rio-2016-olympic-games',
        name: 'Rio 2016',
        img: 'https://static.miniclipcdn.com/content/game-icons/small/rio_70x59.png',
      },
      {
        link: '/activities/game-center/game/foot-chinko',
        name: 'Foot Chinko',
        img: 'https://static.miniclipcdn.com/content/game-icons/small/footchinko_70x59.jpg',
      },
      {
        link: '/activities/game-center/game/canyon-defense',
        name: 'Canyon Defense',
        img: 'https://static.miniclipcdn.com/content/game-icons/small/canyondefence.jpg',
      },
    ],
  };
  return (
    <>
      <Container>
        <div className='grid md:grid-cols-2 min-h-screen md:gap-x-5 gap-x-0 lg:gap-y-0 gap-y-5 my-10'>
          <div className='grid grid-rows-3 gap-y-5'>
            {games.col1.map(game => (
              <Link to={game.link}>
                <div className='px-5 py-4 bg-gradient-to-r from-cyan-300 to-blue-500 hover:from-blue-300 hover:to-indigo-500 w-full h-full flex md:flex-col items-center md:justify-center justify-around rounded-2xl hover:-translate-y-3 hover:translate-x-2 transition-transform duration-150 ease-linear hover:shadow-lg'>
                  <img
                    src={game.img}
                    width='70'
                    height='70'
                    alt='game_image'
                    className='rounded-full h-[70px] w-[70px] md:mb-5 ring-offset-1 ring ring-white'
                  />
                  <h3 className='xl:text-2xl text-xl font-bold text-white'>
                    {game.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <div className='grid grid-rows-3 gap-y-5'>
            {games.col2.map(game => (
              <Link to={game.link}>
                <div className='px-5 py-4 bg-gradient-to-r from-cyan-300 to-blue-500 hover:from-blue-300 hover:to-indigo-500 w-full h-full flex md:flex-col items-center md:justify-center justify-around rounded-2xl hover:-translate-y-3 hover:translate-x-2 transition-transform duration-150 ease-linear hover:shadow-lg'>
                  <img
                    src={game.img}
                    width='70'
                    height='70'
                    alt='game_image'
                    className='rounded-full h-[70px] w-[70px] md:mb-5 ring-offset-1 ring ring-white'
                  />
                  <h3 className='xl:text-2xl text-xl font-bold text-white'>
                    {game.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};
