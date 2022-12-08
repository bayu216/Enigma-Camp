import { Component } from "react";
import { Button, Col } from "react-bootstrap";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Col>
          <h1>Dashboard</h1>
          <span>Welcome, {this.props.email}</span>
          <br />
          <Button onClick={this.props.handleUser} variant="danger">
            Logout
          </Button>
        </Col>
      </>
    );
  }
}
