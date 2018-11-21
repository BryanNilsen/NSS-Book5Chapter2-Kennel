import React, { Component } from "react"

export default class EmployeeDetail extends Component {
    render() {
        const employee = this.props.employees.find(a => a.id === parseInt(this.props.match.params.employeeId)) || {}

        return (
            <section className="employee list_title">
                <div key={employee.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {/* <img src={`./../images/${animal.species}Icon.png`} className="icon--dog" /> */}
                            {employee.name}
                        </h4>
                        {/* <h6 className="card-title">{animal.breed}</h6> */}
                        <a href="#"
                            onClick={() => this.props.deleteEmployee(employee.id)
                                .then(() => this.props.history.push("/employees"))}
                            className="card-link">Delete</a>
                    </div>
                </div>
            </section>
        )
    }
}