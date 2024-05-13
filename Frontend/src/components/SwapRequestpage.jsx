import React from 'react'
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from 'react-router-dom';
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaClock } from "react-icons/fa6";
import '../css/SwapRequestPage.css';
function SwapRequestpage() {
    return (
        <div className='"doctor-page-div-container"'>
            <div> <Link to='/Appointments-p@ge'><MdArrowBackIosNew className='backArrow' /></Link></div>
            <div className="doctor-info">
                <div className="doctor-photo-page"></div>
                <div className="doctor-name-page">Dr. John Doe</div>
                <div className='cal-time-request-swap' > </div>
            </div>
            <div className='middle-container-swap'>
                <button className='request-date-time' ><MdOutlineCalendarMonth />Monday
                <br /><FaClock /> 11 Am
                </button>
                <button className='request-date-time'><MdOutlineCalendarMonth />Tuesday
                <br /><FaClock />1 Pm
                </button>
                 <div><Link to='/RequesT-Me$s@geBox'><button className='btn-request-selected-time'>Request To Swap</button></Link></div>
                <Link to='/patient-home'><button className='btn-request-home'>Go To Home</button></Link>
            </div>

        </div>

    )
}



export default SwapRequestpage