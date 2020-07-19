import React from 'react';
import TeamNfo from '../../Elements/teamNfo';
import PostData from '../../Elements/postData';

const Header =(props)=>{
    console.log(props.teamData)
    const teamNfo =(team)=>{
        return team? (<TeamNfo team={team}/>):null;
    }
    const postData =(date,author)=>{
        return <PostData date={date} author={author}/>;
    }
    return (<div>
        {teamNfo (props.teamData)}
        {postData(props.date,props.author)}
    </div>)
}

export default Header;