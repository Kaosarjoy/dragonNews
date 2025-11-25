import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../NewsCard';

const Category = () => {
    const {id} = useParams()
    const data = useLoaderData()

    const [categoryNews,setCategoryNews]=useState([])
    useEffect(()=>{
        //jodi data 0 hoi sob data show hove 
        if(id=='0'){
            setCategoryNews(data)
            return
        }//breaking news dekha be 
        else if(id=='1'){
              const filteredNews = data.filter(news=>news.others.is_today_pick==true)
              setCategoryNews(filteredNews)
        }//jodi data r man 1 hoi taile sudu oi data dekhabe 
        else{
            const filteredNews = data.filter(news=>news.category_id==id)
            setCategoryNews(filteredNews)
        }
    },[id,data])
    
    return (
        <div>
           <h2 className='text-black font-bold'>Total <span className='text-blue-400 font-bold'>{categoryNews.length}</span> Found</h2>
           <div className='grid grid-cols-1'>
        {categoryNews.map((news) => (
     <NewsCard key={news.id} news={news} />
        ))}

           </div>
        </div>
    );
};

export default Category;