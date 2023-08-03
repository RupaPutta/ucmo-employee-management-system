import React, { Component } from 'react'
import PayrollService from '../services/PayrollService'

class ViewPayrollComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            payroll: {}
        }
    }

    componentDidMount(){
        PayrollService.getPayrollById(this.state.id).then( res => {
            this.setState({payroll: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Payroll Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Employee ID: </label>
                            <div> { this.state.payroll.employeeId }</div>
                        </div>
                        <div className = "row">
                            <label> Month: </label>
                            <div> { this.state.payroll.month }</div>
                        </div>
                        <div className = "row">
                            <label> Year: </label>
                            <div> { this.state.payroll.year }</div>
                        </div>
                        <div className = "row">
                             <label> Base Salary: </label>
                             <div> { this.state.payroll.baseSalary }</div>
                        </div>
                        <div className = "row">
                            <label> Overtime Salary: </label>
                            <div> { this.state.payroll.overtimeSalary }</div>
                        </div>
                        <div className = "row">
                            <label> Overtime Rate: </label>
                            <div> { this.state.payroll.overtimeRate }</div>
                        </div>
                        <div className = "row">
                            <label> Total Salary: </label>
                            <div> { this.state.payroll.totalSalary }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewPayrollComponent