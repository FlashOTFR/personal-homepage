import React from 'react';
import classes from './style.css';
import Link from './Link';

const Links = (props) => {
    return props.links.map( (link, index) => {
        return (
            <div className="link-list">
                <Link
                linkurl = {link.linkurl} />
            </div>
        )
    })
}

export default Links;