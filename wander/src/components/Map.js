import React, {useState, useEffect} from 'react'
import axios from 'axios'
import MapRoom from './MapRoom'

const Map = () => {

    const [roomList, setRoomList] = useState([])
    const [direction, setDirection] = useState("n_to")
    const [currentRoomId, setCurrentRoomId] = useState(1)
    const [message, setMessage] = useState("")

    useEffect(() => {
        const getRooms = async () => {
            await axios.get('https://lambda-mud-test.herokuapp.com/api/adv/rooms/', {headers: {'Authorization': `Token 013ba7e8edbbe9e2623416ea939ed403bfa2cef0`}})
                .then(res => setRoomList(JSON.parse(res.data.rooms)))
                .catch(err => console.log(err))
        }
        getRooms()
    }, [])

    const move = async move_to => {
        const currentRoom = roomList.filter(room => room.pk === currentRoomId)[0]
        if(currentRoom && currentRoom.fields[move_to + "_to"]) {
            setMessage("")
            setCurrentRoomId(currentRoom.fields[move_to + "_to"])
        } else {
            setMessage("Can't Move That Way")
        }
        setDirection(move_to + "_to")
    }

    const createMap = (rooms) => {
        if(rooms.length > 0) {
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
            return createdRooms.map(room => <MapRoom room={room} currentRoomId={currentRoomId} direction={direction}/>)
        }
    }

    return (
        <div className="map">
            <p>Map</p>
            {createMap(roomList)}
            <div>
                <button onClick={() => move("n")}>North</button>
                <div>
                    <button onClick={() => move("w")}>West</button>
                    <button onClick={() => move("e")}>East</button>
                </div>
                <button onClick={() => move("s")}>South</button>
            </div>
            <p>{message}</p>
        </div>
    )
}

export default Map;