import React, {useContext, useEffect} from 'react'
import courtapi from '../api/courtapi'
import { lawyercontext } from '../context/lawyercontext'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


const CourtList = () => {
    const {courts, setcourts} = useContext(lawyercontext)
    let history = useHistory()
        useEffect(() => {
            const fetchData = async () => {
                try{
                    const response = await courtapi.get("/")
                    setcourts(response.data.data.court)
                } catch (err) {
                    console.log(err)
                }
            }
            fetchData()
        }, [])

    const handleDelete = async (id) => {
        try {
            const response = await courtapi.delete(`/${id}`)
            setcourts(courts.filter(court => {
                return court.cr_courtid !== id
            }))
            console.log(response)
        } catch (err) {
            
        }
    }

    const handleUpdate = (id) => {
        history.push(`/court/${id}/update`)
    }
        
    return (
    <div className="list-group container">
        <table className="table table-hover table-striped">
            <thead>
                <tr className="">
                    <th scope="col">Court ID</th>
                    <th scope="col">Court Name</th>
                    <th scope="col">Court State</th>
                    <th scope="col">Court Zipcode</th>
                    <th scope="col"></th>
                    <th scope="col"></th>

                </tr>
            </thead>
            <tbody>

                {courts.map(court => {
                    return (   <tr key= {court.cr_courtid}>
                            <td>{court.cr_courtid}</td>
                            <td>{court.cr_courtname}</td>
                            <td>{court.cr_courtstate}</td>
                            <td>{court.cr_zipcode}</td>
                            <td>
                                <button onClick = {() => handleUpdate(court.cr_courtid)} className="btn btn-warning">Edit</button>
                            </td>
                            <td>
                                <button onClick = {() => handleDelete(court.cr_courtid)} className="btn btn-danger">Delete</button>
                            </td>

                            </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default CourtList