import React, { Component } from 'react'
import ClockService from '../services/ClockService'

class ListCheckInCheckOutComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
                checkInCheckOuts: []
        }
        this.addCheckInCheckOut = this.addCheckInCheckOut.bind(this);
        this.editCheckInCheckOut = this.editCheckInCheckOut.bind(this);
        this.deleteCheckInCheckOut = this.deleteCheckInCheckOut.bind(this);
    }

    deleteCheckInCheckOut(checkInCheckOutId){
        ClockService.deleteCheckInCheckOut(checkInCheckOutId).then( res => {
            this.setState({checkInCheckOuts: this.state.checkInCheckOuts.filter(checkInCheckOut => checkInCheckOut.checkInCheckOutId !== checkInCheckOutId)});
        });
    }
    viewCheckInCheckOut(checkInCheckOutId){
        this.props.history.push(`/view-checkincheckout/${checkInCheckOutId}`);
    }
    editCheckInCheckOut(checkInCheckOutId){
        this.props.history.push(`/add-checkincheckout/${checkInCheckOutId}`);
    }

    componentDidMount(){
        ClockService.getCheckInCheckOuts().then((res) => {
            this.setState({ checkInCheckOuts: res.data});
        });
    }

    addCheckInCheckOut(){
        this.props.history.push('/add-checkincheckout/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">CheckIns CheckOuts</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addCheckInCheckOut}> Add CheckInCheckOut</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> Employee ID</th>
                                    <th> CheckIn Time</th>
                                    <th> CheckOut Time</th>
                                    <th> ClockIn Location</th>
                                    <th> ClockOut Location</th>
                                    <th> Total Salary</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.checkInCheckOuts.map(
                                        checkInCheckOut =>
                                        <tr key = {checkInCheckOut.checkInCheckOutId}>
                                             <td> { checkInCheckOut.employeeId} </td>
                                             <td> { checkInCheckOut.checkInTime }</td>
                                             <td> { checkInCheckOut.checkOutTime }</td>
                                             <td> { checkInCheckOut.clockInLocation }</td>
                                             <td> { checkInCheckOut.clockOutLocation }</td>
                                             <td> { checkInCheckOut.totalSalary }</td>
                                             <td>
                                                 <button onClick={ () => this.editCheckInCheckOut(checkInCheckOut.checkInCheckOutId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCheckInCheckOut(checkInCheckOut.checkInCheckOutId)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewCheckInCheckOut(checkInCheckOut.checkInCheckOutId)} className="btn btn-info">View </button>
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

export default ListCheckInCheckOutComponent