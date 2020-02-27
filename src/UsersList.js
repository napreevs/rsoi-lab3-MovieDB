import React, { Component } from  'react';
import UsersService from "./UsersService";
const usersService = new UsersService();

class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            users: []
        };
        this.handleDelete  =  this.handleDelete.bind(this);
    }

    componentDidMount() {
        var self = this;
        usersService.getUsers().then(function (result) {
            self.setState({users: result.data})
        });
    }

    handleDelete(e,pk) {
        var self = this;
        usersService.deleteUser({pk: pk}).then(() => {
            var newArr = self.state.users.filter(function (obj) {
                return obj.pk !== pk;
            });
            self.setState({users: newArr})
        });
    }
    render() {

    return (
        <div  className="users--list">
            <table  className="table">
            <thead  key="thead">
            <tr>
                <th>#</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
            </tr>
            </thead>
            <tbody>
            {this.state.users.map( c  =>
                <tr  key={c.pk}>
                    <td>{c.pk}</td>
                <td>{c.username}</td>
                <td>{c.email}</td>
                <td>{c.password}</td>
                <td>
                <button  onClick={(e)=>  this.handleDelete(e,c.pk) }> Delete</button>
                <a  href={"/user/" + c.pk}> Update</a>
                </td>
            </tr>)}
            </tbody>
            </table>
        </div>
        );
  }
}
export default UsersList;

