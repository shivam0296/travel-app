import React, { useState, useEffect, props} from 'react'
import "./search.css"
import SearchList from './SearchList'
import Timer from './Timer'

function SearchTrip(props) {

    const [loctrips, setLocTrips] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5000/location_trips', {
            'method': 'GET',
            headers: {
                'content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(resp => setLocTrips(resp))
        .catch(error => console.log(error))
    },[])

  return (
    <div>
        <div>
        <Timer loctrips={loctrips}/>
        </div>
    </div>
  )
}

export default SearchTrip