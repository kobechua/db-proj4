import React, { useContext, useState } from 'react'
import clientapi from '../api/clientapi'
import { lawyercontext } from '../context/lawyercontext'

const AddClient = () => {
    const {addClient} = useContext(lawyercontext);

    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [cid, setcid] = useState("")
    const [pnum, setpnum] = useState("")
    const [addr, setaddr] = useState("")
    const  [dob, setdob] = useState("")
    const [ssn, setssn] = useState("")
    const [desc, setdesc] = useState("")

    const handleSubmit = async (e) => {
    e.preventDefault()
    try{
        const response = await clientapi.post("/", {
            cl_firstname : fname,
            cl_lastname : lname,
            cl_clientid : cid,
            cl_phonenumber : pnum,
            cl_address : addr,
            cl_dob : dob,
            cl_ssn : ssn,
            cl_description : desc

        })
        addClient(response.data.data.client)
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
                        <input values = {fname} onChange={e => setfname(e.target.value)} type="text" className="form-control" placeholder="First Name"/>                        
                    </div>
                    <div className="col">
                        <input values = {lname} onChange={e => setlname(e.target.value)} className="form-control" type="text" placeholder="Last Name"/>
                    </div>
                    <div className="col">
                        <input values = {cid} onChange={e => setcid(e.target.value)} className="form-control" type="text" placeholder="Client ID"/>
                    </div>
                    <div className="col">
                        <input values = {pnum} onChange={e => setpnum(e.target.value)} type="text" className="form-control" placeholder="Phone Number"/>                        
                    </div>
                    <div className="col">
                        <input values = {addr} onChange={e => setaddr(e.target.value)} className="form-control" type="text" placeholder="Address"/>
                    </div>
                    <div className="col">
                        <input values = {dob} onChange={e => setdob(e.target.value)} className="form-control" type="text" placeholder="DOB"/>
                    </div>
                    <div className="col">
                        <input values = {ssn} onChange={e => setssn(e.target.value)} type="text" className="form-control" placeholder="SSN"/>                        
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

export default AddClient