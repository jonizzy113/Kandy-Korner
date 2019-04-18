import React, { Component } from "react"

export default class Location extends Component {
    state = {
        saveDisabled: false
    }

    render () {
        return (
            <section className="content">
            <div className="card">
            <h4 className="card-title">
                {this.props.location.name}
            </h4>
            <h5>{this.props.location.address}</h5>
                <button onClick={
                    () => {
                        this.setState(
                            { saveDisabled: true },
                            () => this.props.deleteLocation(this.props.employee.id)
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