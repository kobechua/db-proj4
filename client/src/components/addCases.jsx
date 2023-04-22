import React, { useContext, useState } from 'react'
import casesapi from '../api/casesapi'
import { lawyercontext } from '../context/lawyercontext'

const AddCases = () => {
    const {addCases} = useContext(lawyercontext);

    const [cnum, setcnum] = useState("")
    const [lid, setlid] = useState("")
    const [cid, setcid] = useState("")
    const [crid, setcrid] = useState("")
    const  [date, setdate] = useState("")
    const [desc, setdesc] = useState("")

    const handleSubmit = async (e) => {
    e.preventDefault()
    try{
        const response = await casesapi.post("/", {
            cs_casenumber : cnum,
            cs_lawyerid : lid,
            cs_clientid : cid,
            cs_courtid : crid,
            cs_date : date,
            cs_description : desc

        })
        addCases(response.data.data.cases)
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
                        <input values = {cnum} onChange={e => setcnum(e.target.value)} type="number" className="form-control" placeholder="Case Number"/>                        
                    </div>
                    <div className="col">
                        <input values = {lid} onChange={e => setlid(e.target.value)} className="form-control" type="number" placeholder="Lawyer ID"/>
                    </div>
                    <div className="col">
                        <input values = {cid} onChange={e => setcid(e.target.value)} className="form-control" type="number" placeholder="Client ID"/>
                    </div>
                    <div className="col">
                        <input values = {crid} onChange={e => setcrid(e.target.value)} className="form-control" type="number" placeholder="Court ID"/>
                    </div>
                    <div className="col">
                        <input values = {date} onChange={e => setdate(e.target.value)} className="form-control" type="text" placeholder="Date"/>
                    </div>
                    <div className="col">
                        <input values = {desc} onChange={e => setdesc(e.target.value)} className="form-control" type="text" placeholder="Description"/>
                    </div>
                   
                    <button onClick = {handleSubmit} type="submit" className = 'btn btn-dark'>Add</button>
                    
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddCases