import React, { Component } from "react"

export default class CandyTypes extends Component {
    render() {
        return (
            <article>
                <h1>Candy Type</h1>
                {
                    this.props.candyTypes.map(candyType =>
                        <div key={candyType.id}>
                            {candyType.name}
                        </div>
                    )
                }
            </article>
            );
        }
}