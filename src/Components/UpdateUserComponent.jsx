import React, {Component} from 'react';
import {withRouter} from "../withRouter";
import UserService from "../Services/UserService";


class UpdateUserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.params.id,
            username: '',
            password: ''
        }
        this.new = {
            username: '',
            password: ''
        }
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    componentDidMount() {
        UserService.getOneById(this.state.id).then((res) => {
            let user = res.data;
            this.setState({username: user.username, password: user.password});
        });
    }

    updateUser = (event) => {
        let user;
        //turn off checking changes in password and username for testing
        // want to check if the password has changed
        //if (this.state.password ===this.new.password)//no change in password
        //{
        //  user = {password: this.state.password};
        //}
        //else
        //{
        //   user = {password: this.new.password};
        //}
        //same thing with password, but now is username
        //if (this.state.username ===this.new.username)//no change in username
        //{
        //   user = {username: this.state.username};
        //}
        //else
        //{
        //    user = {username: this.new.username};
        //}
        user = {username: this.state.user, password: this.state.password};
        console.log('user =>' + JSON.stringify(user));
        UserService.update(this.state.id, user).then((res) => {
            this.props.navigate('/user/index');
        });
    }
    changeUsernameHandler = (event) => {
        this.state.username = event.target.value
    };

    changePasswordHandler = (event) => {
        this.state.password = event.target.value
    };

    cancel() {
        this.props.navigate('/user/index');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update User</h3>
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
                                    <button className="btn btn-success" onClick={this.updateUser}>Save User</button>
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

export default withRouter(UpdateUserComponent);