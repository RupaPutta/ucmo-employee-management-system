import React, { Component } from 'react'
import HolidayService from '../services/HolidayService'

class ListHolidayComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
                holidays: []
        }
        this.addHoliday = this.addHoliday.bind(this);
        this.editHoliday = this.editHoliday.bind(this);
        this.deleteHoliday = this.deleteHoliday.bind(this);
    }

    deleteHoliday(holidayId){
        HolidayService.deleteHoliday(holidayId).then( res => {
            this.setState({holidays: this.state.holidays.filter(holiday => holiday.holidayId !== holidayId)});
        });
    }
    viewHoliday(holidayId){
        this.props.history.push(`/view-holiday/${holidayId}`);
    }
    editHoliday(holidayId){
        this.props.history.push(`/add-holiday/${holidayId}`);
    }

    componentDidMount(){
        HolidayService.getHolidays().then((res) => {
            this.setState({ holidays: res.data});
        });
    }

    addHoliday(){
        this.props.history.push('/add-holiday/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Admin List</h2>
                 <div className = "row">

                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> Name</th>
                                    <th> Date</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.holidays.map(
                                        holiday =>
                                        <tr key = {holiday.holidayId}>
                                             <td> { holiday.name} </td>
                                             <td> { holiday.date }</td>

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

export default ListHolidayComponent