import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../../../components';

export const Game = () => {
  const [buttonText, setButtonText] = React.useState('');
  const [gameLink, setGameLink] = React.useState(
    '//static.miniclipcdn.com/js/game-embed.js'
  );

  const params = useParams();

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = gameLink;
    script.async = true;
    document.head.appendChild(script);
  }, [gameLink]);

  const handleStart = () => {
    setButtonText('Exit');
    window.location.reload();
  };

  const handleActiveGame = gameName => {
    switch (gameName) {
      case 'monkey-kick':
        return (
          <div
            class='miniclip-game-embed shadow-xl'
            data-game-name='monkey-kick'
            data-theme='5'
            data-width='600'
            data-height='600'
            data-language='en'></div>
        );
      case 'quickfire-pool-instant':
        return (
          <div
            class='miniclip-game-embed'
            data-game-name='quickfire-pool-instant'
            data-theme='5'
            data-width='550'
            data-height='900'
            data-language='en'></div>
        );
      case 'zomball':
        return (
          <div
            class='miniclip-game-embed'
            data-game-name='zomball'
            data-theme='5'
            data-width='600'
            data-height='800'
            data-language='en'></div>
        );
      case 'rio-2016-olympic-games':
        return (
          <div
            class='miniclip-game-embed'
            data-game-name='rio-2016-olympic-games'
            data-theme='5'
            data-width='980'
            data-height='640'
            data-language='en'></div>
        );
      case 'foot-chinko':
        return (
          <div
            class='miniclip-game-embed'
            data-game-name='foot-chinko'
            data-theme='5'
            data-width='450'
            data-height='600'
            data-language='en'></div>
        );
      case 'canyon-defense':
        return (
          <div
            class='miniclip-game-embed'
            data-game-name='canyon-defense'
            data-theme='5'
            data-width='800'
            data-height='550'
            data-language='en'></div>
        );
      default:
        return '';
    }
  };

  return (
    <>
      <Container>
        <div className='w-full flex flex-col justify-center items-center mt-[2%]'>
          {handleActiveGame(params.gameName)}
          <button
            onClick={handleStart}
            className='bg-blue-600 text-white lg:px-9 px-4 lg:py-2 py-1 rounded-full w-[600px] my-5 hover:shadow-lg hover:shadow-blue-300 transition-shadow duration-150 ease-in-out z-50'>
            <span className='font-medium lg:text-lg text-sm m-auto'>
              {buttonText === '' ? 'Start' : buttonText}
            </span>
          </button>
        </div>
      </Container>
    </>
  );
};
