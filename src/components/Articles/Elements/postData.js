import React from 'react';
import styles from '../articles.css';


const PostData=(props)=>{
    console.log(props);
    return(
        <div className={styles.postData_wrapper}>
            <div className={styles.postHeading}>
                Date: <strong>{props.date}</strong>
            <br/>
                Author: <strong>{props.author}</strong>
            </div>
        </div>
    )
}

export default PostData;