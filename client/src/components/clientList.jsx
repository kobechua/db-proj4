import React, {useContext, useEffect} from 'react'
import clientapi from '../api/clientapi'
import { lawyercontext } from '../context/lawyercontext'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


const ClientList = () => {
    const {clients, setclients} = useContext(lawyercontext)
    let history = useHistory()
        useEffect(() => {
            const fetchData = async () => {
                try{
                    const response = await clientapi.get("/")
                    setclients(response.data.data.client)
                } catch (err) {
                    console.log(err)
                }
            }
            fetchData()
        }, [])

    const handleDelete = async (id) => {
        try {
            const response = await clientapi.delete(`/${id}`)
            setclients(clients.filter(client => {
                return client.cl_clientid !== id
            }))
            console.log(response)
        } catch (err) {
            
        }
    }

    const handleUpdate = (id) => {
        history.push(`/client/${id}/update`)
    }
        
    return (
    <div className="list-group container">
        <table className="table table-hover table-striped">
            <thead>
                <tr className="">
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Client ID</th>
                    <th scope="col">Phone #</th>
                    <th scope="col">Address</th>
                    <th scope="col">DOB</th>
                    <th scope="col">SSN</th>
                    <th scope="col">Description</th>
                    <th scope="col"></th>
                    <th scope="col"></th>

                </tr>
            </thead>
            <tbody>

                {clients.map(client => {
                    return (   <tr key= {client.cl_clientid}>
                            <td>{client.cl_firstname}</td>
                            <td>{client.cl_lastname}</td>
                            <td>{client.cl_clientid}</td>
                            <td>{client.cl_phonenumber}</td>
                            <td>{client.cl_address}</td>
                            <td>{client.cl_dob}</td>
                            <td>{client.cl_ssn}</td>
                            <td>{client.cl_description}</td>
                            <td>
                                <button onClick = {() => handleUpdate(client.cl_clientid)} className="btn btn-warning">Edit</button>
                            </td>
                            <td>
                                <button onClick = {() => handleDelete(client.cl_clientid)} className="btn btn-danger">Delete</button>
                            </td>

                            </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default ClientList