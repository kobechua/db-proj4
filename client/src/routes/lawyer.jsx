import React from 'react'
import Header from "../components/Header"
import AddLawyer from "../components/addLawyer"
import LawyerList from '../components/lawyerList';
import Navbar from '../components/navbar'


const lawyer = () => {
  return (
    <div>
        <Navbar />
        <div className='container'>
        <h1 className="font-weight-light display-1 text-center">
            Lawyers
        </h1>
    </div>
        <AddLawyer/>
        <LawyerList/>
    </div>
  )
}

export default lawyer