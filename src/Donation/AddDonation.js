import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../AuthContext';
import clothesImage from '../images/clothes.jpg'
import booksImage from '../images/books.jpg';
import healthImage from '../images/health.jpg';
import educationImage from '../images/education.jpg';

export const AddDonation = () => {
  const { authState } = useContext(AuthContext);
  const [donation, setDonation] = useState({
    amount: '',
    description: '',
    donationDate: new Date().toISOString().slice(0, 19),  // Format for LocalDateTime
    user: { id: authState.userId }  // Referencing the current user's ID
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (authState.userId === 0) {
      alert('Please login first!');
      navigate('/login');  // Redirect to login page if not logged in
    }
  }, [authState.userId, navigate]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setDonation({ ...donation, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/donations', donation);
      navigate('/');  // Redirect to home page or donations list
    } catch (error) {
      console.error('Error adding donation', error);
      alert('There was an error adding the donation');
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Donation</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="amount" className="form-label">Amount</label>
              <input
                type="number"
                className="form-control"
                id="amount"
                name="amount"
                value={donation.amount}
                onChange={onInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={donation.description}
                onChange={onInputChange}
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="donationDate" className="form-label">Donation Date</label>
              <input
                type="datetime-local"
                className="form-control"
                id="donationDate"
                name="donationDate"
                value={donation.donationDate}
                onChange={onInputChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-danger mx-2" onClick={() => navigate('/')}>
              Cancel
            </button>
          </form>
        </div>
      </div>
      <div className="row mt-5"></div>
      <div className="row mt-4">
        <div className="col-md-3">
          <div className="card">
            <img src={clothesImage} className="card-img-top" alt="Donate clothes" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div className="card-body">
              <h5 className="card-title">Donate Clothes</h5>
              <p className="card-text">Your clothing donations can help those in need.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src={booksImage} className="card-img-top" alt="Donate books" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div className="card-body">
              <h5 className="card-title">Donate Books</h5>
              <p className="card-text">Give the gift of knowledge by donating books.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src={healthImage} className="card-img-top" alt="Donate for health" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div className="card-body">
              <h5 className="card-title">Donate for Health</h5>
              <p className="card-text">Support health initiatives by making a donation.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src={educationImage} className="card-img-top" alt="Donate for education" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div className="card-body">
              <h5 className="card-title">Donate for Education</h5>
              <p className="card-text">Help provide education opportunities for all.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5"></div>
      <div className="row mt-4">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">NGO Account Information</h2>
          <div className="card">
            <div className="card-body">
              {/* <h5 className="card-title">Account Details</h5> */}
              <div className="account-info">
                <div className="info-item">
                  <p className="label">Account Name:</p>
                  <p className="info">Your NGO Account Name</p>
                </div>
                <div className="info-item">
                  <p className="label">Account Number:</p>
                  <p className="info">XXXXXXXXXX</p>
                </div>
                <div className="info-item">
                  <p className="label">Bank Name:</p>
                  <p className="info">Your Bank Name</p>
                </div>
                <div className="info-item">
                  <p className="label">Address:</p>
                  <p className="info">Your Bank Address</p>
                </div>
                <div className="info-item">
                  <p className="label">Branch Code:</p>
                  <p className="info">XXXX</p>
                </div>
                <div className="info-item">
                  <p className="label">IFSC Code:</p>
                  <p className="info">XXXX0000000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDonation;
