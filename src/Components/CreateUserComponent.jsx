import React, {Component} from 'react';
import {withRouter} from "../withRouter";
import AuthenticateService from "../Services/AuthenticateService";

class CreateUserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (event) => {
        event.preventDefault();
        let user = {username: this.state.username, password: this.state.password};
        console.log('user =>' + JSON.stringify(user));
        AuthenticateService.register(user).then(res => {
            this.props.navigate('/user/index')
        });
    }
    changeUsernameHandler = (event) => {
        this.setState({username: event.target.value});
    }
    changePasswordHandler = (event) => {
        this.setState({password: event.target.value});
    }

    cancel() {
        this.props.navigate('/user/index');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add User</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>UserName</label>
                                        <input placeholder="username" name="username" className="form-control"
                                               value={this.state.username} onChange={this.changeUsernameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input placeholder="password" name="password" className="form-control"
                                               value={this.state.password} onChange={this.changePasswordHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveUser}>Save User</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(CreateUserComponent);