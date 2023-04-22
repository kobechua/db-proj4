import React from 'react'
import Header from "../components/Header"
import AddCases from "../components/addCases"
import CasesList from '../components/casesList';
import Navbar from '../components/navbar'

const cases = () => {
  return (
    <div>
        <Navbar />
        <div className='container'>
        <h1 className="font-weight-light display-1 text-center">
            Cases
        </h1>
    </div>
        <AddCases/>
        <CasesList/>
    </div>
  )
}

export default cases