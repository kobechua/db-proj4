import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { lawyercontext } from '../context/lawyercontext';
import casesapi from '../api/casesapi';

const UpdateCases = (props) => {

    const {id} = useParams();
    let history = useHistory()
    const {cases} = useContext(lawyercontext)

    const [cnum, setcnum] = useState("")
    const [lid, setlid] = useState("")
    const [cid, setcid] = useState("")
    const [crid, setcrid] = useState("")
    const  [date, setdate] = useState("")
    const [desc, setdesc] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const response = await casesapi.get(`/${id}`)
            console.log(response.data.data)
            setcnum(response.data.data.cases.cs_casenumber)
            setlid(response.data.data.cases.cs_lawyerid)
            setcid(response.data.data.cases.cs_clientid)
            setcrid(response.data.data.cases.cs_courtid)
            setdate(response.data.data.cases.cs_date)
            setdesc(response.data.data.cases.cs_description)

        }

        fetchData()
            }, []);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const updatedCases = await casesapi.put(`/${id}`, {
            cs_casenumber : cnum,
            cs_lawyerid : lid,
            cs_clientid : cid,
            cs_courtid : crid,
            cs_date : date,
            cs_description : desc
        })
        history.push("/cases")
    }
    
    return (
    <div className='container'>
        <h1></h1>
        <form action="">
            <div className='form-group'>
                <label htmlFor="cnum">Case Number</label>
                <input value={cnum} onChange = {e => setcnum(e.target.value)} id="cnum" className="form-control" type="number" />
            </div>
            <div className='form-group'>
                <label htmlFor="lid">Lawyer ID</label>
                <input value={lid} onChange = {e => setlid(e.target.value)} id="lid" className="form-control" type="number" />
            </div>
            <div className='form-group'>
                <label htmlFor="cid">Client ID</label>
                <input value={cid} onChange = {e => setcid(e.target.value)} input id="cid" className="form-control" type="number" />
            </div>
            <div className='form-group'>
                <label htmlFor="crid">Client ID</label>
                <input value={crid} onChange = {e => setcid(e.target.value)} input id="crid" className="form-control" type="number" />
            </div>
            <div className='form-group'>
                <label htmlFor="date">Date</label>
                <input value={date} onChange = {e => setdate(e.target.value)}id="date" className="form-control" type="text" />
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

export default UpdateCases