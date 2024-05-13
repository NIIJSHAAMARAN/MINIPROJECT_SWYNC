import React from 'react';
import '../css/DoctorPage.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
// import '../css/Calender.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdArrowBackIosNew } from "react-icons/md";
function DoctorPage() 
{
    // Function to generate an array of 30 dates starting from the current date
    const generateDates = () => {
        const currentDate = new Date();
        const dates = [];
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ]
        for (let i = 1; i < 30; i++) {
            const date = new Date();
            const currentDayOfMonth = currentDate.getDate();
            date.setDate(currentDayOfMonth + i);
            dates.push(date);
        }

        return dates;
    };



    const getCurrentMonthYear = () => {
        const currentDate = new Date();
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();
        return `${month} ${year}`;
    };

 
    const renderCalendar = () => {
        const dates = generateDates();
        const currentDayOfWeek = new Date().getDay(); // Get the current day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
      
        // Create an array of arrays to represent rows and columns
        const rows = [];
        let currentRow = [];
      
        // Iterate through the dates array and create table cells
        dates.forEach((date, index) => {
          const currentDayOfMonth = date.getDate();
          const dayOfWeek = date.getDay();
      
          if (dayOfWeek === 0 && index !== 0) {
            // Start a new row on Sundays
            rows.push(currentRow);
            currentRow = [];
          }
      
          // Only add table cells for the current day of the week
          if (dayOfWeek === currentDayOfWeek) {
            currentRow.push(
              <td key={index}>
                {currentDayOfMonth}
              </td>
            );
          }
        });
      
        // Push the last row
        if (currentRow.length > 0) {
          rows.push(currentRow);
        }
      
        // Render the calendar table
        return (
          <table className='table-calendar'>
            <thead>
              <tr>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    < br />
              {rows.map((row, rowIndex) => (
                <td key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <React.Fragment key={cellIndex}>
                      {cell}
                    </React.Fragment>
                  ))}
                </td>
              ))}
              </tr>
            </tbody>
          </table>
        );
      };

      
      
      

    return (
      <div><Link to='/Cardiology'><MdArrowBackIosNew className='backArrow' /> </Link>
        <div className="doctor-page-div-container">
            <div className="doctor-info">
                <div className="doctor-photo-page"></div>
                <div className="doctor-name-page">Dr. John Doe</div>
            </div>
            <div className="appointment-section-doctor">
                <div className="calendar-appointment-for-patient">
                    <h5 className='heading-time-slots'> Available Dates </h5>
                    <h3>{getCurrentMonthYear()}</h3>
                    {renderCalendar()}
                </div>
                <div className="h5-heading-doctorpage">
                    <h5 className='heading-time-slots'> SLOTS</h5>
                </div>
                <div className="schedule-time-for-patient">
                    {/* Time slots */}
                    <div className="time-slot-available">9:00 AM</div>
                    <div className="time-slot-available">10:00 AM</div>
                    <div className="time-slot-available">11:00 AM</div>
                    <div className="time-slot-available">12:00 PM</div>
                    <div className="time-slot-available">1:00 PM</div>
                    <div className="time-slot-available">2:00 PM</div>
                    <div className="time-slot-available">3:00 PM</div>
                    <div className="time-slot-available">4:00 PM</div>
                    <div className="time-slot-available">5:00 PM</div>

                </div>
            </div>
            <Link to="/PatientPreviewPage">
                <button className="button-continue-booking">Continue Booking</button></Link>
        </div>
        </div>
    )
}

export default DoctorPage;


