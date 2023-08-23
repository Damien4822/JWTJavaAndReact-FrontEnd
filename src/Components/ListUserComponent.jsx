import React, {Component} from 'react';
import {withRouter} from "../withRouter";
import UserService from "../Services/UserService";

class ListUserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
        this.addUser = this.addUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    componentDidMount() {
        UserService.getAll().then(res => {
            this.setState({users: res.data});
        });
    }

    updateUser(id) {
        this.props.navigate(`/update/${id}`);
    }

    addUser() {
        this.props.navigate('/user/create');
    }

    deleteUser(id) {
        UserService.delete(id);
        window.location.reload();
    }

    render() {
        return (
            <div>
                <h2 className="text-center">User List</h2>
                <div>
                    <button className="btn btn-primary" onClick={this.addUser}>Add User</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>UserName</th>
                            <th>Password</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.users.map(
                                user =>
                                    <tr key={user.id}>
                                        <td>{user.username}</td>
                                        <td>{user.password}</td>
                                        <td>{user.role}</td>
                                        <td>
                                            <button onClick={() => this.updateUser(user.id)}
                                                    className="btn btn-info">Update
                                            </button>
                                            <button onClick={() => this.deleteUser(user.id)}
                                                    className="btn btn-danger">Delete
                                            </button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default withRouter(ListUserComponent);