import React from 'react';
import { Link } from 'react-router-dom';

import styles from './button.css';

const Button =(props)=>{
    let template=null;
    
    switch(props.type){
        case "loadMore":
            template=(
                <div className={styles.blue_btn} onClick={props.loadMore}>
                    {props.cta}    
                </div>
            );
        break;
        
       case "linkTo":
            template =(
                <Link to={props.linkTo} className={styles.blue_btn}>
                    {props.cta}
                </Link>
            )
        break;
        default:
            template=null;

    }
    return template;

}

export default Button;
