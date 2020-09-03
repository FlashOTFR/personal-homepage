import React from 'react';
import classes from 'style.css';

const Link = (props) => {
    return ( 
        <div className={classes.Link}>
            <img src={props.image}>Check out an image</img>
            <a>{props.linkurl}</a>
            <p>{props.description}</p>
        </div>
     );
}
 
export default Link;