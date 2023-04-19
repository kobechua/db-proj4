import React from 'react'
import Header from "../components/Header"
import AddLawyer from "../components/addLawyer"
import LawyerList from '../components/lawyerList';

const home = () => {
  return (
    <div>
        <Header />
        <AddLawyer/>
        <LawyerList/>
    </div>
  )
};

export default home;