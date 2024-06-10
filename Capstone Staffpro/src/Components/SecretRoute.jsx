import React from 'react'
import { Navigate } from 'react-router-dom'

const SecretRoute = ({children}) => {
  return localStorage.getItem("valid") ? children : <Navigate to="/" />
}

export default SecretRoute