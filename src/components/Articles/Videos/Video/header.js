import React from 'react';
import TeamNfo from '../../Elements/teamNfo';


const Header =(props)=>{
    console.log(props.teamData)
    const teamNfo =(team)=>{
        return team? (<TeamNfo team={team}/>):null;
    }
    
    return (<div>
        {teamNfo (props.teamData)}
    </div>)
}

export default Header;