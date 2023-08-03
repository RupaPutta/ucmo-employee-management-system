import React, { Component } from 'react'
import ClockService from '../services/ClockService';

class CreateCheckInCheckOutComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            employeeId: '',
            checkInTime: '',
            checkOutTime: '',
            clockInLocation: '',
            clockOutLocation: '',
            totalSalary: '',
        }
        this.changeEmployeeIdHandler = this.changeEmployeeIdHandler.bind(this);
        this.saveOrUpdateCheckInCheckOut = this.saveOrUpdateCheckInCheckOut.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            ClockService.getCheckInCheckOutById(this.state.id).then( (res) =>{
                let checkInCheckOut = res.data;
                this.setState({employeeId: checkInCheckOut.employeeId,
                    checkInTime: checkInCheckOut.checkInTime,
                    checkOutTime: checkInCheckOut.checkOutTime,
                    clockInLocation: checkInCheckOut.clockInLocation,
                    clockOutLocation: checkInCheckOut.clockOutLocation,
                    totalSalary: checkInCheckOut.totalSalary
                });
            });
        }
    }
    saveOrUpdateCheckInCheckOut = (e) => {
        e.preventDefault();
        let checkInCheckOut = {employeeId: this.state.employeeId, checkInTime: this.state.checkInTime, checkOutTime: this.state.checkOutTime, clockInLocation: this.state.clockInLocation, clockOutLocation: this.state.clockOutLocation, totalSalary: this.state.totalSalary};
        console.log('checkInCheckOut => ' + JSON.stringify(checkInCheckOut));
        // step 5
        if(this.state.id === '_add'){
            ClockService.createCheckInCheckOut(checkInCheckOut).then(res =>{
                this.props.history.push('/checkInCheckOuts');
            });
        }else{
            ClockService.updateCheckInCheckOut(checkInCheckOut, this.state.id).then( res => {
                this.props.history.push('/checkInCheckOuts');
            });
        }
    }

    changeEmployeeIdHandler= (event) => {
        this.setState({employeeId: event.target.value});
    }

    changeCheckInTimeHandler= (event) => {
         this.setState({checkInTime: event.target.value});
    }

    changeCheckOutTimeHandler= (event) => {
         this.setState({checkOutTime: event.target.value});
    }

    changeClockInLocationHandler= (event) => {
         this.setState({clockInLocation: event.target.value});
    }

    changeClockOutLocationHandler= (event) => {
         this.setState({clockOutLocation: event.target.value});
    }

    changeTotalSalaryIdHandler= (event) => {
         this.setState({totalSalary: event.target.value});
    }

    cancel(){
        this.props.history.push('/checkInCheckOuts');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add CheckInCheckOut</h3>
        }else{
            return <h3 className="text-center">Update CheckInCheckOut</h3>
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
                                             <label> CheckIn Time: </label>
                                             <input placeholder="CheckIn Time" name="checkInTime" className="form-control"
                                                value={this.state.checkInTime} onChange={this.changeCheckInTimeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> CheckOut Time: </label>
                                            <input placeholder="CheckOut Time" name="checkOutTime" className="form-control"
                                                value={this.state.checkOutTime} onChange={this.changeCheckOutTimeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> ClockIn Location: </label>
                                            <input placeholder="ClockIn Location" name="clockInLocation" className="form-control"
                                                value={this.state.clockInLocation} onChange={this.changeClockInLocationHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> ClockOut Location: </label>
                                            <input placeholder="ClockOut Location" name="clockOutLocation" className="form-control"
                                                value={this.state.clockOutLocation} onChange={this.changeClockOutLocationHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateCheckInCheckOut}>Save</button>
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

export default CreateCheckInCheckOutComponent