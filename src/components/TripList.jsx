import React from 'react'
import './triplist.css'
import APIService from './APIService'

function TripList(props) {

    function updateTrip(trips) {
        props.updateTrip(trips)
    }

    function deleteTrip(trips){
        APIService.deleteTrip(trips.id)
        .then(() => props.deleteTrip(trips))
    }

  return (
    <div className='tripbox'>
         {props.trips && props.trips.map(trips => {
            return(
                <div key={trips.id} className='row'>
                    <h5>Date: {trips.datecreated} </h5>
                    <p>Frist Name: {trips.firstname}</p> 
                    <p> Last Name: {trips.lastname}</p>
                    <p>Source: {trips.source}</p>
                    <p>Destination: {trips.destination}</p>
                    <div className='row'>
                       <div className='col-md-1'> <button className='btn btn-primary' onClick={() => updateTrip(trips)}>Update</button></div>
                        <div className='col'><button className='btn btn-danger'
                        onClick={() => deleteTrip(trips)}>Delete</button></div>
                    </div>
                </div>
            )
        })
        }
    </div>
  )
}

export default TripList