// import React from 'react'
// import '../css/HomePage.css';
// import PatientImg from "../Images/default-avatar-profile-picture-male-icon.png"

// import { Link } from "react-router-dom";

// function HomePage() {
//   return (
//     <div>
//       <div className='home-patient-name-div-container'>
    
      
//       <div className='home-page-image-container-div'>
//       <h1 className='name-patient'>NAME</h1>
//         <div className="image-container ">
      

//           <img
//             className="round-image"
//             src={PatientImg}
//             alt="Doctor 1"
//           />
//         </div>
//         </div>
//       </div>
//       <div className="centered-container">
//         <h2 className='homepage-available-booking-heading'>Available Bookings</h2>
//         <div className='middle-container-homepage'>
//           <Link to="/Cardiology">
//             <button className='home-page-button'>Cardiology</button>

//           </Link>
//           <Link to="/Opthalmology" >
//             <button className='home-page-button'>Opthalmology</button></Link>

//           <Link to="/Gynaecologyt">
//             <button className='home-page-button'>Gynaecology</button></Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HomePage;


import React from 'react';
import '../css/HomePage.css';
import PatientImg from "../Images/default-avatar-profile-picture-male-icon.png";
import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";

function HomePage() {
  return (
    <div>
      <Link to='/Menu-page'><MdOutlineMenu className='MenuBar-style-homepage' /></Link>
      <div className='home-patient-name-div-container'>
        <div className='home-page-image-container-div'>
          <div className="image-container">
            <img
              className="round-image"
              src={PatientImg}
              alt="Doctor 1"
            />
          </div>
        </div>
        <div className='name-container'>
          <h1 className='name-patient'>NAME</h1>
        </div>
      </div>
      <div className="centered-container">
        <h2 className='homepage-available-booking-heading'>Available Bookings</h2>
        <div className='middle-container-homepage'>
          <Link to="/Cardiology">
            <button className='home-page-button'>Cardiology</button>
          </Link>
          <Link to="/Opthalmology">
            <button className='home-page-button'>Opthalmology</button>
          </Link>
          <Link to="/Gynaecologyt">
            <button className='home-page-button'>Gynaecology</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
