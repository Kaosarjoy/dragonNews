import React from 'react';

import Login from '../Page/Login';
import Navbar from './Navbar';





const AuthContent = () => {
    return (
        <div>


           <nav className='bg-blue-700'>
          <Navbar></Navbar>
           </nav>
           <div className='w-11/12 mt-3 mx-auto gap-5'>
            <Login></Login>
           </div>
           
        </div>
    );
};

export default AuthContent;