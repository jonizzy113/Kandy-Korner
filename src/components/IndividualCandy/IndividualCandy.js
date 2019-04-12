import React, { Component } from "react"
import candyType from "../candy/CandyTypes";


export default class IndividualCandy extends Component {
    render() {
        return (
            <article>
                <h1>Individual Candy</h1>
                {
                    this.props.candies.map( candie => 
                        <div key={candie.id}>
                            {candie.name} {""} {candyType.id}
                        </div>
                    )
                }
            </article>
        )
    }
}