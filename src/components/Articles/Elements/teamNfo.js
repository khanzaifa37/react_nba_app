import React from 'react';
import styles from '../articles.css'
const TeamNfo =(props)=>
{
    return(
        
    <div  className={styles.teamInfo_wrapper}>
        <div className={styles.left} style={{
        background:`url(/images/teams/${props.team.logo})`
        }}>
        <div></div>
        </div>
        <div className={styles.right}>
            <div><span className={styles.rightTeamName}>{props.team.city} {props.team.name}</span><br/>
            <span className={styles.rightTeamStats}>W{props.team.stats[0].wins}-L{props.team.stats[0].defeats} </span> </div>
        </div>
    </div>
           
    )
}

export default TeamNfo;