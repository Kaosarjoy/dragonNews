import React from 'react';
import { NavLink } from 'react-router';
import UserImg from '../assets/user.png'
const Navbar = () => {
    return (
        <div className='gap-5 flex justify-between items-center w-11/12 mx-auto'>
            <div></div>
             <div className='nav-middle flex gap-5 color-secondary font-semibold '>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about' >About</NavLink>
                <NavLink to='/carrer'>Carrer</NavLink>
             </div>
              <div className='nav-right flex items-center gap-3'>
                <img className='w-[40px] gap-2' src={UserImg} alt="" />
            <button className='btn btn-primary px-8'>
                Login</button>
              </div>
        </div>
    );
};

export default Navbar;