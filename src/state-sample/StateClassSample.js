import { Component } from "react";
import { Button, Card } from "react-bootstrap";
import AnakPertama from "./AnakPertama";

export default class StateClassSample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
    };
  }

  render() {
    console.log("Rendering component :", StateClassSample.name);
    return (
      <Card>
        <Card.Header>
          <Card.Title>State Class Component</Card.Title>
        </Card.Header>
        <Card.Body>
          <p className="text-center">
            {this.state.firstName} {this.state.lastName}
          </p>
          <AnakPertama />
        </Card.Body>
        <Card.Footer className="d-flex justify-content-center align-items-center">
          <Button onClick={() => this.setState({ firstName: "Bayu" })}>
            Change First Name
          </Button>
          <Button onClick={() => this.setState({ lastName: "Saputra" })}>
            Change Last Name
          </Button>
        </Card.Footer>
      </Card>
    );
  }
}
