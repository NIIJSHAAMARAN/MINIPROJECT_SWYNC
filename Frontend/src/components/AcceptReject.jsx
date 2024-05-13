import React from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaClock } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import '../css/RequestMessagepage.css';
import { MdArrowBackIosNew } from "react-icons/md";
function AcceptReject() {
  return (
    <div><Link to='/RequesT-Me$s@geBox'><MdArrowBackIosNew className='backArrow'/></Link>

    <div className='booking-success-main-container'>
      <Link to='/RequesT-Me$s@geBox'><button className='btn-request-sent'>Requests Sent</button></Link>
      <button className='btn-request-recieved'>Requests Received</button>
      <div className="centerDiv">
        <div className="leftRectangle"><MdOutlineCalendarMonth /><br /><FaClock /></div>
        <FaArrowRight className='Arrow' />
        <div className="rightRectangle"><MdOutlineCalendarMonth /><br /><FaClock /></div>
      </div>
      <div>
        <Link to='/C0nf!rm-Sw@p+page'><button className='accept-button'>Accept</button></Link>
        <button className='reject-button'>Reject</button>
      </div>
      <Link to='/patient-home'><button className="homepageButton">Homepage</button></Link>
      </div>
      </div>
  )
}

export default AcceptReject