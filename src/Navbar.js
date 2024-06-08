// Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from './AuthContext';

const Navbar = () => {
  const { authState, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-xl fixed-top navbar-scroll shadow-0" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
      <Link className="navbar-brand" to="/">NGO</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item">
            <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/adduser">Register</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/addvol">Volunteer</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/bloodcamp">BloodDonation Camps</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/vaccinecamp">Vaccination Centres</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add-donation">Donate</Link>
          </li>
          {authState.userId === 0 ? (
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          ) : (
            <li className="nav-item">
              <button className="nav-link btn" onClick={logout}>Logout</button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
