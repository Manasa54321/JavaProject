import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditCamp() {
    let navigate = useNavigate();

    const { id } = useParams();
  
    const [user, setUser] = useState({
      name: "",
      username: "",
      email: "",
    });
  
    const { date, day, time,venue } = user;
  
    const onInputChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    useEffect(() => {
      loadUser();
    }, []);
  
    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.put(`http://localhost:8080/bloodDonation/${id}`, user);
      navigate("/");
    };
  
    const loadUser = async () => {
      const result = await axios.get(`http://localhost:8080/bloodDonation/${id}`);
      setUser(result.data);
    };
  return (
    <div className='container'>
    <div className='row'>
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

      <div className='text center'>Add Blood Donation Camp</div>
      <form onSubmit={(e)=>onSubmit(e)}>
        <div className='mb-3'>
          <label htmlFor='date' className='form-label'>Date</label>
          <input type={"date"} className='form-control'
          placeholder='Select Date' name='date' value={date}
          onChange={(e)=>onInputChange(e)}/>
        </div>
        <div className='mb-3'>
          <label htmlFor='time' className='form-label'>Time</label>
          <input type={'text'} className='form-control'
          placeholder='Enter time' name='time' value={time}
          onChange={(e)=>onInputChange(e)}/>
        </div>
        <div className='mb-3'>
          <label htmlFor='time' className='form-label'>Time</label>
          <input type={'text'} className='form-control'
          placeholder='Enter time' name='time' value={time}
          onChange={(e)=>onInputChange(e)}/>
        </div>
        <div className='mb-3'>
          <label htmlFor='day' className='form-label'>Day</label>
          <input type={'text'} className='form-control'
          placeholder='Enter time' name='day' value={day}
          onChange={(e)=>onInputChange(e)}/>
        </div>
        <div className='mb-3'>
          <label htmlFor='venue' className='form-label'>Venue</label>
          <input type={'text'} className='form-control'
          placeholder='Enter venue' name='venue' value={venue}
          onChange={(e)=>onInputChange(e)}/>
        </div>
        <button type="submit" className='btn btn-outline-primary'>Submit</button>
        <Link className="btn btn-outline-danger mx-2" to="/">
            Cancel
          </Link>
      </form>
    </div>
      
  </div>
  </div>
  )
}
