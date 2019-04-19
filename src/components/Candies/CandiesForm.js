import React, { Component } from "react";

export default class CandyForm extends Component {
    state = {
        name: "",
        candyTypeId: ""
    }

    handleFieldChange = (event) => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        console.log(stateToChange)
        this.setState(stateToChange);
    }

    constructNewCandy = event => {
        event.preventDefault();
        if (this.state.CandyTypeId === "") {
            window.alert("Please Selece A Type");
        }
            const candy = {
                name: this.state.name,
                candyTypeId: Number(this.state.candyTypeId)
            }
            this.props.addCandy(candy).then(() => this.props.history.push("/individualCandies"));
        ;
    }

    render() {
        return (
            <React.Fragment>
                <form className="content">
                    <div className="form-group">
                        <label htmlFor="name">Candy Name</label>
                        <input
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="name"
                            placeholder="candy name"
                        />
                    </div>
                    <div>
                        <label htmlFor="candyType">Candy Types</label>
                        <select
                            defaultValue=""
                            name="candyType"
                            id="candyTypeId"
                            onChange={this.handleFieldChange}
                        >
                            <option value="">Select a Candy Type</option>
                            {this.props.candyTypes.map(candyType => (
                                <option key={candyType.id} id={candyType.id} value={candyType.id}>
                                    {candyType.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        type="submit"
                        onClick={this.constructNewCandy}
                        className="btn btn-primary"
                    >
                        Submit
                    </button>
                </form>
            </React.Fragment >
        )
    }
}