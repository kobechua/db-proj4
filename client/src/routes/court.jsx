import React from 'react'
import Header from "../components/Header"
import AddCourt from "../components/addCourt"
import CourtList from '../components/courtList';
import Navbar from '../components/navbar'

const court = () => {
  return (
    <div>
        <Navbar />
        <div className='container'>
        <h1 className="font-weight-light display-1 text-center">
            Courts
        </h1>
    </div>
        <AddCourt/>
        <CourtList/>
    </div>
  )
}

export default court