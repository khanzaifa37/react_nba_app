import React from 'react';
import VideosList from '../widgets/VideosList/videosList';
const Videos =()=>{
    return(
        <div>
        <VideosList 
        start={0}
        amount={10}
        type='card'
        loadmore={true}
        title={false}
        />
        </div>
    )
}

export default Videos;