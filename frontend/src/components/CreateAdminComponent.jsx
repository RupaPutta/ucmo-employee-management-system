import React, { Component } from 'react'
import AdminService from '../services/AdminService';

class CreateAdminComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            name: '',
            departmentId: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.saveOrUpdateAdmin = this.saveOrUpdateAdmin.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            AdminService.getAdminById(this.state.id).then( (res) =>{
                let admin = res.data;
                this.setState({name: admin.name,
                    departmentId: admin.departmentId
                });
            });
        }
    }
    saveOrUpdateAdmin = (e) => {
        e.preventDefault();
        let admin = {name: this.state.name, departmentId: this.state.departmentId};
        console.log('admin => ' + JSON.stringify(admin));
        // step 5
        if(this.state.id === '_add'){
            AdminService.createAdmin(admin).then(res =>{
                this.props.history.push('/admins');
            });
        }
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeDepartmentIdHandler= (event) => {
         this.setState({departmentId: event.target.value});
    }

    cancel(){
        this.props.history.push('/admins');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Admin</h3>
        }else{
            return <h3 className="text-center">Update Admin</h3>
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
                                             <label> Department Id: </label>
                                             <input placeholder="Department Id" name="departmentId" className="form-control"
                                                value={this.state.departmentId} onChange={this.changeDepartmentIdHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateAdmin}>Save</button>
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

export default CreateAdminComponent