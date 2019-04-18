import { Route } from 'react-router-dom'
import React, { Component } from "react"
import LoactionList from "./location/LoactionList"
import Employees from "./employee/Employees"
import CandyList from "./Candies/CandyList"
import LocationManager from "../modules/LocationManager"
import EmployeeManager from "../modules/EmployeeManager"
import CandyManager from "../modules/CandyManager"
import CandyTypeManager from "../modules/CandyTypeManager"
import EmployeeDetail from "./employee/EmployeeDetail"
import LocationDetail from "./location/LocationDetail"
import CandyDetail from "./Candies/CandiesDetail"
import EmployeeForm from "./employee/EmployeeForm"
import { withRouter } from 'react-router'


class ApplicationViews extends Component {
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
        CandyManager.delete(id)
            .then(() => CandyManager.getAll())
            .then(obj => this.setState({
                candies: obj
            })
            )
    }

    deleteLocation = (id) => {
        LocationManager.delete(id)
            .then(() => LocationManager.getAll())
            .then(obj => this.setState({
                locations: obj
            })
            )
    }

    deleteEmployee = (id) => {
        EmployeeManager.delete(id)
            .then(() => EmployeeManager.getAll())
            .then(obj => this.setState({
                employees: obj
            })
            )
    }
    
    addEmployee = newEmployee => EmployeeManager.post(newEmployee)
        .then(() => EmployeeManager.getAll())
        .then(employees => {
            this.setState({
                employees: employees
            })
    })

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LoactionList deleteLocation={this.deleteLocation}
                    locations={this.state.locations} />
                }} />
                <Route  exact path="/employees" render={(props) => {
                    return <Employees deleteEmployee={this.deleteEmployee}
                    employees={this.state.employees} {...props}/>
                }} />
                {/* <Route path="/CandyTypes" render={(props) => {
                return <CandyTypes candyTypes={this.state.candyTypes} />
            }} /> */}
                <Route exact path="/individualCandies" render={(props) => {
                    return <CandyList deleteCandy={this.deleteCandy}
                        candies={this.state.candies} candyTypes={this.state.candyTypes} />
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    let employee = this.state.employees.find(employee =>
                        employee.id === parseInt(props.match.params.employeeId)
                        )
                        if(!employee) {
                            employee = {id: 404, name:"404" }
                        }
                        return <EmployeeDetail employee={employee}
                        deleteEmployee={this.deleteEmployee} />
                }}/>
                <Route path="/locations/:locationId(\d+)" render={(props) => {
                    let location = this.state.locations.find(location =>
                        location.id === parseInt(props.match.params.locationId)
                        )
                        if(!location) {
                            location = {id: 404, name:"404" }
                        }
                        return <LocationDetail location={location}
                        deleteLocation={this.deleteLocation} />
                }}/>
                <Route path="/individualCandies/:candyId(\d+)" render={(props) => {
                    let candy = this.state.candies.find(candy =>
                        candy.id === parseInt(props.match.params.candyId)
                        )
                        if(!candy) {
                            candy = {id: 404, name:"404" }
                        }
                        return <CandyDetail candy={candy}
                        deleteCandy={this.deleteCandy} />
                }}/>
                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props}
                    addEmployee={this.addEmployee} />
                }}/>
            </React.Fragment>
        )
    }
}
export default withRouter(ApplicationViews)