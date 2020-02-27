import React, {useState, useEffect} from 'react'
import axios from 'axios'
import MapRoom from './MapRoom'

const Map = props => {

    const [rooms, setRooms] = useState([])

    useEffect(() => {
        axios.get('https://lambda-mud-test.herokuapp.com/api/adv/rooms/', {headers: {'Authorization': `Token 013ba7e8edbbe9e2623416ea939ed403bfa2cef0`}})
            .then(res => setRooms(JSON.parse(res.data.rooms)))
            .catch(err => console.log(err))
        }
    )

    return (
        <div className="map">
            <p>Map</p>
            {rooms.map(room => <MapRoom currentRoomId={props.currentRoomId} room={room} key={room.title}/>)}
        </div>
    )
}

export default Map;