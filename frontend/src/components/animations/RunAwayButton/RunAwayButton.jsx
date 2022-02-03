import React from 'react';
import anime from 'animejs';

import './styles.css';

export const RunAwayButton = ({ text }) => {
  React.useEffect(() => {
    const button = document.getElementById('runaway-btn');
    const animateMove = (element, prop, pixels) => {
      anime({
        targets: element,
        [prop]: `${pixels}px`,
        easing: 'easeOutCirc',
      });
    };
    const actions = ['mouseover', 'click'];
    actions.forEach(function (el) {
      button.addEventListener(el, function (event) {
        const top = getRandomNumber(window.innerHeight - this.offsetHeight);
        const left = getRandomNumber(window.innerWidth - this.offsetWidth);

        animateMove(this, 'left', left).play();
        animateMove(this, 'top', top).play();
      });
    });

    const getRandomNumber = num => {
      return Math.floor(Math.random() * (num + 1));
    };
  });

  return (
    <>
      <button id='runaway-btn' className='runAwayButton'>
        <span className='text-xl font-bold text-slate-500 border border-slate-300 w-1/5 rounded-2xl px-9 py-3 shadow-md'>
          {text}
        </span>
      </button>
    </>
  );
};
