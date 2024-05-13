import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from '../components/HomePage';
import LoginPage from '../LoginPage';
import CreateAccountPage from '../components/CreateAccountPage';
import Cardiology from '../components/Cardiology';
import Gynaecology from '../components/Gynaecology';
import Opthalmology from '../components/Opthalmology';
import ForgotPasswordPage from '../components/ForgotPasswordPage';
import DoctoraPage from '../components/DoctorPage';
import PatientPreviewPage from '../components/PatientPreviewPage'
import BookingSuccess from '../components/BookingSuccess';
import MenuPage from '../components/MenuPage';
import AppointmentsPage from '../components/AppointmentsPage';
import SwapRequestpage from '../components/SwapRequestpage';
import RequestMessagepage from '../components/RequestMessagepage.jsx';
import AcceptReject from '../components/AcceptReject.jsx';
import ConfirmationPage from '../components/ConfirmationPage.jsx';
import SlotSuccesspage from '../components/SlotSuccesspage.jsx';
import Reset from '../components/Reset.jsx';
import Newpassword from'../components/Newpassword.jsx';
const Routers = () => {
  return (
    <Routes>

      <Route path="/" element={<LoginPage />} />
      <Route path="/patient-home" element={<HomePage />} />
      <Route path='/CreateAccountPage' element={<CreateAccountPage />} />
      <Route path="/Cardiology" element={<Cardiology />} />
      <Route path='Opthalmology' element={<Opthalmology />} />
      <Route path="/Gynaecologyt" element={<Gynaecology />} />
      <Route path='/ForgotPasswordPage' element={<ForgotPasswordPage />} />
      <Route path='/DoctorPage' element={<DoctoraPage />} />
      <Route path='/PatientPreviewPage' element={<PatientPreviewPage />} />
      <Route path='/BookingSuccess' element={<BookingSuccess />} />
      <Route path='/Menu-page' element={<MenuPage />} />
      <Route path='/Appointments-p@ge' element={<AppointmentsPage />} />
      <Route path='/Swap-$loTs' element={<SwapRequestpage />} />
      <Route path='/RequesT-Me$s@geBox' element={<RequestMessagepage />} />
      <Route path='/Received-Requests-page' element={<AcceptReject />} />
      <Route path='/C0nf!rm-Sw@p+page' element={<ConfirmationPage />} />
      <Route path='/$lot-SwappeD-Message' element={<SlotSuccesspage />} />
      <Route path='/reset-page' element={<Reset />} />
      <Route path='' element={<Newpassword />} />
    </Routes>
  )
}

export default Routers
