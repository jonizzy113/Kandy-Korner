import React, { Component } from "react"

export default class Employee extends Component {
    state = {
        saveDisabled: false
    }

    render () {
        return (
            <section className="content">
            <div className="card">
            <h4 className="card-title">
                {this.props.employee.name} 
            </h4>
                <button onClick={
                    () => {
                        this.setState(
                            { saveDisabled: true },
                            () => this.props.deleteEmployee(this.props.employee.id)
                        )
                    }
                }
                        disabled={ this.state.saveDisabled }
                        className="card-link">Delete</button>
            </div>
            </section>
        )
    }
}