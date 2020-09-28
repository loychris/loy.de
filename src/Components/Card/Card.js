import React, { Component } from 'react';

import classes from './Card.module.css';

class Card extends Component {
    render(){
        return(
            <article className={classes.card}> 
                <div className={classes.cardHeader}>
                  <p>Sep 11th 2020</p>
                  <h2>{this.props.title}</h2>
               </div>
            </article>
        )
    }
}

export default Card;