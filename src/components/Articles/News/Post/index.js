import React, { Component } from 'react';
import styles from '../../articles.css';
import {URL} from '../../../../config';
import axios from 'axios';

import Header from './header';


class NewsArticle extends Component{
    state={
        article: [],
        team:[]
    }
    constructor(props)
    {
        super(props);
        axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
        .then(response=>{
            let article=response.data[0];
            axios.get(`${URL}/teams?id=${article.team}`)
            .then(response=>{
                // console.log("Article:")
                // console.log(article);
                // console.log("Team:")
                // console.log(response.data);
                this.setState({article:article,team:response.data});
            })
        }
   
    )}
        render(){
        const article=this.state.article;
        console.log(article);
        const team=this.state.team;

        return(
            // <div>Hello</div>
            <div className={styles.articleWrapper}>
               
               <Header
                    teamData={team[0]}
                    date={article.date}
                    author={article.author}
                />
                <div className={styles.articleBody}>
                    <h1>{article.title}</h1>
                    <div className={styles.articleImage}
                    style={{
                        background:`url(/images/articles/${article.image})`
                    }}></div>
                    <div className={styles.articleText}>{article.body}</div>
                </div>
            </div>

        )
    }
}

export default NewsArticle;