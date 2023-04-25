import React from 'react'
import { Link } from 'react-router-dom'

const homec = () => {
    return (
        <div>
            <h1 className="font-weight display-1 text-right">
                LawFirmDB
            </h1>
            <div className="mb-4 mt-5 text-center">
                <Link to="/lawyer"><button className='btn  btn-outline-dark btn-block'>Lawyer</button></Link>
            </div>
            <div className="mb-4 mt-5 text-center">
                <Link to="/client"><button className='btn btn-outline-dark btn-block'>Client</button></Link>
            </div>
            <div className="mb-4 mt-5 text-center">
                <Link to="/cases"><button className='btn btn-outline-dark btn-block'>Case</button></Link>
            </div>
            <div className="mb-4 mt-5 text-center">
                <Link to="/court"><button className='btn btn-outline-dark btn-block'>Court</button></Link>
            </div>
        </div>
    )
}

export default homec