import React from 'react';
import NewsSlider from '../widgets/NewsSlider/slider';
import NewsList from '../widgets/NewsList/newsList';

const News =()=>{
   
   return (
        <div>
            <NewsSlider start={0} amount={3} type="featured" settings={{
                    dots:false
            }}/>
            <NewsList start={3} amount_i={6} amount ={3} type="imCard" />
        </div>
    )
}


export default News;