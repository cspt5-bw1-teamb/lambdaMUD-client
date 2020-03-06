import React, {useState, useEffect} from 'react'
import axios from 'axios'
import MapRoom from './MapRoom'

const Map = () => {

    const [roomList, setRoomList] = useState([])
    const [direction, setDirection] = useState("n_to")
    const [currentRoomId, setCurrentRoomId] = useState("")
    const [message, setMessage] = useState("")

    useEffect(() => {
        const initPlayer = async () => {
            await axios.get('https://cspt5-bw1-teamb-master.herokuapp.com/api/adv/init', {headers: {"Authorization": `Token ${localStorage.getItem("token")}`}})
                .then(res => {
                    setCurrentRoomId(res.data.room_id)
                })
                .catch(err => console.log(err))
        }
        const getRooms = async () => {
            await axios.get('https://cspt5-bw1-teamb-master.herokuapp.com/api/adv/rooms', {headers: {"Authorization": `Token ${localStorage.getItem("token")}`}})
                .then(res => setRoomList(res.data))
                .catch(err => console.log(err))
        }
        initPlayer()
        getRooms()
    }, [])

    const move = async move_to => {
        const currentRoom = roomList.filter(room => room.id === currentRoomId)[0]
        const nextRoom = roomList.filter(room => room.id === currentRoom[move_to + "_to"])
        if(currentRoom && currentRoom[move_to + "_to"]) {
            setMessage("")
            setCurrentRoomId(nextRoom[0].id)
        } else {
            setMessage("Can't Move That Way")
        }
        setDirection(move_to + "_to")
        await axios.post('https://cspt5-bw1-teamb-master.herokuapp.com/api/adv/move', {"direction": move_to}, {headers: {"Authorization": `Token ${localStorage.getItem("token")}`, "Content-Type": "application/json"}})
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const createMap = (rooms) => {
        if(rooms.length > 0) {
            let createdRoomCoordinates = []
            let createdRooms = []
            const createRoom = (room, x, y) => {
                createdRoomCoordinates.push(`${x},${y}`)
                createdRooms.push({room: room, x: x, y:y})
                let roomId = 0
                if(room.n_to > 0 && !createdRoomCoordinates.includes(`${x},${y+1}`)) {
                    roomId = room.n_to
                    createRoom(rooms.filter(room => room.id === roomId)[0], x, y+1)
                }
                if(room.s_to > 0 && !createdRoomCoordinates.includes(`${x},${y-1}`) ) {
                    roomId = room.s_to
                    createRoom(rooms.filter(room => room.id === roomId)[0], x, y-1)
                }
                if(room.w_to > 0 && !createdRoomCoordinates.includes(`${x-1},${y}`) ) {
                    roomId = room.w_to
                    createRoom(rooms.filter(room => room.id === roomId)[0], x-1, y)
                }
                if(room.e_to > 0 && !createdRoomCoordinates.includes(`${x+1},${y}`) ) {
                    roomId = room.e_to
                    createRoom(rooms.filter(room => room.id === roomId)[0], x+1, y)
                }
            }
            createRoom(rooms[0], 0, 0)
            return createdRooms.map(room => <MapRoom room={room} currentRoomId={currentRoomId} direction={direction}/>)
        }
    }

    return (
        <div className="map">
            {createMap(roomList)}
            <p>{roomList.length > 0 ? roomList.filter(room => room.id === currentRoomId)[0].title : null}</p>
            <p>{roomList.length > 0 ? roomList.filter(room => room.id === currentRoomId)[0].description : null}</p>
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