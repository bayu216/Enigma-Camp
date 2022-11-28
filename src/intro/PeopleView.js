import { Component } from "react";
import { Button, Row, Col } from "react-bootstrap";
import people from "./people";
import PeopleList from "./PeopleList";

/**
 * STATE:
 * 1. Untuk saat ini, state hanya di class.
 * 2. State disiapkan di constructor class.
 * 3. Immutable, hanya bisa diubah melalui function setState
 * 4.
 */

// ketika fungsi mempunyai parameter(props) maka fungsi tsb membutuhkan sebuah anonym function untuk menghindari infinite loop karena ketika dirender dia akan jalan terus

export default class PeopleView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: true,
      page: "List",
      counter: 0,
      people: [...people],
      someone: null,
      kerja: null,
      gen: null,
    };

    // bind, diperlukan ketika suatu class function dikirimkan sebagai parameter ke suatu component
    // ketika sampai di onClick (dipanggil), konteks this-nya hilang
    // untuk mengarahkan konteks this-nya, perlu ada binding
    this.toggleIsActive = this.toggleIsActive.bind(this);
    this.pickSomeone = this.pickSomeone.bind(this);
  }

  toggleIsActive() {
    // awalnya
    // this.setState((prevState) => ({
    //   ...prevState,
    //   isActive: !prevState.isActive,
    // }));
    // disederhanakan
    //this.setState((prevState) => ({ isActive: !prevState.isActive }));
    // disederhanakan lagi
    this.setState({ isActive: !this.state.isActive });
  }

  pickSomeone(someone, kerja, gen) {
    this.setState({ someone: someone, kerja: kerja, gen: gen });
  }

  render() {
    console.log(this.state);
    // Di JS ada event listener : onClick, onChange, onBlur, onKeyUp, onMouseOver
    return (
      <Row className="vh-100">
        <Col
          sm="12"
          className="d-flex justify-content-between align-items-center"
        >
          <h2>
            You clicked :
            {this.state.someone === null
              ? "NoBody"
              : `${this.state.someone}, Pekerjaan : ${
                  this.state.kerja
                }, Gender: ${this.state.gen === "M" ? "Male" : "Female"}`}
          </h2>
          <Button onClick={this.toggleIsActive}>
            Is Active: {this.state.isActive ? "true" : "false"}
          </Button>
        </Col>
        <Col sm="12">
          <PeopleList
            people={this.state.people} //parsing data
            pickSomeone={this.pickSomeone} //parsing data
          />
        </Col>
      </Row>
    );
  }
}
