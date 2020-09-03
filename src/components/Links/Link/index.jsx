import React from 'react';
import classes from './style.css';

const Link = (props) => {
    return ( 
        <div className={classes.Link}>
            <a href={props.linkurl}>{props.linkurl}</a>
            <p>{props.description}</p>
        </div>
     );
}
 
export default Link;