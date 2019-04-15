import { Route } from 'react-router-dom'
import React, { Component } from "react"
import LoactionList from "./location/LoactionList"
import Employees from "./employee/Employees"
// import CandyTypes from "./candy/CandyTypes"
import CandyList from "./Candies/CandyList"


export default class ApplicationViews extends Component {
    state = {
        locations: [],
        employees: [],
        candyTypes: [],
        candies: []
    }

    componentDidMount() {
        const newState = {}

        fetch("http://localhost:8088/locations")
            .then(r => r.json())
            .then(locations => newState.locations = locations)
            .then(() => fetch("http://localhost:8088/employees")
                .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:8088/candyTypes")
                .then(r => r.json()))
            .then(candyTypes => newState.candyTypes = candyTypes)
            .then(() => fetch("http://localhost:8088/individualCandies")
                .then(r => r.json()))
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
