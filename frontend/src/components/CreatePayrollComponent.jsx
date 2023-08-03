import React, { Component } from 'react'
import PayrollService from '../services/PayrollService';

class CreatePayrollComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            employeeId: '',
            month: '',
            year: '',
            baseSalary: '',
            overtimeSalary: '',
            overtimeRate: '',
            totalSalary: '',
        }
        this.changeEmployeeIdHandler = this.changeEmployeeIdHandler.bind(this);
        this.saveOrUpdatePayroll = this.saveOrUpdatePayroll.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            PayrollService.getPayrollById(this.state.id).then( (res) =>{
                let payroll = res.data;
                this.setState({employeeId: payroll.employeeId,
                    month: payroll.month,
                    year: payroll.year,
                    baseSalary: payroll.baseSalary,
                    overtimeSalary: payroll.overtimeSalary,
                    overtimeRate: payroll.overtimeRate,
                    totalSalary: payroll.totalSalary
                });
            });
        }
    }
    saveOrUpdatePayroll = (e) => {
        e.preventDefault();
        let payroll = {employeeId: this.state.employeeId, month: this.state.month, year: this.state.year, baseSalary: this.state.baseSalary, overtimeSalary: this.state.overtimeSalary, overtimeRate: this.state.overtimeRate, totalSalary: this.state.totalSalary};
        console.log('payroll => ' + JSON.stringify(payroll));
        // step 5
        if(this.state.id === '_add'){
            PayrollService.createPayroll(payroll).then(res =>{
                this.props.history.push('/payrolls');
            });
        }else{
            PayrollService.updatePayroll(payroll, this.state.id).then( res => {
                this.props.history.push('/payrolls');
            });
        }
    }

    changeEmployeeIdHandler= (event) => {
        this.setState({employeeId: event.target.value});
    }

    changeMonthHandler= (event) => {
         this.setState({month: event.target.value});
    }

    changeYearHandler= (event) => {
         this.setState({year: event.target.value});
    }

    changeBaseSalaryHandler= (event) => {
         this.setState({baseSalary: event.target.value});
    }

    changeOvertimeSalaryHandler= (event) => {
         this.setState({overtimeSalary: event.target.value});
    }

    changeOvertimeRateHandler= (event) => {
         this.setState({overtimeRate: event.target.value});
    }

    changeTotalSalaryIdHandler= (event) => {
         this.setState({totalSalary: event.target.value});
    }

    cancel(){
        this.props.history.push('/payrolls');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Payroll</h3>
        }else{
            return <h3 className="text-center">Update Payroll</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Employee ID: </label>
                                            <input placeholder="Employee ID" name="employeeId" className="form-control"
                                                value={this.state.employeeId} onChange={this.changeEmployeeIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                             <label> Month: </label>
                                             <input placeholder="Month" name="month" className="form-control"
                                                value={this.state.month} onChange={this.changeMonthHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Year: </label>
                                            <input placeholder="Year" name="year" className="form-control"
                                                value={this.state.year} onChange={this.changeYearHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Base Salary: </label>
                                            <input placeholder="Base Salary" name="baseSalary" className="form-control"
                                                value={this.state.baseSalary} onChange={this.changeBaseSalaryHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Overtime Salary: </label>
                                            <input placeholder="Overtime Salary" name="overtimeSalary" className="form-control"
                                                value={this.state.overtimeSalary} onChange={this.changeOvertimeSalaryHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Overtime Rate: </label>
                                            <input placeholder="Overtime Rate" name="overtimeRate" className="form-control"
                                                value={this.state.overtimeRate} onChange={this.changeOvertimeRateHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdatePayroll}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreatePayrollComponent