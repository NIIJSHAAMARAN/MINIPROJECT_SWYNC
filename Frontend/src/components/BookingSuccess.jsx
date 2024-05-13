import React from 'react'
import '../css/BookingSuccess.css';
import tickmark from '../Images/Tickmark.png';
import { MdPerson } from "react-icons/md";
import { Link } from 'react-router-dom';
function BookingSuccess() {
  return (
    <div className='booking-success-main-container'>
      <h2 className='booking-success-message'>Booking Successful!</h2>
      <div className='image--main-container-booking-success'>
        <div className='image-container-booking-success'>
          <img src={tickmark}
            alt=""
          />
        </div>
      </div>
      <p>You have successfully booked appointment with</p>
      <h3>Doctor 1</h3>
      <div className='person-booking-successs-div'>
        __________________________________________________________________________________________
        <br />
        <span><MdPerson className='personIcon-booking-success' /> </span>
       <span> Patient 1</span><br /><br />
        <span className="calendar-symbol-in-patient-preview">&#128197;</span>
        <span>Monday</span><br /> <br />
        <span className="clock-symbol-in-patient-preview">&#128340;</span>
        <span> 10:00 AM</span><br /><br /><br /><br />
        <Link to='/patient-home'>
        <button className='Homebutton-from-success-msg'>Go To Home</button>
        </Link>
      </div>
    </div>
  )
}

export default BookingSuccess