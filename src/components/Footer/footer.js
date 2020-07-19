import React from 'react';
import style from './footer.css';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const Footer = (props)=>{

    

    const Logo = ()=> (
        <Link to="/" className={style.logo}>
            <img alt="nba logo" src="/images/nba_logo.png"/>
        </Link>
    );




    return (
        <footer className={style.footer}>
            <div className={style.footerOpt}>
                {Logo()}
                <span className={style.footertxt}>(c) 2020 All rights reserved.</span>
            </div>
        </footer>
        
    )
}

export default Footer;