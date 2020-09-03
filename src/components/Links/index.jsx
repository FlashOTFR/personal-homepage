import React from 'react';
import classes from './style.css';
import Link from './Link';

const Links = (props) => {
    return props.links.map( (link, index) => {
        return (
            <Link 
            description = {link.description}
            linkurl = {link.linkurl} />
        )
    })
}

export default Links;