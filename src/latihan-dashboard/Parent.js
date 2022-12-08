import { Component } from "react";
import Dashboard from "./Dashboard";
import LoginPage from "./LoginPage";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      users: "",
    };

    this.handleIsLogin = this.handleIsLogin.bind(this);
    // this.handleUsers = this.handleUsers.bind(this);
  }

  handleIsLogin(userEmail) {
    this.setState({ users: userEmail, isLogin: !this.state.isLogin });
  }

  render() {
    return (
      <>
        {this.state.isLogin ? (
          <Dashboard handleUser={this.handleIsLogin} email={this.state.users} />
        ) : (
          <LoginPage
            handleUser={this.handleIsLogin}
            // handleUsers={this.handleUsers}
          />
        )}
      </>
    );
  }
}

export default Parent;
