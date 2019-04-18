import React, { Component } from "react"

export default class Candy extends Component {
    state = {
        saveDisabled: false
    }

    render () {
        return (
            <section className="content">
            <div className="card">
            <h4 className="card-title">
                {this.props.candy.name}
            </h4>
                <button onClick={
                    () => {
                        this.setState(
                            { saveDisabled: true },
                            () => this.props.deleteLocation(this.props.candy.id)
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