import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import getEmployees from '../../utils/API.js';
import EmployeeData from '../EmployeeData/index.js';
import Buttons from '../Buttons/index.js';

function MainTable () {
    const [state, setState] = useState({ 
        employees: [ ],
    });
useEffect(() => {
    getEmployees().then((response) => {
        setState({
            ...state,
            employees: response.data.results
        })
    })
}, [])

// handleAscending(() => {

// })

// handleDescending(() => {

// })

console.log(state.employees)
    return (
            <div class="container">
            <div class="row-A"></div>
            <br/>
            <div class="row-A">
            <div class="col-xs-1 col-md-1 col-lg-1"></div>
            <div class="col-xs-10 col-md-11 col-lg-11">
                <div class="card-contact">
                <div class="row no-gutters">
                    <section class="card-body text-center">
                    <h2 class="card-title mb-1">Employees</h2>
                    <Buttons/>
                    <div>
                    <Table striped bordered hover size="sm">
                        <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Gender</th>
                        </tr>
                        </thead>
                        <tbody>
                            {state.employees.map((employee) => {
                                return <EmployeeData employee = {employee}/>
                            })}
                        </tbody>
                    </Table>
                    </div>
                    </section>
                </div>
                </div>
            </div>
            <div class="col-xs-1 col-md-1 col-lg-1"></div>
            </div>
            <div class="row-tall"></div>
            </div>
    )
}

export default MainTable;