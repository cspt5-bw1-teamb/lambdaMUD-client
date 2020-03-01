import React from 'react';

const Player = props => {
    if(props.direction === 'n') {
        return(
            <p>Up</p>
        )
    } else if(props.direction === 's') {
        return(
            <p>Down</p>
        )
    } else if(props.direction === 'e') {
        return(
            <p>Right</p>
        )
    } else if(props.direction === 'w') {
        return(
            <p>Left</p>
        )
    }
}

export default Player