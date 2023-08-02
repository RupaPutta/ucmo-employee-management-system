import React, { Component } from 'react'
import DepartmentService from '../services/DepartmentService';

class UpdateDepartmentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            name: '',
            location: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.updateDepartment = this.updateDepartment.bind(this);
    }

    componentDidMount(){
        DepartmentService.getDepartmentById(this.state.id).then( (res) =>{
            let department = res.data;
            this.setState({name: department.name,
                location: department.location
            });
        });
    }

    updateDepartment = (e) => {
        e.preventDefault();
        let department = {name: this.state.name, location: this.state.location};
        DepartmentService.updateDepartment(department, this.state.id).then( res => {
            this.props.history.push('/departments');
        });
    }

    changeNameHandler= (event) => {
       this.setState({name: event.target.value});
    }

    changeLocationHandler= (event) => {
       this.setState({location: event.target.value});
    }

    cancel(){
        this.props.history.push('/departments');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Department</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                             <label> Name: </label>
                                             <input placeholder="Name" name="name" className="form-control"
                                             value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                             <label> Location: </label>
                                             <input placeholder="Location" name="location" className="form-control"
                                             value={this.state.location} onChange={this.changeLocationHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateDepartment}>Save</button>
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

export default UpdateDepartmentComponent