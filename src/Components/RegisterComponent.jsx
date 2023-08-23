import React, {Component} from 'react';
import {withRouter} from "../withRouter";
import AuthenticateService from "../Services/AuthenticateService";

class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.Register = this.Register.bind(this);
    }

    changeUsernameHandler = (e) => {
        this.setState({username: e.target.value})
    };
    changePasswordHandler = (e) => {
        this.setState({password: e.target.value})
    };
    Register = (e) => {
        e.preventDefault();
        let user = {username: this.state.username, password: this.state.password};
        console.log('user =>' + JSON.stringify(user));
        AuthenticateService.register(user).then((res) => {
            console.log(res.data.token);
            this.props.navigate('/login');
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Register</h3>
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
                                    <button className="btn btn-success" onClick={this.Register}>Register</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(RegisterComponent);