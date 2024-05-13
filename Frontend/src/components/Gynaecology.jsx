import React from 'react'
import { Link } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
function Gynaecology() {
  return (
    <div><Link to='/patient-home'><MdArrowBackIosNew className='backArrow'/></Link>
    <div className='each-department-page-main-container'>
      <div className='middle-container-department'>
        <h2 className='heading-cardiology'>Gynaecology</h2>
      <div className='dept-doctor-details-div'>
      <h4 className='doctor-name-cardiology'>Doctor 1(2 yr Exp)</h4>
        <div className="image-container-doctor-department">
        <img src={""}
            alt="Doctor 1"
          />
          
        </div>
        <Link to="/DoctorPage">
        <button className="button-book-appointment-init">BOOK APPOINTMENT</button></Link>
        <h4 className='doctor-name-cardiology'>Doctor 1(2 yr Exp)</h4>
      </div>
      <div className='dept-doctor-details-div'>
        <div className="image-container-doctor-department">
        <img src={""}
            alt="Doctor 2"
          />
        </div>
        <Link to="/DoctorPage">
        <button className="button-book-appointment-init">BOOK APPOINTMENT</button></Link>
        <h4 className='doctor-name-cardiology'>Doctor 2(2 yr Exp)</h4>
      </div>
      <div className='dept-doctor-details-div'>
        <div className="image-container-doctor-department">
        <img src={""}
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

export default Gynaecology