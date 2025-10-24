import React from 'react';
import logoImg from '../assets/logo.png';
import { format } from 'date-fns';

const Home = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <img className='w-[450px]' src={logoImg} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className='text-semibold text-accent'>{format(new Date() ,"EEEE,MMMM,d,yyyy")}</p>
        </div>
    );
};

export default Home;