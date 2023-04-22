import React, {useContext, useEffect} from 'react'
import casesapi from '../api/casesapi'
import { lawyercontext } from '../context/lawyercontext'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


const CasesList = () => {
    const {cases, setcases} = useContext(lawyercontext)
    let history = useHistory()
        useEffect(() => {
            const fetchData = async () => {
                try{
                    const response = await casesapi.get("/")
                    setcases(response.data.data.cases)
                } catch (err) {
                    console.log(err)
                }
            }
            fetchData()
        }, [])

    const handleDelete = async (id) => {
        try {
            const response = await casesapi.delete(`/${id}`)
            setcases(cases.filter(cases => {
                return cases.cs_casesid !== id
            }))
            console.log(response)
        } catch (err) {
            
        }
    }

    const handleUpdate = (id) => {
        history.push(`/cases/${id}/update`)
    }
        
    return (
    <div className="list-group container">
        <table className="table table-hover table-striped">
            <thead>
                <tr className="">
                    <th scope="col">Case Number</th>
                    <th scope="col">Lawyer ID</th>
                    <th scope="col">Client ID</th>
                    <th scope="col">Court ID</th>
                    <th scope="col">Date</th>
                    <th scope="col">Description</th>
                    <th scope="col"></th>
                    <th scope="col"></th>

                </tr>
            </thead>
            <tbody>

                {cases.map(cases => {
                    return (   <tr key= {cases.cs_casenumber}>
                            <td>{cases.cs_casenumber}</td>
                            <td>{cases.cs_lawyerid}</td>
                            <td>{cases.cs_clientid}</td>
                            <td>{cases.cs_courtid}</td>
                            <td>{cases.cs_date}</td>
                            <td>{cases.cs_description}</td>
                            <td>
                                <button onClick = {() => handleUpdate(cases.cs_casenumber)} className="btn btn-warning">Edit</button>
                            </td>
                            <td>
                                <button onClick = {() => handleDelete(cases.cs_casenumber)} className="btn btn-danger">Delete</button>
                            </td>

                            </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default CasesList