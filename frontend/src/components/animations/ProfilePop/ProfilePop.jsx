import React from 'react';
import suraj from '../../../static/suraj.jpeg';
import yash from '../../../static/yash.jpeg';
import subhanshu from '../../../static/subhanshu.jpeg';
import './styles.css';

export const ProfilePop = () => {
  return (
    <>
      <div className='person'>
        <div className='customContainer'>
          <div className='container-inner'>
            <img className='circle' src={suraj} />
            <img className='img img1' src={yash} />
          </div>
        </div>
        <div className='divider'></div>
        <div className='name'>Alma</div>
        <div className='title'>Product Manager</div>
      </div>
      <div className='person'>
        <div className='customContainer'>
          <div className='container-inner'>
            <img className='circle' src={subhanshu} />
            <img className='img img2' src={suraj} />
          </div>
        </div>
        <div className='divider'></div>
        <div className='name'>Irma</div>
        <div className='title'>Senior Developer</div>
      </div>
      <div className='person'>
        <div className='customContainer'>
          <div className='container-inner'>
            <img className='circle' src={yash} />
            <img className='img img3' src={subhanshu} />
          </div>
        </div>
        <div className='divider'></div>
        <div className='name'>Anton</div>
        <div className='title'>Senior UX</div>
      </div>
    </>
  );
};
