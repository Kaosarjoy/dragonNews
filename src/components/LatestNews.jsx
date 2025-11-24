import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200'>
           <p className='bg-primary px-3 py-3 text-white'>Latest</p> 
             <Marquee speed={70} pauseOnHover={true} style={{ background: "linear-gradient(to right, blue, transparent)" }}>
            Global Tech Market Sees Sharp Rise Amid New Innovations.Tech Giants Race Ahead with Next-Gen Innovations and Bold Releases.
            Digital Transformation Accelerates as Companies Adopt Smarter Tools.Global Startup Ecosystem Surges Following Major Funding Waves
             </Marquee>
           <p className='font-bold'></p>
        </div>
    );
};

export default LatestNews;