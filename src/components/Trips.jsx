import React, {useState, useEffect} from 'react'
import './trips.css'
import TripList from './TripList';
import Form from './Form';
import SearchTrip from './SearchTrip';

export default function Trips(){
    const [trips, setTrips]= useState([]);
    const [location, setLocation] = useState([]);
    const [update, setUpdateTrip] = useState(null);
    const [tripsearch, setSearch] = useState(false);

    const [addform, setAddForm] = useState("true");
    

    useEffect(() => {
        fetch('http://127.0.0.1:5000/get', {
            'methods': 'GET',
            headers: {
                'content-Type': 'applications/json'
            }
        })
        .then(resp => resp.json())
        .then(resp => setTrips(resp))
        .catch(error => console.log(error))
    },[])

    useEffect(() => {
        fetch('http://127.0.0.1:5000/curr_location', {
            'methods': 'GET',
            headers: {
                'content-Type': 'applications/json'
            }
        })
        .then(resp => resp.json())
        .then(resp => setLocation(resp))
        .catch(error => console.log(error))
    },[])
    
    function updateTrip(trip){
        setUpdateTrip(trip)
    }

    function updateData(trip){
        const new_trips = trips.map(my_trip => {
                if(my_trip.id === trip.id){
                    return trip
                }
                else{
                    return my_trip
                }
        })
        setUpdateTrip(new_trips)
    }

    function openForm(){
        setUpdateTrip({firstname:'', lastname:'', source:'', destination:''})
    }

    function insertedTrip(trip){
        const new_trip = [...trips, trip]
        setTrips(new_trip)
    }

    function deleteTrip(trip){
        const new_trips = trips.filter(mytrip => {
            if (mytrip.id === trip.id){
                return false
            }
            return true
        })
        setTrips(new_trips)
    }

    function search(){
        setSearch(true)
    }

    function addFalse(){
        setAddForm(false)
    }

    function addTrue(){
        setAddForm(true)
    }

    function openForm_addTrue(){
        addTrue();
        openForm();
    }

    return(
        <div className='trip'>
            <div className='theader'>Trips Created by you</div>
            <div className='location'><mark>Your current location is: {location.curr}</mark><br/>
            <div className='col'>
                <div className='btn'><button className='btn btn-success' onClick={openForm_addTrue}>Add Trip</button></div>
                <div className='btn'><button className='btn btn-primary' onClick={search}>Search Trip</button></div>
            </div>
            </div>
            {tripsearch? <SearchTrip/>:<></>}
            <div>
                <TripList trips={trips} updateTrip={updateTrip} deleteTrip={deleteTrip}/>
                {update?<Form trips={update} updateData={updateData} insertedTrip={insertedTrip} addFalse={addFalse} addform={addform}/>:null}
            </div>
        </div>
    );
}