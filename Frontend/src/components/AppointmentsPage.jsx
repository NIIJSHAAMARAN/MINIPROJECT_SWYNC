import React from 'react'
import { MdArrowBackIosNew } from "react-icons/md";
import '../css/AppointmentsPage.css';
import { PiStethoscopeBold } from "react-icons/pi";
import { FaClock } from "react-icons/fa";
import { FaHospitalUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
function AppointmentsPage() {
  return (
    <div>
        <div>
          <div> <Link to='/Menu-page'><MdArrowBackIosNew className='backArrow'/></Link></div>
         
          <div className='div-pending-request-h'> Pending Requests </div> 
          <div><h1>Appointments</h1></div> 
          <div className='main-current-history'>
            <div className='current'><button className='btn'><h2>Current</h2></button></div>
            <div className='history'><button className='btn'><h2>History</h2></button></div>
          </div>
          <div className='centered-contaner-appointments'>
            <div className='day-current'><PiStethoscopeBold className='appointment-current' /><FaClock className='appointment-current' /><FaHospitalUser className='appointment-current' />
            </div>
            <Link to='/Swap-$loTs' > <button className='link-swap-submit'>Swap Appointment</button></Link>
            
          </div>
        </div>
    </div>
  )
}

export default AppointmentsPage