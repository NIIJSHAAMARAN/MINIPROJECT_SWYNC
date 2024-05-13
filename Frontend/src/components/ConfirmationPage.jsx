import React from 'react'
import '../css/RequestMessagepage.css';
import { Link } from 'react-router-dom';
import { MdArrowBackIosNew } from "react-icons/md";
function ConfirmationPage() {
  return (
    <div><Link to='/Received-Requests-page'><MdArrowBackIosNew className='backArrow'/></Link>
    <div className='booking-success-main-container'>
    <Link to='/RequesT-Me$s@geBox'><button className='btn-request-sent'>Requests Sent</button></Link>
      <button className='btn-request-recieved'>Requests Received</button>
      <h3>Doctor 1</h3>
      <div className="centerDiv-confirm">
        <h2>Confirm Swapping</h2>
        <Link to='/$lot-SwappeD-Message'><button className='swap-btn'>Swap</button></Link>
        <button className='cancel-btn'>Cancel</button>
        </div>
        <Link to='/patient-home'><button className='btn-home'>Go To Home</button></Link>
    </div>
    </div>
  )
}

export default ConfirmationPage