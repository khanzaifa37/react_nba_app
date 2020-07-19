import React from 'react';
import { Link } from 'react-router-dom';
import style from './header.css';
import SideNav from '../Header/SideNavigation/sideNavigation'
import FontAwesome from 'react-fontawesome';

const Header = (props)=>{

    const NavBars =()=>(
        <div className="style.bars">
        <FontAwesome name="bars" 
        onClick={props.onOpenNav}
        style={{
            color:'#dfdfdf',
            padding:'10px',
            cursor:'pointer'
            }} 
        />
        </div>

    )

    const Logo = ()=> (
        <Link to="/" className={style.logo}>
            <img alt="nba logo" src="/images/nba_logo.png"/>
        </Link>
    );




    return (
        <header className={style.header}>
            <SideNav {...props} />
            <div className={style.headerOpt}>
                
                {NavBars()}
                {Logo()}
                

            </div>
        </header>
        
    )
}

export default Header;