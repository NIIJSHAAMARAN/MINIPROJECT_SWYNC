import React , { useState } from 'react';
import '../css/CreateAccountPage.css';
import MainLayout from '../layout/MainLayout';
import { Link } from 'react-router-dom';
function CreateAccountPage() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email:'',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };
  return (
    <MainLayout>
    <div className='body'>
    <div className="centered-container-create-account ">
      <form onSubmit={handleSubmit} className="login-form">
      <h2>Create New Account</h2>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
        <label>Mobile No</label>
            <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
        <label>Email</label>
            <input
            type="tel"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
        <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
        <label>Confirm Password</label>

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <Link to='/' >
          <button type="submit" className ='btn-create-account'>SIGN UP</button>
          </Link>
        </div>
      </form>
    </div>
    </div>
    </MainLayout>
  );
}


export default CreateAccountPage;