import { Component } from "react";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      users: {
        email: "bayu@gmail.com",
        password: "12345678",
      },
    };

    // this.handleEmail = this.handleEmail.bind(this);
    // this.handlePassword = this.handlePassword.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleEmail(event) {
  //   this.setState({ email: event.target.value });
  // }

  // handlePassword(event) {
  //   this.setState({ password: event.target.value });
  // }

  handleOnChange(event) {
    const value = event.target.value;
    this.setState({ [event.target.name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (
      this.state.email === this.state.users.email &&
      this.state.password === this.state.users.password
    ) {
      this.props.handleUser(this.state.email);
      // this.props.handleUsers(this.state.email);
    } else {
      alert("Email atau Password anda tidak sesuai");
      window.location.reload();
    }
    console.log(this.state.email);
    console.log(this.state.password);
  }

  render() {
    return (
      <>
        <div className="row justify-content-md-center">
          <div className="card" style={{ width: "24rem" }}>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={this.handleOnChange}
                    value={this.state.email}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={this.handleOnChange}
                    value={this.state.password}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
