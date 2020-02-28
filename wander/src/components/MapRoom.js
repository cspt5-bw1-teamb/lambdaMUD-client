import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
    border: 1px black solid;
    width: 50px;
    height: 50px;
    background-color: ${props => props.roomId == props.currentRoomId ? "aquamarine" : "white"}
`

const MapRoom = props => {
    return (
        <Box currentRoomId = {props.currentRoomId} roomId = {props.room.pk}>
            {props.room.pk}
        </Box>
    )
}

export default MapRoom