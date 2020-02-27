import React from 'react'

const MapRoom = props => {
    return (
        <div className = "mapRoom">
            {props.room.fields.title}
        </div>
    )
}

export default MapRoom