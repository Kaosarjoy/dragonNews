import React, { useState } from 'react'; 
import { FaEye } from 'react-icons/fa';
import { FcBookmark, FcShare } from 'react-icons/fc';
// Tailwind CSS এবং DaisyUI ক্লাস ধরে নিলাম

const NewsCard = ({ news }) => {
    
    const { 
        title, 
        author, 
        image_url, 
        details, 
        total_view, 
        rating 
    } = news;

    // ১. স্টেট তৈরি
    const [isFullDetails, setIsFullDetails] = useState(false); 
    
    // ২. বিবরণ কতটুকু দেখাবে তা নির্ধারণ
    const shortDetails = details.length > 200 ? details.substring(0, 200) : details;
    const currentDetails = isFullDetails ? details : shortDetails;

    // ৩. ক্লিক হ্যান্ডলার
    const handleReadMoreClick = () => {
        setIsFullDetails(!isFullDetails); 
    };

    // ... (renderStars ফাংশন, যা আগের উত্তরে ছিল, তা এখানে আছে ধরে নিন) ...
    const renderStars = (num) => {
        const fullStars = Math.floor(num);
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(<span key={i} className={i < fullStars ? "text-yellow-300" : "text-gray-400"}>★</span>); 
        }
        return stars;
    };


    return (
        <div className="border border-gray-200 rounded-lg shadow-sm bg-white p-4 max-w-xl mx-auto my-4">
            
            {/* ... (হেডার সেকশন: লেখক, তারিখ ইত্যাদি) ... */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src={author?.img} alt={author?.name} />
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800">{author?.name || 'Unknown Author'}</p>
                        <p className="text-sm text-gray-500">{new Date(author?.published_date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                    </div>
                </div>
                <div className="flex space-x-2 text-gray-400 gap-2">
                    <span className="cursor-pointer"><FcBookmark></FcBookmark></span>
                    <span className="cursor-pointer"><FcShare></FcShare></span>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-gray-900 leading-snug">
                {title}
            </h2>

            <figure className="mb-4 rounded-lg overflow-hidden">
                <img
                    src={image_url}
                    alt={title}
                    className="w-full h-auto object-cover"
                />
            </figure>

            {/* ৪. বিবরণ এবং Read More/Show Less বাটন */}
            <div className="text-gray-700 mb-4">
                <p>
                    {currentDetails}
                    {/* যদি বিবরণ ২০০ অক্ষরের চেয়ে বেশি হয়, তবেই বাটনটি দেখাবে */}
                    {details.length > 200 && (
                        <span 
                            className="text-orange-500 font-semibold cursor-pointer hover:underline ml-1"
                            onClick={handleReadMoreClick} // <-- এখানে ক্লিক হ্যান্ডলার যোগ করা হলো
                        >
                            {/* State-এর ওপর ভিত্তি করে টেক্সট পরিবর্তন */}
                            {isFullDetails ? 'Show Less' : '...Read More'}
                        </span>
                    )}
                </p>
            </div>

            {/* ... (ফুটার সেকশন: রেটিং ও ভিউ সংখ্যা) ... */}
            <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                <div className="flex items-center space-x-2">
                    <div className="flex text-lg">
                        {renderStars(rating.number)}
                    </div>
                    <span className="text-gray-600 font-semibold">
                        {rating.number.toFixed(1)}
                    </span>
                </div>
                <div className="flex items-center text-gray-500">
                    <span className="mr-1"><FaEye></FaEye></span>
                    <span>{total_view}</span>
                </div>
            </div>

        </div>
    );
};

export default NewsCard;