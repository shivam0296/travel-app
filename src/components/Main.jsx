import React from 'react'
import {Link} from 'react-router-dom';
import Trips from './Trips'
import './main.css'

function Main() {
  return (
    <div className='main'>
        <li><Link to="/">Tourist</Link></li>
        <li><Link to="guide">Guide</Link></li>
    </div>
  )
}

export default Main