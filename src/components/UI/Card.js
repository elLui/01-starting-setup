import React from 'react';

import './Card.css';


// wrapper component
const Card = (props) => {
    // do not forget the space after 'card '
    const classes = 'card ' + props.className;
    // props.children allows us to use this function as a wrapper
    return <div className={classes}>{props.children}</div>
}

export default Card;