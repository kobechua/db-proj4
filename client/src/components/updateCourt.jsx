import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { lawyercontext } from '../context/lawyercontext';
import courtapi from '../api/courtapi';

const UpdateCourt = (props) => {

    const {id} = useParams();
    let history = useHistory()
    const {court} = useContext(lawyercontext)

    const [crname, setcrname] = useState("")
    const [crstate, setcrstate] = useState("")
    const [crid, setcrid] = useState("")
    const [zipcode, setzipcode] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const response = await courtapi.get(`/${id}`)
            console.log(response.data.data)
            setcrname(response.data.data.court.cr_courtname)
            setcrstate(response.data.data.court.cr_courtstate)
            setcrid(response.data.data.court.cr_courtid)
            setzipcode(response.data.data.court.cr_zipcode)

        }

        fetchData()
            }, []);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const updatedCourt = await courtapi.put(`/${id}`, {
            cr_courtname : crname,
            cr_courtstate : crstate,
            cr_courtid : crid,
            cr_zipcode : zipcode
        })
        history.push("/court")
    }
    
    return (
    <div className='container'>
        <h1></h1>
        <form action="">
            <div className='form-group'>
                <label htmlFor="crid">Court ID</label>
                <input value={crid} onChange = {e => setcrstate(e.target.value)} input id="crid" className="form-control" type="number" />
            </div>
            <div className='form-group'>
                <label htmlFor="crname">Court Name</label>
                <input value={crname} onChange = {e => setcrname(e.target.value)} id="crname" className="form-control" type="text" />
            </div>
            <div className='form-group'>
                <label htmlFor="crstate">Court State</label>
                <input value={crstate} onChange = {e => setcrstate(e.target.value)} input id="crstate" className="form-control" type="text" />
            </div>
            <div className='form-group'>
                <label htmlFor="zipcode">Court Zipcode</label>
                <input value={zipcode} onChange = {e => setzipcode(e.target.value)} input id="zipcode" className="form-control" type="number" />
            </div>
            <button type="submit" onClick = {handleSubmit}className='btn btn-primary'>Submit</button>
        </form>
    </div>
  )
}

export default UpdateCourt