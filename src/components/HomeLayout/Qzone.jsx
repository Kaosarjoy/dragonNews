import React from 'react';
import SwimmingImg from '../../assets/swimming.png'
import ClassImg from '../../assets/class.png'
import PlayGroundImg from '../../assets/playground.png'
const Qzone = () => {
    return (
        <div>
            <h1 className='font-bold text-black'>Q-Zone</h1>
           <div className='space-y-8'>
             <img src={SwimmingImg} alt="" />
            <img src={ClassImg} alt="" />
            <img src={PlayGroundImg} alt="" />
           </div>
        </div>
    );
};

export default Qzone;