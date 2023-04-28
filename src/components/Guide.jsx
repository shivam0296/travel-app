import React, {useState, props, useEffect} from 'react'
import './guide.css'
import SearchList from './SearchList'
import { faUnlock } from '@fortawesome/free-solid-svg-icons'
import TripList from './TripList'

function Guide() {
    const [loctrips, setLocTrips] = useState([])
    const [show, setShow] = useState(false)
    const [filteredData, setFilteredData] = new useState(loctrips);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/guide', {
            'method': 'GET',
            headers: {
                'content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(resp => setLocTrips(resp))
        .catch(error => console.log(error))
    },[])

    function handleShow(){
        setShow(true)
    }


  return (
    <div>
        <div className='gheader'>Tourist Guide Page, Find nearby tourist here</div>
        <div className='show'><button className='btn btn-success' onClick={handleShow}>Show Trips</button></div>
        {show?
        <div className='show'>
            <div className='text'>Fetching trips for your destination....</div>
             <SearchList loctrips={loctrips} show={show} filteredData={filteredData}></SearchList>
            
        </div>
        :
        <></>
        }
    </div>
  )
}

export default Guide