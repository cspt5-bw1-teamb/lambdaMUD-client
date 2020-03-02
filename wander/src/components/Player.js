import React from 'react';

const Player = props => {
    if(props.direction === 'n_to') {
        return(
            <p>Up</p>
        )
    } else if(props.direction === 's_to') {
        return(
            <p>Down</p>
        )
    } else if(props.direction === 'e_to') {
        return(
            <p>Right</p>
        )
    } else if(props.direction === 'w_to') {
        return(
            <p>Left</p>
        )
    }
}

export default Player