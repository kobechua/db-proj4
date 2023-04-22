import React, { useContext, useState } from 'react'
import courtapi from '../api/courtapi'
import { lawyercontext } from '../context/lawyercontext'

const AddCourt = () => {
    const {addCourt} = useContext(lawyercontext);

    const [crid, setcrid] = useState("")
    const [crname, setcrname] = useState("")
    const [crstate, setcrstate] = useState("")
    const  [zipcode, setzipcode] = useState("")


    const handleSubmit = async (e) => {
    e.preventDefault()
    try{
        const response = await courtapi.post("/", {
            cr_courtid : crid,
            cr_courtname : crname,
            cr_courtstate : crstate,
            cr_zipcode : zipcode,

        })
        addCourt(response.data.data.court)
        console.log(response)
    } catch (err){

    }
   }
  return (
    <div className='container'>
        <div className="mb-4">
            <form action ="">
                <div className = "form-row">
                    <div className="col">
                        <input values = {crid} onChange={e => setcrid(e.target.value)} type="number" className="form-control" placeholder="Court ID"/>                        
                    </div>
                    <div className="col">
                        <input values = {crname} onChange={e => setcrname(e.target.value)} className="form-control" type="number" placeholder="Court Name"/>
                    </div>
                    <div className="col">
                        <input values = {crstate} onChange={e => setcrstate(e.target.value)} className="form-control" type="number" placeholder="Court State"/>
                    </div>
                    <div className="col">
                        <input values = {zipcode} onChange={e => setzipcode(e.target.value)} className="form-control" type="text" placeholder="Court ZipCode"/>
                    </div>
                   
                    <button onClick = {handleSubmit} type="submit" className = 'btn btn-dark'>Add</button>
                    
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddCourt