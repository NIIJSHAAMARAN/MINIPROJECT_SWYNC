import React from 'react'
import '../css/BookingSuccess.css';
import { FaArrowRight } from "react-icons/fa";
import '../css/RequestMessagepage.css';
import { Link } from 'react-router-dom';
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaClock } from "react-icons/fa6";
import { MdArrowBackIosNew } from "react-icons/md";
function RequestMessagepage() {
  return (
    <div><Link to='/Swap-$loTs'><MdArrowBackIosNew className='backArrow'/></Link>
    <div className='booking-success-main-container'>
      <button className='btn-request-sent'>Requests Sent</button>
      <Link to='/Received-Requests-page'><button className='btn-request-recieved'>Requests Received</button></Link>
      <div className="centerDiv">
        <div className="leftRectangle"><MdOutlineCalendarMonth /><br /><FaClock /></div>
        <FaArrowRight className='Arrow' />
        <div className="rightRectangle"><MdOutlineCalendarMonth /><br /><FaClock /></div>
      </div>
      <div className="centerSpace">Status-Pending</div>
      <Link to='/patient-home'><button className="homepageButton">Homepage</button></Link>
    </div>
    </div>
     
  )
}

export default RequestMessagepage