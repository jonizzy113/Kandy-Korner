import React, { Component } from "react"
import {  Link } from "react-router-dom"



export default class LocationList extends Component {
    render() {
        return (
            <article className="content">
                <h1>Store Locations</h1>
                {
                    this.props.locations.map(location => 
                        <div key={location.id} className="card">
                            {location.name}, {" "} {location.address}
                            <button
                                    onClick={() => this.props.deleteLocation(location.id)}
                                    className="card-link">Delete</button>
                                    <Link className="nav-link" to={`/locations/${location.id}`}>Details</Link>
                        </div>
                    )
                }
            </article>
        )
    }
}