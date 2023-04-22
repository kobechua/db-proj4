import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { lawyercontext } from '../context/lawyercontext';
import clientapi from '../api/clientapi';

const UpdateClient = (props) => {

    const {id} = useParams();
    let history = useHistory()
    const {client} = useContext(lawyercontext)

    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [cid, setcid] = useState("")
    const [pnum, setpnum] = useState("")
    const [addr, setaddr] = useState("")
    const  [dob, setdob] = useState("")
    const [ssn, setssn] = useState("")
    const [desc, setdesc] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const response = await clientapi.get(`/${id}`)
            console.log(response.data.data)
            setfname(response.data.data.client.cl_firstname)
            setlname(response.data.data.client.cl_lastname)
            setcid(response.data.data.client.cl_clientid)
            setaddr(response.data.data.client.cl_address)
            setpnum(response.data.data.client.cl_phonenumber)
            setdob(response.data.data.client.cl_dob)
            setssn(response.data.data.client.cl_ssn)
            setdesc(response.data.data.client.cl_description)

        }

        fetchData()
            }, []);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const updatedClient = await clientapi.put(`/${id}`, {
            cl_firstname : fname,
            cl_lastname : lname,
            cl_clientid : cid,
            cl_phonenumber : pnum,
            cl_address : addr,
            cl_dob : dob,
            cl_ssn : ssn,
            cl_description : desc
        })
        history.push("/client")
    }
    
    return (
    <div className='container'>
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
                <label htmlFor="cid">Client ID</label>
                <input value={cid} onChange = {e => setcid(e.target.value)} input id="cid" className="form-control" type="number" />
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
                <input value={dob} onChange = {e => setdob(e.target.value)}id="dob" className="form-control" type="text" />
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

export default UpdateClient