import React from 'react';
import NewsSlider from '../widgets/NewsSlider/slider'
import NewsList from '../widgets/NewsList/newsList'
import VideosList from '../widgets/VideosList/videosList'
const Home= ()=>{
    return(
      <div>
          <NewsSlider 
            start={0}
            amount={3}
            type= 'featured'
            settings={
              {dots:false}
            }
          />
          <NewsList
            type="card"
            start={3}
            amount={3}
            amount_i={3}
            loadmore={true}
          />
          <VideosList
            type="card"
            start={0}
            amount={3}
            loadmore={true}
            title={true}
          />

          
      </div>
    )
}

export default Home;

