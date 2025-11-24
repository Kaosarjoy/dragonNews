import React from 'react';
import logoImg from '../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    
    return (
        <div className='flex-col flex  justify-center items-center gap-3  '>
            
           <img className='w-[350px]' src={logoImg} alt="This is a Logo" />
           <p className='text-accent font-semibold'>Journalism Without Fear or Favour</p>
           <p className='text-accent font-semibold'>{format(new Date(),"EEEE,MMMM,d,yyyy") }</p>
        </div>
    );
};

export default Header;