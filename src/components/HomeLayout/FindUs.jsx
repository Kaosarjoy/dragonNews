import React from 'react';

const FindUs = () => {
    return (
        <div>
            <h2 className='text-accent font-bold mb-5'>Find Us On </h2>
            <div className='w-full'>
       <div style={{width: '250px', margin: '20px auto', display: 'flex', flexDirection: 'column', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden'}}>
        {['Facebook', 'Twitter', 'Instagram'].map((platform, idx) => (
            <button key={platform} style={{display: 'flex', alignItems: 'center', padding: '12px 15px', border: 'none', borderBottom: idx < 2 ? '1px solid #eee' : 'none', backgroundColor: 'white', cursor: 'pointer', fontSize: '1em', color: '#333', textAlign: 'left'}}>
                <img src={`https://www.vectorlogo.zone/logos/${platform.toLowerCase()}/${platform.toLowerCase()}-icon.svg`} alt={platform} style={{width: '20px', height: '20px', marginRight: '10px'}} />
                {platform}
            </button>
        ))}
        {/* আপনি যদি নিচে আরেকটি বাটন যোগ করতে চান, তাহলে এখানে যোগ করতে পারেন */}
        {/* <button style={{ padding: '10px', border: 'none', backgroundColor: '#e74c3c', color: 'white', fontWeight: 'bold' }}>Join Now</button> */}
    </div>
            </div>
        </div>
    );
};

export default FindUs;