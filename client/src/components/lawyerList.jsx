import React, {useContext, useEffect} from 'react'
import lawyerapi from '../api/lawyerapi'
import { lawyercontext } from '../context/lawyercontext'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


const LawyerList = () => {
    const {lawyers, setlawyers} = useContext(lawyercontext)
    let history = useHistory()
        useEffect(() => {
            const fetchData = async () => {
                try{
                    const response = await lawyerapi.get("/")
                    setlawyers(response.data.data.lawyer)
                } catch (err) {
                    console.log(err)
                }
            }
            fetchData()
        }, [])

    const handleDelete = async (id) => {
        try {
            const response = await lawyerapi.delete(`/${id}`)
            setlawyers(lawyers.filter(lawyer => {
                return lawyer.l_lawyerid !== id
            }))
            console.log(response)
        } catch (err) {
            
        }
    }

    const handleUpdate = (id) => {
        history.push(`/lawyer/${id}/update`)
    }
        
    return (
    <div className="list-group">
        <table className="table table-hover table-dark">
            <thead>
                <tr className="bg-primary">
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Lawyer ID</th>
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

                {lawyers.map(lawyer => {
                    return (   <tr key= {lawyer.l_lawyerid}>
                            <td>{lawyer.l_firstname}</td>
                            <td>{lawyer.l_lastname}</td>
                            <td>{lawyer.l_lawyerid}</td>
                            <td>{lawyer.l_phonenumber}</td>
                            <td>{lawyer.l_address}</td>
                            <td>{lawyer.l_dob}</td>
                            <td>{lawyer.l_ssn}</td>
                            <td>{lawyer.l_description}</td>
                            <td>
                                <button onClick = {() => handleUpdate(lawyer.l_lawyerid)} className="btn btn-warning">Edit</button>
                            </td>
                            <td>
                                <button onClick = {() => handleDelete(lawyer.l_lawyerid)} className="btn btn-danger">Delete</button>
                            </td>

                            </tr>
                    )
                })}
                {/* <tr>
                    <td>John</td>
                    <td>Smith</td>
                    <td>101</td>
                    <td>5556543</td>
                    <td>111 Main St</td>
                    <td>10-1-1980</td>
                    <td>543127890</td>
                    <td>He is good</td>
                    <td>
                        <button className="btn btn-warning">Edit</button>
                    </td>
                    <td>
                        <button className="btn btn-danger">Delete</button>
                    </td>
                </tr> */}
            </tbody>
        </table>
    </div>
  )
}

export default LawyerList