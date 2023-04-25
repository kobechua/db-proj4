import React from 'react'
import LoginButton from '../components/LoginButton'


const login = () => {
  return (
    <div className="container-xl">
        <h1 className="font-weight-light display-1 text-center">
            Welcome to LawFirmDB!
        </h1>
        <div className="d-flex justify-content-center">
        <LoginButton />
        </div>      
    </div>
  )
}

export default login