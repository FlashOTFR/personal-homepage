import React from 'react';
import './style.css';

const TLink = (props) => {
    return ( 
        <div className='tLink'>
        {/* <img src={props.imageurl}>Check out an image</img> */}
        <a href={props.linkurl}>{props.linkurl}</a>
        <p>{props.description}</p>
    </div>
     );
}
 
export default TLink;