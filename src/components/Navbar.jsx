import React from 'react';
import { NavLink } from 'react-router';
import userImg from '../assets/user.png'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center '>
            <div></div>
            <div className='nav-middle flex gap-4 text-accent '>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='login-btn flex gap-2'>
            <img src={userImg} alt='user image ' />
            <button className='btn btn-secondary px-7 py-5'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;