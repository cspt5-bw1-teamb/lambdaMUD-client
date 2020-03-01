import React, {useState, useEffect} from 'react'
import axios from 'axios'
import MapRoom from './MapRoom'

const Map = props => {

    const [roomList, setRoomList] = useState([])
    const [direction, setDirection] = useState("n")

    useEffect(() => {
        const getRooms = async () => {
            await axios.get('https://lambda-mud-test.herokuapp.com/api/adv/rooms/', {headers: {'Authorization': `Token 013ba7e8edbbe9e2623416ea939ed403bfa2cef0`}})
                .then(res => setRoomList(JSON.parse(res.data.rooms)))
                .catch(err => console.log(err))
        }
        getRooms()
    }, [])

    const trackDirection = event => {
        if(event.code === "ArrowUp") {
            setDirection("n")
        } else if(event.code === "ArrowDown") {
            setDirection("s")
        } else if(event.code === "ArrowLeft") {
            setDirection("w")
        } else if(event.code === "ArrowRight") {
            setDirection("e")
        }
    }

    const createMap = (rooms) => {
        if(rooms.length > 0) {
            console.log(rooms)
            let createdRoomCoordinates = []
            let createdRooms = []
            const createRoom = (room, x, y) => {
                createdRoomCoordinates.push(`${x},${y}`)
                createdRooms.push({room: room, x: x, y:y})
                let roomId = 0
                if(room.fields.n_to > 0 && !createdRoomCoordinates.includes(`${x},${y+1}`)) {
                    roomId = room.fields.n_to
                    createRoom(rooms.filter(room => room.pk === roomId)[0], x, y+1)
                }
                if(room.fields.s_to > 0 && !createdRoomCoordinates.includes(`${x},${y-1}`) ) {
                    roomId = room.fields.s_to
                    createRoom(rooms.filter(room => room.pk === roomId)[0], x, y-1)
                }
                if(room.fields.w_to > 0 && !createdRoomCoordinates.includes(`${x-1},${y}`) ) {
                    roomId = room.fields.w_to
                    createRoom(rooms.filter(room => room.pk === roomId)[0], x-1, y)
                }
                if(room.fields.e_to > 0 && !createdRoomCoordinates.includes(`${x+1},${y}`) ) {
                    roomId = room.fields.e_to
                    createRoom(rooms.filter(room => room.pk === roomId)[0], x+1, y)
                }
            }
            createRoom(rooms[0], 0, 0)
            return createdRooms.map(room => <MapRoom room={room} currentRoomId={props.currentRoomId} direction={direction}/>)
        }
    }

    return (
        <div className="map">
            {document.addEventListener('keydown', trackDirection)}
            <p>Map</p>
            {createMap(roomList)}
        </div>
    )
}

export default Map;