import React from 'react';
import anime from 'animejs';
import './styles.css';

export const SubmitButton = () => {
  var basicTimeline = anime.timeline({
    autoplay: false,
  });

  var pathEls = document.getElementsByClassName('.check');
  for (var i = 0; i < pathEls.length; i++) {
    var pathEl = pathEls[i];
    var offset = anime.setDashoffset(pathEl);
    pathEl.setAttribute('stroke-dashoffset', offset);
  }
  React.useEffect(() => {
    basicTimeline
      .add({
        targets: '.text',
        duration: 1,
        opacity: '0',
      })
      .add({
        targets: '.button',
        duration: 1300,
        height: 10,
        width: 300,
        backgroundColor: '#A3D0E4',
        border: '0',
        borderRadius: 100,
      })
      .add({
        targets: '.progress-bar',
        duration: 2000,
        width: 300,
        easing: 'linear',
        backgroundColor: '#EEEEEE',
      })
      .add({
        targets: '.button',
        width: 0,
        duration: 1,
      })
      .add({
        targets: '.progress-bar',
        width: 80,
        height: 80,
        delay: 500,
        duration: 750,
        borderRadius: 80,
        backgroundColor: '#71DFBE',
      })
      .add({
        targets: pathEl,
        strokeDashoffset: [offset, 0],
        duration: 200,
        easing: 'easeInOutSine',
      });
  });

  return (
    <div>
      <div className='button' onClick={() => basicTimeline.play()}>
        <div className='text' onClick={() => basicTimeline.play()}>
          Submit
        </div>
      </div>
      <div className='progress-bar'></div>
      <svg x='0px' y='0px' viewBox='0 0 25 30' id='tick'>
        <path className='check' d='M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2' />
      </svg>
    </div>
  );
};
