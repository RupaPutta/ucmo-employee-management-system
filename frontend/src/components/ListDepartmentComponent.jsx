import React, { Component } from 'react'
import DepartmentService from '../services/DepartmentService'

class ListDepartmentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
                departments: []
        }
        this.addDepartment = this.addDepartment.bind(this);
        this.editDepartment = this.editDepartment.bind(this);
        this.deleteDepartment = this.deleteDepartment.bind(this);
    }

    deleteDepartment(departmentId){
        DepartmentService.deleteDepartment(departmentId).then( res => {
            this.setState({departments: this.state.departments.filter(department => department.departmentId !== departmentId)});
        });
    }
    viewDepartment(departmentId){
        this.props.history.push(`/view-department/${departmentId}`);
    }
    editDepartment(departmentId){
        this.props.history.push(`/add-department/${departmentId}`);
    }

    componentDidMount(){
        DepartmentService.getDepartments().then((res) => {
            this.setState({ departments: res.data});
        });
    }

    addDepartment(){
        this.props.history.push('/add-department/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Departments List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addDepartment}> Add Department</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> Name</th>
                                    <th> Location</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.departments.map(
                                        department =>
                                        <tr key = {department.departmentId}>
                                             <td> { department.name} </td>
                                             <td> { department.location }</td>
                                             <td>
                                                 <button onClick={ () => this.editDepartment(department.departmentId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteDepartment(department.departmentId)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewDepartment(department.departmentId)} className="btn btn-info">View </button>
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

export default ListDepartmentComponent