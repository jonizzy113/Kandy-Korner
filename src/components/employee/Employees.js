import React, { Component } from "react"


export default class Employees extends Component {
    render() {
        return (
            <article className="content">
                <h1>Employees</h1>
                {
                    this.props.employees.map(employee => 
                        <div key={employee.id}>
                            {employee.name}
                        </div>
                    )
                }
            </article>
        )
    }
}