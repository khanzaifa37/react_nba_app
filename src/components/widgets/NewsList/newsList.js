import React,{ Component } from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import  { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './newsList.css';

import {URL} from '../../../config';

import Button from '../Button/button';
import CardInfo from '../CardInfo/cardInfo';

class NewsList extends Component{
    
    
    state={
        teams:[],
        items:[],
        start:this.props.start,
        end:this.props.start+this.props.amount_i,
        amount:this.props.amount
    }
    request=(start,end)=>{
        if(this.state.teams.length<1)
        {
            axios.get(`${URL}/teams`)
            .then(response=>{
            this.setState({teams:response.data})
        })
        }

        axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
        .then(response=>{
            this.setState({items:[...this.state.items,...response.data],end:end})
        })
    }
    constructor(props)
    {
        super(props);
        this.request(this.state.start,this.state.end);
    }

    loadMore=()=>{
        let end=this.state.end+this.state.amount;
        return (this.request(this.state.end,end));
    }

    renderNews= (type)=>{
        let template=null;
        switch(type){
            case ('card'):
                template = this.state.items.map((item,i)=>(
                    <CSSTransition
                    classNames={{
                        enter:styles.newsList_wrapper,
                        enterActive:styles.newsList_wrapper_enter
                    }}
                    timeout={500}
                    key={i}
                >
                    <div>
                        <div className={styles.newslist_item}>
                            <Link to ={`/articles/${item.id}`}>
                                <CardInfo teams={this.state.teams} team={item.team} date={item.date} />
                                <h2>{item.title}</h2>
                            </Link>
                        </div>
                    </div>

                </CSSTransition> 
           ))
           break;
           case ('imCard'):
            template = this.state.items.map((item,i)=>(
            <CSSTransition classNames={{
                enter:styles.newsList_wrapper,
                enterActive:styles.newsList_wrapper_enter
            }}
            timeout={500}
            key={i}
            >
                 
                <Link to={`/articles/${item.id}`} key ={i}>
                    <div  className={styles.flex_wrapper}>
                        <div className={styles.left} style={{
                            background:`url(/images/articles/${item.image})`
                        }}>
                            <div></div>
                        </div>
                        <div className={styles.right}>
                            <CardInfo teams={this.state.teams} team={item.team} date={item.date} />
                            <h2>{item.title}</h2>
                        </div>
                    </div>
                </Link>
            </CSSTransition> 
            ))
            break;
           default:
               template=null;
        }
        return template;
    };

    
    render()
    {   
        
        const {type}= this.props;
        return(
            <div>
                <TransitionGroup component="div" className="list">
                    {this.renderNews(type)}
                </TransitionGroup>
                <Button type="loadMore" loadMore={this.loadMore} cta="Load More News" />
               
            </div>
        );
    }
}

export default NewsList;