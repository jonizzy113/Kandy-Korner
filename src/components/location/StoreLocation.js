import React, { Component } from "react"



export default class LocationList extends Component {
    render() {
        return (
            <article>
                <h1>Store Locations</h1>
                {
                    this.props.stores.map(store => 
                        <div key={store.id}>
                            {store.name}, {" "} {store.address}
                        </div>
                    )
                }
            </article>
        )
    }
}