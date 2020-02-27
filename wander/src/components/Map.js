import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Map = () => {

    const [rooms, setRooms] = useState([])

    useEffect(() => {

        axios.get('https://lambda-mud-test.herokuapp.com/api/adv/rooms/', {headers: {'Authorization': `Token 013ba7e8edbbe9e2623416ea939ed403bfa2cef0`}})
            .then(res => setRooms(res.data))
            .catch(err => console.log(err))
        }
    )

    return (
        <div className="map">
            <p>Map</p>
        </div>
    )
}

export default Map;