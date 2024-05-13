import React from 'react';
import '../css/HomePage.css';
import PatientImg from "../Images/default-avatar-profile-picture-male-icon.png";
import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import '../css/MenuPage.css';
import { IoRemoveOutline } from "react-icons/io5";
function MenuPage() {
  return (
    <div className='Menu-main-div'>
    <div className='menu-page-div'>
    <Link to='/patient-home'> <MdOutlineMenu id='MenuBar-style-homepage' /></Link>
    <div className='div1-menupage'>
       <Link to='' className='menu-items'>Profile</Link><br />
       <Link to='/Appointments-p@ge' className='menu-items'>Appointments</Link><br />
       <Link to='/Swap-$loTs' className='menu-items'>Available Swaps</Link><br />
    </div>
    <div className='div2-menupage'>
    <Link to='' className='menu-items'>Help Centre</Link><br />
    <Link to='/' className='menu-items'>Logout</Link><br />
    </div>

    </div>
    </div>

  )
}

export default MenuPage