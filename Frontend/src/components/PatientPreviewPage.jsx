import React from 'react'
import { useState } from 'react';
import {Link} from "react-router-dom";
import '../css/PatientPreviewPage.css';
import { MdArrowBackIosNew } from "react-icons/md";

function PatientPreviewPage() {
    const [patient, setPatient] = useState({
        name: 'John Doe',
        age: 30,
        gender: 'Male'
    });

    const handleBookAppointment = () => {
        // Add your booking logic here
        console.log("Appointment booked!");
    };
  return (
    <div><Link to='/patient-home'><MdArrowBackIosNew className='backArrow'/></Link>
    <div className="container-patient-preview">
            <div>
                <span className="calendar-symbol-in-patient-preview">&#128197;</span>
                <span>Picked Date: April 30, 2024 (Monday)</span>
                <span className="clock-symbol-in-patient-preview">&#128340;</span>
                <span>Picked Time: 10:00 AM</span>
            </div>
            <div className="patient-details-preview-booking">
                <div>
                    <label htmlFor="patient-name-preview-booking">Name</label>
                    <div className="display-space-preview-booking" id="patient-name">{patient.name}</div>
                </div>
                <div>
                    <label htmlFor="patient-age-preview-booking">Age</label>
                    <div className="display-space-preview-booking" id="patient-age">{patient.age}</div>
                </div>
                <div>
                    <label htmlFor="patient-gender-preview-booking">Gender</label>
                    <div className="display-space-preview-booking" id="patient-gender">{patient.gender}</div>
                </div>
            </div>
            <Link to="/BookingSuccess">
            <button className="button-in-book-preview" onClick={handleBookAppointment}>Book</button></Link>
        </div>
    </div>
  )
}

export default PatientPreviewPage