import React from 'react';
import Marquee from 'react-fast-marquee';

const LastestNews = () => {
    return (
        <div className='gap-5 flex items-center w-11/12 mx-auto my-4 bg-lime-200'>
          <p className='bg-secondary p-2 '>Latest</p>
        <Marquee className='p-2 gap-3' play={true} pauseOnHover={true}>
         <p className=' truncate hover:text-primary transition-colors duration-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Numquam accusantium id dolorem.</p>

         <p className=' truncate hover:text-primary transition-colors duration-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Numquam accusantium id dolorem.</p>


              <p className=' truncate hover:text-primary transition-colors duration-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Numquam accusantium id dolorem.</p>
        </Marquee>

         
        </div>
    );
};

export default LastestNews;