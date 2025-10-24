import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';


const SocialLogin = () => {
    return (
        <div>
           <h2>All Social Media Login</h2> 
          <div className='space-y-4 mt-4'>
             <button className='btn btn-secondary btn-soft '>
                <FcGoogle size={24}></FcGoogle>
                Login With Google 
                </button>
           <div>
             <button className='btn btn-primary btn-soft'>
                <FaGithub size={24}></FaGithub>
                Login With GitHub
                 </button>
           </div>
          </div>
        </div>
    );
};

export default SocialLogin;