import React from 'react'
import '../css/BookingSuccess.css';
import '../css/AppointmentsPage.css';
import { PiStethoscopeBold } from "react-icons/pi";
import { FaClock } from "react-icons/fa";
import { FaHospitalUser } from "react-icons/fa";
import '../css/RequestMessagepage.css';
import { Link } from 'react-router-dom';
function SlotSuccesspage() {
  return (
    <div className='booking-success-main-container'>
      <h2 className='booking-success-message'>Slots Swapped</h2>
  
      <div className='centered-contaner-appointments'>
            <div className='day-current'>M<br />O<br />N <br />D <br />A <br />Y<PiStethoscopeBold className='appointment-current' /><FaClock className='appointment-current' /><FaHospitalUser className='appointment-current' />
            </div>
        </div>
        <Link to='/patient-home'><button className='btn-home'>Go To Home</button></Link>
        </div>
        
  )
}

export default SlotSuccesspage