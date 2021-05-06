import React  from 'react';

function EmployeeData(props) {
    console.log(props)
    return(
        <tr>
        <td>{props.employee.name.first}</td>
        <td>{props.employee.name.last}</td>
        <td>{props.employee.email}</td>
        <td>{props.employee.login.username}</td>
        <td>{props.employee.gender}</td>
    </tr>
    )
}

export default EmployeeData