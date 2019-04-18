import React, { Component } from "react"
import {  Link } from "react-router-dom"



export default class IndividualCandy extends Component {
    render() {
        return (
            <article className="content">
                <h1>Candies</h1>
                {
                    this.props.candies.map(candy => 
                        <div key={candy.id} className="card">
                            {candy.name}
                            {" "}of type{" "}
                            {
                                this.props.candyTypes.find(candyType =>
                                    candyType.id === candy.candyTypeId).name
                            }
                            <button
                                    onClick={() => this.props.deleteCandy(candy.id)}
                                    className="card-link">Delete</button>
                                    <Link className="nav-link" to={`/individualCandies/${candy.id}`}>Details</Link>
                        </div>
                    )
                }
            </article>
        )
    }
}