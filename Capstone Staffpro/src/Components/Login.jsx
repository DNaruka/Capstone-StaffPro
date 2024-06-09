import React, { useState } from 'react'
import './Login.scss'
import axios from 'axios'

const Login = () => {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3000/Login/auth/adminlogin', values)
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

  return (
    <div className='loginPage'>
        <div className='loginPage__form'>
            <h2>Login Page</h2>
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

export default Login