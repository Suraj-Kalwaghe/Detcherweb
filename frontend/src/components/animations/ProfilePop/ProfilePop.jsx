import React from 'react';
import suraj from '../../../static/suraj.jpeg';
import yash from '../../../static/yash.jpeg';
import subhanshu from '../../../static/subhanshu.jpeg';
import bg_1 from '../../../static/bg_1.jpg';
import bg_2 from '../../../static/bg_2.jpg';
import bg_3 from '../../../static/bg_3.jpg';

import './styles.css';

export const ProfilePop = () => {
  return (
    <>
      <div className='person'>
        <div className='customContainer'>
          <div className='container-inner'>
            <img className='circle' src={bg_1} />
            <img className='img img1 rounded-full' src={yash} />
          </div>
        </div>
        <div className='divider'></div>
        <div className='name'>Yash Markad</div>
        <div className='title'>Co-Founder, CTO</div>
      </div>
      <div className='person'>
        <div className='customContainer'>
          <div className='container-inner'>
            <img className='circle' src={bg_2} />
            <img className='img img2 rounded-full' src={suraj} />
          </div>
        </div>
        <div className='divider'></div>
        <div className='name'>Suraj Kalwaghe</div>
        <div className='title'>Founder</div>
      </div>
      <div className='person'>
        <div className='customContainer'>
          <div className='container-inner'>
            <img className='circle' src={bg_3} />
            <img className='img img3 rounded-full' src={subhanshu} />
          </div>
        </div>
        <div className='divider'></div>
        <div className='name'>Subhanshu Bansal</div>
        <div className='title'>WebDev Head</div>
      </div>
    </>
  );
};
