import React from 'react'

const MapRoom = props => {
    return (
        <div className = {props.room.pk == props.currentRoomId ? "mapRoom currentRoom": "mapRoom"}>
            {props.room.pk}
        </div>
    )
}

export default MapRoom