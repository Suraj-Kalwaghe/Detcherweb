import React from 'react';
import anime from 'animejs';
import styles from './styles.module.css';
// import './styles.css';

export const Pong = () => {
  var loop = true;
  var easing = 'linear';
  var direction = 'alternate';

  var ballTimeline = anime.timeline({
    loop,
    direction,
  });
  var bar2Timeline = anime.timeline({
    loop,
    direction,
  });
  var bar1Timeline = anime.timeline({
    loop,
    direction,
  });

  React.useEffect(() => {
    anime({
      targets: `.${styles.ball}`,
      translateX: 470,
      translateY: 100,
      easing,
      loop,
      direction,
      background: [
        { value: '#573796' },
        { value: '#FB89FB' },
        { value: '#FBF38C' },
        { value: '#18FF92' },
        { value: '#5A87FF' },
      ],
    });
    ballTimeline
      .add({
        targets: `.${styles.ball}`,
        translateY: 100,
        translateX: 470,
        easing,
      })
      .add({
        targets: `.${styles.ball}`,
        translateY: 0,
        translateX: 0,
        easing,
      })
      .add({
        targets: `.${styles.ball}`,
        translateY: '-80',
        translateX: 470,
        easing,
      });
    bar2Timeline
      .add({
        targets: `.${styles.bar2}`,
        translateY: 100,
        easing,
        background: '#573796',
      })
      .add({
        targets: `.${styles.bar2}`,
        translateY: 0,
        easing,
        background: '#FB89FB',
      })
      .add({
        targets: `.${styles.bar2}`,
        translateY: '-100',
        easing,
        background: '#FBF38C',
      });
    bar1Timeline
      .add({
        targets: `.${styles.bar1}`,
        translateY: '-80',
        easing,
        background: '#18FF92',
      })
      .add({
        targets: `.${styles.bar1}`,
        translateY: 10,
        easing,
        background: '#5A87FF',
      })
      .add({
        targets: `.${styles.bar1}`,
        translateY: 60,
        easing,
        background: '#FF1461',
      });
  });

  return (
    <div class={styles.customContainer1}>
      <div class={`${styles.bar} ${styles.bar1}`}></div>
      <div class={styles.ball}></div>
      <div class={`${styles.bar} ${styles.bar2}`}></div>
    </div>
  );
};
