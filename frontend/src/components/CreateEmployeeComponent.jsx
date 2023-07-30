import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            name: '',
            position: '',
            departmentId: '',
            hourlyWage: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({name: employee.name,
                    position: employee.position,
                    departmentId: employee.departmentId,
                    hourlyWage : employee.hourlyWage
                });
            });
        }
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {name: this.state.name, position: this.state.position, departmentId: this.state.departmentId, hourlyWage: this.state.hourlyWage};
        console.log('employee => ' + JSON.stringify(employee));
        // step 5
        if(this.state.id === '_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/employees');
            });
        }else{
            EmployeeService.updateEmployee(employee, this.state.id).then( res => {
                this.props.history.push('/employees');
            });
        }
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changePositionHandler= (event) => {
        this.setState({position: event.target.value});
    }

    changeDepartmentIdHandler= (event) => {
        this.setState({departmentId: event.target.value});
    }

    changeHourlyWageHandler= (event) => {
        this.setState({hourlyWage: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Employee</h3>
        }else{
            return <h3 className="text-center">Update Employee</h3>
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
                                            <label> Name: </label>
                                            <input placeholder="Name" name="name" className="form-control"
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Position: </label>
                                            <input placeholder="Position" name="position" className="form-control"
                                                value={this.state.position} onChange={this.changePositionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Department Id: </label>
                                            <input placeholder="Department Id" name="departmentId" className="form-control"
                                                value={this.state.departmentId} onChange={this.changeDepartmentIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Hourly Wage: </label>
                                            <input placeholder="Hourly Wage" name="hourlyWage" className="form-control"
                                                value={this.state.hourlyWage} onChange={this.changeHourlyWageHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
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

export default CreateEmployeeComponent