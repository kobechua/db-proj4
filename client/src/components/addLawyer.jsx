import React, { useContext, useState } from 'react'
import lawyerapi from '../api/lawyerapi'
import { lawyercontext } from '../context/lawyercontext'

const AddLawyer = () => {
    const {addLawyer} = useContext(lawyercontext);

    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [lid, setlid] = useState("")
    const [pnum, setpnum] = useState("")
    const [addr, setaddr] = useState("")
    const  [dob, setdob] = useState("")
    const [ssn, setssn] = useState("")
    const [desc, setdesc] = useState("")

    const handleSubmit = async (e) => {
    e.preventDefault()
    try{
        const response = await lawyerapi.post("/", {
            l_firstname : fname,
            l_lastname : lname,
            l_lawyerid : lid,
            l_phonenumber : pnum,
            l_address : addr,
            l_dob : dob,
            l_ssn : ssn,
            l_description : desc

        })
        addLawyer(response.data.data.lawyer)
        console.log(response)
    } catch (err){

    }
   }
  return (
    <div>
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
                        <input values = {lid} onChange={e => setlid(e.target.value)} className="form-control" type="text" placeholder="Lawyer ID"/>
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
                   
                    <button onClick = {handleSubmit} type="submit" className = 'btn btn-primary'>Add</button>

                    <div className="col">
                        <select className="custom-select m1 mr-sm-2">
                            <option disabled> Select Choice</option>
                            <option value="Lawyer">Lawyer</option>
                            <option value="Client">Client</option>
                            <option value="Case">Case</option>
                            <option value="Court">Court</option>
                        </select>
                    </div>
                    
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddLawyer