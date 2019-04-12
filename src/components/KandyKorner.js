import React, { Component } from "react"
import StoreLocation from "./location/StoreLocation"
import Employees from "./employee/Employees"
import CandyTypes from "./candy/CandyTypes"
import IndividualCandy from "./IndividualCandy/IndividualCandy"


export default class KandyKorner extends Component {
    locationsFromAPI = [
        {id:1, name: "Nashville North", address: "137 Hickory Heights Drive"},
        {id:2, name: "Nashville West", address: "500 Interstate Blvd"},
        {id:3, name: "Nashville South", address: "123 Happy Rd"},
        {id:4, name: "Nashville East", address: "456 Happy Rd"}
    ]

    employeesFromAPI = [
        {id:1, name: "Jonathan"},
        {id:2, name: "Billy"},
        {id:3, name: "Jameka"},
        {id:4, name: "Alex"}
    ]

    candyTypesFromAPI = [
        {id:1, name:"Gummy"},
        {id:2, name:"Hard Candy"},
        {id:3, name:"Suckers"},
        {id:4, name:"Lollipops"}
    ]

    individualCandiesFromAPI = [
        {id:1, name: "Bears", candyType:1},
        {id:2, name: "Ranchers", candyType:2},
        {id:3, name: "Laffy Taffy", candyType:3},
        {id:4, name: "Lollys", candyType:4}
    ]

    state = {
        stores: this.locationsFromAPI,
        employees: this.employeesFromAPI,
        candyTypes: this.candyTypesFromAPI,
        candies: this.individualCandiesFromAPI
    }

    render () {
        return (
            <div className= "KandyCorner">
                <StoreLocation stores={this.state.stores}/>
                <Employees employees={this.state.employees}/>
                <CandyTypes candyTypes={this.state.candyTypes}/>
                <IndividualCandy candies={this.state.candies}/>
            </div>
        )
    }
}