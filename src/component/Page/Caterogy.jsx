import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../NewsCard';


const Caterogy = () => {
    const {id} = useParams()
    const dataLoader = useLoaderData()
    const [caterogyNews,setCaterogyNews]=useState([])
   // console.log(id,dataLoader)
  useEffect(()=>{
    if(id=='0'){
        setCaterogyNews(dataLoader)
        return
    }
    else if (id=='1'){
        const filterNews = dataLoader.filter((news)=>news.others.is_today_pick == true)

         setCaterogyNews(filterNews)
    }
    else{
        const filterNews = dataLoader.filter((news)=>news.category_id==id)
        setCaterogyNews(filterNews)
    }
     
    
  },[dataLoader,id])
    return (
        <div>
           <h2 className='text-black font-bold'> Total <span className='text-blue-400 font-semibold'> {caterogyNews.length}</span> news found 
</h2>
        {/*news card show*/}
        <div className='grid grid-cols-1 ml-6 gap-5'>
        {
            caterogyNews.map((news)=>(<NewsCard key={news.id} news={news}></NewsCard>))
        }
        </div>
        </div>
    );
};

export default Caterogy;