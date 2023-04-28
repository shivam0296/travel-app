import React, { useEffect, useState } from 'react'
import APIService from './APIService';
import Popup from 'reactjs-popup';
import './form.css'

function Form(props) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");

    const [contact, setContact] = useState(false);
   

    function updateTrip(){
        APIService.updateTrip(props.trips.id, {firstname, lastname, source, destination})
        .then(resp => props.updateData(resp))
        .then(error => console.log(error))
    }

    useEffect(() => {
        setFirstname(props.trips.firstname)
        setLastname(props.trips.lastname)
        setSource(props.trips.source)
        setDestination(props.trips.destination)
    }, [props.trips])

    function insertTrip(){
        APIService.insertTrip({firstname, lastname, source, destination})
        .then(resp => props.insertedTrip(resp))
        .catch(error => console.log(error))
    }

    function insert_formFalse(){
        insertTrip();
        props.addFalse();
    }

    function sendContact() {
        setContact(true);
    }

  return (
    <div className='form'>
        {props.trips && props.addform? (
            <div className='mb-3'>
                <label htmlFor = "First Name" className='form-label'>First Name</label>
                <input type='text' className='form-control' placeholder='Please enter first name' value={firstname} 
                onChange={(e) => setFirstname(e.target.value)}></input>

                <label htmlFor = "Last Name" className='form-label'>Last Name</label>
                <input type='text' className='form-control' placeholder='Please enter last name'
                value={lastname} 
                onChange={(e) => setLastname(e.target.value)}></input>

                <label htmlFor = "Source" className='form-label'>Source</label>
                <input type='text' className='form-control' placeholder='Please enter Source'
                value={source} 
                onChange={(e) => setSource(e.target.value)}></input>

                <label htmlFor= "Destination" className='form-label'>Destination</label>
                <input type='text' className='form-control' placeholder='Please enter Destination'
                value={destination} 
                onChange={(e) => setDestination(e.target.value)}></input>

                {contact?<p>You have a quote from {lastname}</p>:<></>}

                {props.trips.id?<button className='btn btn-success mt-3' onClick={updateTrip}> Update </button>
                :<button className='btn btn-success mt-3' onClick={insert_formFalse}> Add </button>}
            </div>
        ): null}
    </div>
  )
}

export default Form