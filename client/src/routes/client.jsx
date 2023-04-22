import React from 'react'
import Header from "../components/Header"
import AddClient from "../components/addClient"
import ClientList from '../components/clientList';
import Navbar from '../components/navbar'

const client = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <h1 className="font-weight-light display-1 text-center">
            Clients
        </h1>
    </div>
      <AddClient/>
      <ClientList/>
    </div>
  )
}

export default client