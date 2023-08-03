import React, { Component } from 'react'
import AdminService from '../services/AdminService'

class ListAdminComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
                admins: []
        }
        this.addAdmin = this.addAdmin.bind(this);
        this.editAdmin = this.editAdmin.bind(this);
        this.deleteAdmin = this.deleteAdmin.bind(this);
    }

    deleteAdmin(adminId){
        AdminService.deleteAdmin(adminId).then( res => {
            this.setState({admins: this.state.admins.filter(admin => admin.adminId !== adminId)});
        });
    }
    viewAdmin(adminId){
        this.props.history.push(`/view-admin/${adminId}`);
    }
    editAdmin(adminId){
        this.props.history.push(`/add-admin/${adminId}`);
    }

    componentDidMount(){
        AdminService.getAdmins().then((res) => {
            this.setState({ admins: res.data});
        });
    }

    addAdmin(){
        this.props.history.push('/add-admin/_add');
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
                                    <th> Department Id</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.admins.map(
                                        admin =>
                                        <tr key = {admin.adminId}>
                                             <td> { admin.name} </td>
                                             <td> { admin.departmentId }</td>

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

export default ListAdminComponent