import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { lawyercontext } from '../context/lawyercontext';
import lawyerapi from '../api/lawyerapi';

const UpdateLawyer = (props) => {

    const {id} = useParams();
    let history = useHistory()
    const {lawyer} = useContext(lawyercontext)

    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [lid, setlid] = useState("")
    const [pnum, setpnum] = useState("")
    const [addr, setaddr] = useState("")
    const  [dob, setdob] = useState("")
    const [ssn, setssn] = useState("")
    const [desc, setdesc] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const response = await lawyerapi.get(`/${id}`)
            console.log(response.data.data)
            setfname(response.data.data.lawyer.l_firstname)
            setlname(response.data.data.lawyer.l_lastname)
            setlid(response.data.data.lawyer.l_lawyerid)
            setaddr(response.data.data.lawyer.l_address)
            setpnum(response.data.data.lawyer.l_phonenumber)
            setdob(response.data.data.lawyer.l_dob)
            setssn(response.data.data.lawyer.l_ssn)
            setdesc(response.data.data.lawyer.l_description)

        }

        fetchData()
            }, []);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const updatedLawyer = await lawyerapi.put(`/${id}`, {
            l_firstname : fname,
            l_lastname : lname,
            l_lawyerid : lid,
            l_phonenumber : pnum,
            l_address : addr,
            l_dob : dob,
            l_ssn : ssn,
            l_description : desc
        })
        history.push("/")
    }
    
    return (
    <div>
        <h1></h1>
        <form action="">
            <div className='form-group'>
                <label htmlFor="fname">First Name</label>
                <input value={fname} onChange = {e => setfname(e.target.value)} id="fname" className="form-control" type="text" />
            </div>
            <div className='form-group'>
                <label htmlFor="lname">Last Name</label>
                <input value={lname} onChange = {e => setlname(e.target.value)} id="lname" className="form-control" type="text" />
            </div>
            <div className='form-group'>
                <label htmlFor="lid">Lawyer ID</label>
                <input value={lid} onChange = {e => setlid(e.target.value)} input id="lid" className="form-control" type="number" />
            </div>
            <div className='form-group'>
                <label htmlFor="pnum">Phone #</label>
                <input value={pnum} onChange = {e => setpnum(e.target.value)}id="pnum" className="form-control" type="number" />
            </div>
            <div className='form-group'>
                <label htmlFor="addr">Address</label>
                <input value={addr} onChange = {e => setaddr(e.target.value)}id="addr" className="form-control" type="text" />
            </div>
            <div className='form-group'>
                <label htmlFor="dob">DOB</label>
                <input value={dob} onChange = {e => setdob(e.target.value)}id="dob" className="form-control" type="date" />
            </div>
            <div className='form-group'>
                <label htmlFor="ssn">SSN</label>
                <input value={ssn} onChange = {e => setssn(e.target.value)} id="ssn" className="form-control" type="number" />
            </div>
            <div className='form-group'>
                <label htmlFor="desc">Description</label>
                <input value={desc} onChange = {e => setdesc(e.target.value)} input id="desc" className="form-control" type="text" />
            </div>
            <button type="submit" onClick = {handleSubmit}className='btn btn-primary'>Submit</button>
        </form>
    </div>
  )
}

export default UpdateLawyer