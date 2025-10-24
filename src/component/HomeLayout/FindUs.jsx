import React from 'react';
// প্রয়োজনীয় আইকনগুলো import করা হয়েছে
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { LuTwitter } from 'react-icons/lu';

const FindUs = () => {
    return (
        <div className='mt-4 p-4 border rounded-lg shadow-md max-w-sm mx-auto'> 
            
            {/* FindUs হেডিং */}
            <h2 className="text-xl font-bold mb-4 text-gray-700">Find Us On</h2>
            
            {/* join-এর পরিবর্তে flex flex-col space-y-4 ব্যবহার করা হয়েছে, যা বাটনগুলোকে w-full দেবে */}
            <div className='flex flex-col space-y-4 w-full'> 
                 
                {/* ১. Facebook বাটন */}
                {/* bg-[#4267B2] Facebook Blue */}
                <button className='btn btn-lg bg-[#4267B2] text-white border-[#4267B2] hover:bg-[#365899] w-full justify-start'> 
                    <FaFacebook size={24} className="mr-3" />
                    Login With Facebook
                </button>

                {/* ২. Twitter (X) বাটন */}
                {/* bg-[#1DA1F2] Twitter Blue */}
                <button className='btn btn-lg bg-[#1DA1F2] text-white border-[#1DA1F2] hover:bg-[#0c85d0] w-full justify-start'> 
                    <LuTwitter size={24} className="mr-3" />
                    Login With Twitter
                </button>

                {/* ৩. Instagram বাটন */}
                {/* Instagram Gradient-এর জন্য Tailwind ক্লাস ব্যবহার করা হয়েছে */}
                <button 
                    className={`
                        btn btn-lg w-full text-white font-semibold justify-start border-none
                        /* Tailwind Gradient Classes */
                        bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] 
                        hover:shadow-lg transition-all
                    `}
                >
                    <BsInstagram size={24} className="mr-3" />
                    Login With Instagram
                </button>
                
            </div>
        </div>
    );
};

export default FindUs;