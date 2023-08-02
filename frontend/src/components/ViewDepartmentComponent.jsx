import React, { Component } from 'react'
import DepartmentService from '../services/DepartmentService'

class ViewDepartmentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            department: {}
        }
    }

    componentDidMount(){
        DepartmentService.getDepartmentById(this.state.id).then( res => {
            this.setState({department: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Department Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Name: </label>
                            <div> { this.state.department.name }</div>
                        </div>
                        <div className = "row">
                            <label> Location: </label>
                            <div> { this.state.department.location }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewDepartmentComponent
