import React, { Component } from "react"
import {  Link } from "react-router-dom"



export default class Employees extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="employeeButton content">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/employees/new")
                        }
                        }>
                        New Employee
                    </button>
                </div>
            <article className="content">
                <h1>Employees</h1>
                {
                    this.props.employees.map(employee => 
                        <div key={employee.id} className="card">
                            {employee.name}
                            <button
                                    onClick={() => this.props.deleteEmployee(employee.id)}
                                    className="card-link">Delete</button>
                        <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                        </div>
                    )
                }
            </article>
            </React.Fragment>
        )
    }
}