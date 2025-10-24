import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

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
            Total {caterogyNews.length} news found 

        </div>
    );
};

export default Caterogy;