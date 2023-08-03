import React, { Component } from 'react'
import PayrollService from '../services/PayrollService'

class ListPayrollComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
                payrolls: []
        }
        this.addPayroll = this.addPayroll.bind(this);
        this.editPayroll = this.editPayroll.bind(this);
        this.deletePayroll = this.deletePayroll.bind(this);
    }

    deletePayroll(payrollId){
        PayrollService.deletePayroll(payrollId).then( res => {
            this.setState({payrolls: this.state.payrolls.filter(payroll => payroll.payrollId !== payrollId)});
        });
    }
    viewPayroll(payrollId){
        this.props.history.push(`/view-payroll/${payrollId}`);
    }
    editPayroll(payrollId){
        this.props.history.push(`/add-payroll/${payrollId}`);
    }

    componentDidMount(){
        PayrollService.getPayrolls().then((res) => {
            this.setState({ payrolls: res.data});
        });
    }

    addPayroll(){
        this.props.history.push('/add-payroll/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Payrolls List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addPayroll}> Add Payroll</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> Employee ID</th>
                                    <th> Month</th>
                                    <th> Year</th>
                                    <th> Base Salary</th>
                                    <th> Overtime Salary</th>
                                    <th> Overtime Rate</th>
                                    <th> Total Salary</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.payrolls.map(
                                        payroll =>
                                        <tr key = {payroll.payrollId}>
                                             <td> { payroll.employeeId} </td>
                                             <td> { payroll.month }</td>
                                             <td> { payroll.year }</td>
                                             <td> { payroll.baseSalary }</td>
                                             <td> { payroll.overtimeSalary }</td>
                                             <td> { payroll.overtimeRate }</td>
                                             <td> { payroll.totalSalary }</td>
                                             <td>
                                                 <button onClick={ () => this.editPayroll(payroll.payrollId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletePayroll(payroll.payrollId)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewPayroll(payroll.payrollId)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListPayrollComponent