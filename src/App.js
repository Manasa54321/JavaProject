import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { AddVolunteer } from './volunteers/AddVolunteer';
import AddUser from './users/AddUser';
import Login from './Login';
import Navbar from './Navbar';
import { AuthProvider } from './AuthContext';
import { Home } from './Home';
import AddCamp from './bloodDonation/AddCamp';
import EditCamp from './bloodDonation/EditCamp';
import ViewCamp from './bloodDonation/ViewCamp';
import BloodCamp from './pages/BloodCamp';
import VaccineCamp from './pages/VaccineCamp';
import AddVaccine from './vaccineCamp/AddVaccine';
import EditVaccine from './vaccineCamp/EditVaccine';
import AddDonation from './Donation/AddDonation';



function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
          <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/adduser" element={<AddUser />} />
            <Route exact path="/addvol" element={<AddVolunteer />} />
            <Route exact path="/bloodcamp" element={<BloodCamp />} />
            <Route exact path="/addcamp" element={<AddCamp />} />
            <Route exact path="/editcamp/:id" element={<EditCamp />} />
            <Route exact path="/viewcamp/:id" element={<ViewCamp />} />
            <Route exact path="/vaccinecamp" element={<VaccineCamp />} />
            <Route exact path="/addvaccine" element={<AddVaccine />} />
            <Route exact path="/editvaccine/:id" element={<EditVaccine />} />
            <Route path="/add-donation" element={<AddDonation />} />
          </Routes>
        </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
