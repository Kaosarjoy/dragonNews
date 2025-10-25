import React from 'react';
import { Link } from 'react-router';
import registerImg from '../../assets/register.png'
const Register = () => {
    return (
       <div className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-base-200 px-5">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5 md:mr-10">
        <h2 className="text-center font-semibold text-2xl text-lime-500 mb-4">
          Register your account
        </h2>
        <div className="card-body">
          <fieldset className="fieldset">
        {/*Name */}
        <label className="label">Your Name</label>
            <input type="text" className="input input-bordered" placeholder="Enter Your Name" />
        {/* Photo URL*/}
        <label className="label">Photo URL</label>
            <input type="text" className="input input-bordered" placeholder="Photo URL" />
            {/* Email*/} 
            <label className="label">Email</label>
            <input type="email" className="input input-bordered" placeholder="Example@gmail.com" />
            <label className="label mt-2">Password</label>
            <input type="password" className="input input-bordered" placeholder="Set Password" />
            <div className="text-left mt-2">
              <a className="link link-hover text-sm">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4 w-full">Register</button>
            <p className='text-center font-semibold'>
                Dont’t Have An Account ? <Link className='text-bold text-gray-500 underline mt-4' to='/auth/login'>Login</Link>
            </p>

          </fieldset>
        </div>
      </div>

      <div className="mt-6 md:mt-0">
        <img
          src={registerImg}
          alt="Register illustration"
          className="w-80 md:w-[420px] rounded-lg"
        />
      </div>
    </div>
    );
};

export default Register;