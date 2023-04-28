import React, {props, useState, useEffect} from 'react'
import './search.css'
import APIService from './APIService'
import Timer from './Timer'

function SearchList(props) {

    const [enroll, SetEnroll] = useState(false)

    function handleEnroll() {
        SetEnroll(true)
    }

  return (
    <div className='tripbox'>
         {props.loctrips && props.loctrips.map(loctrips => {
            return(
                <div key={loctrips.id} className='row'>
                    <h5>Date: {loctrips.datecreated} </h5>
                    <p>Frist Name: {loctrips.firstname}</p> 
                    <p> Last Name: {loctrips.lastname}</p>
                    <p>Source: {loctrips.source}</p>
                    <p>Destination: {loctrips.destination}</p>
                    <p>Email: abc@example.com</p>
                    {props.show?<></>:<p><mark>Time to enroll: {props.timer} </mark></p>}
                    {enroll? <div className='em'>Success: Your request to join the trip is sent to abc@example.com</div>:<></>}
                    <div className='row'>
                        {props.show?<div className='col-md-1'> <button className='btn btn-primary'>Contact</button></div>
                        :<div className='col-md-1'> <button className='btn btn-primary' onClick={handleEnroll}>Enroll</button></div>}
                        <div className='col-md-1'> <button className='btn btn-success' onClick={props.onClickReset}>Change</button></div>
                    </div>
                </div>
            )
        })
        }
        <hr/>
    </div>
  )
}

export default SearchList