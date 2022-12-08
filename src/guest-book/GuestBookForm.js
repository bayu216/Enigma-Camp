import { Component, createRef } from "react";
import { Form, Card, Row, Col, Button } from "react-bootstrap";

export default class GuestBookForm extends Component {
  constructor(props) {
    super(props);

    /**
     * Controlled Component dan
     * 1. Controlled menggunakan state
     * 2. Harus ada handle onChange
     *
     * Uncontrolled Component
     * 3. Uncontrolled menggunakan ref (createRef)
     */

    this.state = {
      // fullName: "",
      firstName: props.edit.firstName || "",
      lastName: props.edit.lastName || "",
      phone: props.edit.phone || "",
      address: props.edit.address || "",
    };

    this.emailRef = createRef();
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this);
    // this.handleOnChangeNumber = this.handleOnChangeNumber.bind(this);
  }

  //   handleOnChangeName(event) {
  //     console.log(event.target.value);
  //     this.setState({ fullName: event.target.value });
  //   }

  //   handleOnChangeNumber(event) {
  //     console.log(event.target.value);
  //     this.setState({ noTelp: event.target.value });
  //   }

  /**
   *
   * Event
   */

  handleOnChange(event) {
    const value = event.target.value;
    this.setState({ ...this.state, [event.target.name]: value });
    //this.setState({[event.target.name]: event.target.value})
    console.log(event.target.value);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    console.log("guest", this.state);
    if (this.props.idx !== undefined) {
      this.props.saveGuest(this.state, this.props.idx);
    } else {
      this.props.saveGuest(this.state);
    }
  }

  render() {
    return (
      //   <>
      //     <input
      //       type="text"
      //       value={this.state.fullName}
      //       onChange={this.handleOnChange}
      //       name="fullName"
      //       placeholder="Nama Lengkap"
      //       className="my-1"
      //     />
      //     <br />
      //     <input
      //       type="text"
      //       ref={this.state.emailRef}
      //       onChange={this.handleOnChange}
      //       name="emailRef"
      //       placeholder="Email"
      //       className="my-1"
      //     />
      //     <br />
      //     <input
      //       type="number"
      //       value={this.state.phone}
      //       onChange={this.handleOnChange}
      //       name="phone"
      //       placeholder="No Telpon"
      //     />
      //   </>
      <Card>
        <Card.Header>
          <Card.Title as="h5">Form Buku Tamu</Card.Title>
        </Card.Header>
        <Form onSubmit={this.handleFormSubmit}>
          <Card.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Nama Depan
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  name="firstName"
                  placeholder="Nama Depan"
                  value={this.state.firstName}
                  onChange={this.handleOnChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Nama Belakang
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  name="lastName"
                  placeholder="Nama Belakang"
                  value={this.state.lastName}
                  onChange={this.handleOnChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                No Telepon
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  name="phone"
                  placeholder="No Telepon"
                  value={this.state.phone}
                  onChange={this.handleOnChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Alamat
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  name="address"
                  placeholder="Alamat"
                  value={this.state.address}
                  onChange={this.handleOnChange}
                />
              </Col>
            </Form.Group>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col sm="9" className="offset-3">
                <Button type="submit">Save</Button>
              </Col>
            </Row>
          </Card.Footer>
        </Form>
      </Card>
    );
  }
}
