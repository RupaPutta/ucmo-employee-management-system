import React, { Component } from 'react'
import DepartmentService from '../services/DepartmentService';

class CreateDepartmentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            name: '',
            location: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.saveOrUpdateDepartment = this.saveOrUpdateDepartment.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            DepartmentService.getDepartmentById(this.state.id).then( (res) =>{
                let department = res.data;
                this.setState({name: department.name,
                    location: department.location
                });
            });
        }
    }
    saveOrUpdateDepartment = (e) => {
        e.preventDefault();
        let department = {name: this.state.name, location: this.state.location};
        console.log('department => ' + JSON.stringify(department));
        // step 5
        if(this.state.id === '_add'){
            DepartmentService.createDepartment(department).then(res =>{
                this.props.history.push('/departments');
            });
        }else{
            DepartmentService.updateDepartment(department, this.state.id).then( res => {
                this.props.history.push('/departments');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Department</h3>
        }else{
            return <h3 className="text-center">Update Department</h3>
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
                                            <label> Location: </label>
                                            <input placeholder="Location" name="location" className="form-control"
                                                value={this.state.location} onChange={this.changeLocationHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateDepartment}>Save</button>
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

export default CreateDepartmentComponent