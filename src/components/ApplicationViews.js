import { Route } from 'react-router-dom'
import React, { Component } from "react"
import LoactionList from "./location/LoactionList"
import Employees from "./employee/Employees"
import CandyTypes from "./candy/CandyTypes"
import CandyList from "./Candies/CandyList"


export default class ApplicationViews extends Component {
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
        {id:1, name: "Bears", candyTypeId:1},
        {id:2, name: "Ranchers", candyTypeId:2},
        {id:3, name: "Laffy Taffy", candyTypeId:3},
        {id:4, name: "Lollys", candyTypeId:4}
    ]
    
    state = {
        locations: this.locationsFromAPI,
        employees: this.employeesFromAPI,
        candyTypes: this.candyTypesFromAPI,
        candies: this.individualCandiesFromAPI
    }


    render() {
        return (
            <React.Fragment>
            <Route exact path="/" render={(props) => {
                return <LoactionList locations={this.state.locations} />
            }} />
            <Route path="/employees" render={(props) => {
                return <Employees employees={this.state.employees} />
            }} />
            {/* <Route path="/CandyTypes" render={(props) => {
                return <CandyTypes candyTypes={this.state.candyTypes} />
            }} /> */}
            <Route exact path="/IndividualCandy" render={(props) => {
                return <CandyList candies={this.state.candies} candyTypes={this.state.candyTypes} />
            }}/>
        </React.Fragment>
        )
    }
}
