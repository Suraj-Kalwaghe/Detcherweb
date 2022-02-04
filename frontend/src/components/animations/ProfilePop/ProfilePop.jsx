import React from 'react';
import suraj from '../../../static/suraj-t.png';
import yash from '../../../static/yash-t.png';
import subhanshu from '../../../static/subhanshu-t.png';
import bg_1 from '../../../static/bg_1.jpg';
import bg_2 from '../../../static/bg_2.jpg';
import bg_3 from '../../../static/bg_3.jpg';

import './styles.css';

export const ProfilePop = () => {
  return (
    <>
      <div className='person md:order-1 order-2'>
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
      <div className='person md:order-2 order-1 '>
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
      <div className='person order-3'>
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
