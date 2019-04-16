import { Route } from 'react-router-dom'
import React, { Component } from "react"
import LoactionList from "./location/LoactionList"
import Employees from "./employee/Employees"
import CandyList from "./Candies/CandyList"
import LocationManager from "../modules/LocationManager"
import EmployeeManager from "../modules/EmployeeManager"
import CandyManager from "../modules/CandyManager"
import CandyTypeManager from "../modules/CandyTypeManager"


export default class ApplicationViews extends Component {
    state = {
        locations: [],
        employees: [],
        candyTypes: [],
        candies: []
    }

    componentDidMount() {
        const newState = {}

        LocationManager.getAll()
            .then(locations => newState.locations = locations)
        EmployeeManager.getAll()
            .then(employees => newState.employees = employees)
        CandyTypeManager.getAll()
            .then(candyTypes => newState.candyTypes = candyTypes)
        CandyManager.getAll()
            .then(candies => newState.candies = candies)
            .then(() => this.setState(newState))
    }

    deleteCandy = (id) => {
        return fetch(`http://localhost:8088/individualCandies/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:8088/individualCandies`))
            .then(e => e.json())
            .then(obj => this.setState({
                candies: obj
            })
            )
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
                    return <CandyList deleteCandy={this.deleteCandy}
                        candies={this.state.candies} candyTypes={this.state.candyTypes} />
                }} />
            </React.Fragment>
        )
    }
}
