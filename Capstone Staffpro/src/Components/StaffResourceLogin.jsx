import React, { useState } from 'react'
import './Login.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const StaffResourceLogin = () => {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3000/staffResource/login', values)
        .then(result => {
            if(result.data.StaffResourceLoginStatus) {
                localStorage.setItem("valid", true)
                navigate('/dashboard')
            } else {
                setError(result.data.Error)
            }
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='loginPage'>
        <div className='loginPage__form'>
            <h2>Staff Resource Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='loginPage__margin'>
                    <label htmlFor='email'><strong>Email:</strong></label>
                    <input type='email' name='email' autoComplete='off' placeholder='Enter Email' onChange={(e) => setValues({...values, email: e.target.value})} className='form-control rounded-0'/>
                </div>
                <div className='loginPage__margin'>
                    <label htmlFor='password'><strong>Password:</strong></label>
                    <input type='password' name='password' placeholder='Enter Password' onChange={(e) => setValues({...values, password: e.target.value})} className='form-control rounded-0'/>
                </div>
                <button className='loginPage__custom-btn'>Login</button>
                <div className='mb-1'>
                    <input type='checkbox' name='checkbox' id='checkbox' className='me-2'/>
                    <label htmlFor='checkbox'> Click to agree with Terms & Conditions.</label>
                </div>
            </form>
        </div>
    </div>
  )
}

export default StaffResourceLogin