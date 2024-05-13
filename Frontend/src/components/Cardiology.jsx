import React from 'react'
import '../css/Cardiology.css';
import { MdArrowBackIosNew } from "react-icons/md";
import doctorImg1 from "../Images/portrait-doctor.jpg"
import doctorImg2 from "../Images/doctor2.png";
import doctorImg3 from "../Images/doctor3.png"; 
import { Link } from "react-router-dom";
function Cardiology() {
  return (
    <div><Link to='/patient-home'><MdArrowBackIosNew className='backArrow'/></Link>
    <div className='each-department-page-main-container'>
      <div className='middle-container-department'>
        <h2 className='heading-cardiology'>Cardiology</h2>
      <div className='dept-doctor-details-div'>
        <div className="image-container-doctor-department">
        <img src={doctorImg1}
            alt="Doctor 1"
          />
        </div>
        <Link to="/DoctorPage">
        <button className="button-book-appointment-init">BOOK APPOINTMENT</button></Link>
        <h4 className='doctor-name-cardiology'>Doctor 1(2 yr Exp)</h4>
      </div>
      <div className='dept-doctor-details-div'>
        <div className="image-container-doctor-department">
        <img src={doctorImg2}
            alt="Doctor 2"
          />
        </div>
        <Link to="/DoctorPage">
        <button className="button-book-appointment-init">BOOK APPOINTMENT</button></Link>
        <h4 className='doctor-name-cardiology'>Doctor 2(2 yr Exp)</h4>
      </div>
      <div className='dept-doctor-details-div'>
        <div className="image-container-doctor-department">
        <img src={doctorImg3}
            alt="Doctor 3"
          />
        </div>
        <Link to="/DoctorPage">
        <button className="button-book-appointment-init">BOOK APPOINTMENT</button></Link>
        <h4 className='doctor-name-cardiology'>Doctor 3(2 yr Exp)</h4>
      </div>
      </div>
    </div>
</div>
  )
}

export default Cardiology
