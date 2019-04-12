import React, { Component } from "react"


export default class Employees extends Component {
    render() {
        return (
            <article>
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