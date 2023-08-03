import React, { Component } from 'react'
import ClockService from '../services/ClockService'

class ViewCheckInCheckOutComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            checkInCheckOut: {}
        }
    }

    componentDidMount(){
        ClockService.getCheckInCheckOutById(this.state.id).then( res => {
            this.setState({checkInCheckOut: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View CheckIn CheckOut Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Employee ID : </label>
                            <div> { this.state.checkInCheckOut.employeeId }</div>
                        </div>
                        <div className = "row">
                            <label> CheckIn Time : </label>
                            <div> { this.state.checkInCheckOut.checkInTime }</div>
                        </div>
                        <div className = "row">
                            <label> CheckOut Time : </label>
                            <div> { this.state.checkInCheckOut.checkOutTime }</div>
                        </div>
                        <div className = "row">
                             <label> ClockIn Location: </label>
                             <div> { this.state.checkInCheckOut.clockInLocation }</div>
                        </div>
                        <div className = "row">
                            <label> ClockOut Location: </label>
                            <div> { this.state.checkInCheckOut.clockOutLocation }</div>
                        </div>
                        <div className = "row">
                            <label> Total Salary: </label>
                            <div> { this.state.checkInCheckOut.totalSalary }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewCheckInCheckOutComponent