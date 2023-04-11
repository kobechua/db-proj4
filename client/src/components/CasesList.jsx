import React from "react";

const CasesList = () => {
    return (
        <div className="list-group">
            <table className="table table-hover table-light">
                <thead>
                    <tr className="bg-light">
                        <th scope="col">Case Number</th>
                        <th scope="col">Lawyer ID</th>
                        <th scope="col">Client ID</th>
                        <th scope="col">Court ID</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1001</td>
                        <td>106</td>
                        <td>201</td>
                        <td>2</td>
                        <td>2023-01-15</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CasesList;