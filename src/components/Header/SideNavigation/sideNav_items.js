import React from 'react';
import { Link } from 'react-router-dom';
import style from './sideNav.css';
import FontAwesome from 'react-fontawesome';

const SideNavItems=()=>{



    const Items=[
        {
            type: style.option,
            text: 'Home',
            icon: 'home',
            link: '/'
        },
        {
            type: style.option,
            text: 'News',
            icon: 'file-text-o',
            link: '/news'
        },
        {
            type: style.option,
            text: 'Videos',
            icon: 'play',
            link: '/videos'
        },
        {
            type: style.option,
            text: 'Sign In',
            icon: 'sign-in',
            link: '/sign-in'
        },
        {
            type: style.option,
            text: 'Sign Out',
            icon: 'sign-out',
            link: '/sign-out'
        }
    ]

    const showItems= ()=>{
        return Items.map((item,i)=>{
            return (
                <div key={i} className={item.type}>
                    <Link to ={item.link}> 
                        <FontAwesome name={item.icon}/>
                        {item.text}
                    </Link>
                </div>
            )
         })
    }
    
    
    return(
        <div>
             {showItems()}
        </div>
      
    )
}

export default SideNavItems;