import { Component } from "react";
import {
  Card,
  Form,
  Dropdown,
  Col,
  Row,
  Button,
  DropdownButton,
} from "react-bootstrap";

class ShoesRentalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.data.id,
      shoe: props.data.shoe,
      wearer: props.data.wearer,
      duration: props.data.duration,
      borrowedAt: props.data.borrowedAt,
      returnedAt: props.data.returnedAt,
      payment: props.data.payment,
      fine: props.data.fine,
      status: "Dipinjam",
      condition: props.data.condition,
    };
  }

  handleDropdown = (value) => {
    this.setState({ duration: value });
  };

  handleDropCondition = (value) => {
    if (value === "Rusak") {
      this.setState({ condition: "Rusak" });
    } else {
      this.setState({ condition: "Baik" });
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...this.state };

    if (data.id === "") {
      data["id"] = new Date().valueOf();
      this.setState(this.props.savePeminjam(data));
    } else {
      const resPayment = this.handlePayment(data.duration);
      const resDenda = this.handleFine(this.state.fine);
      data["payment"] = resPayment;
      data["fine"] = resDenda;
      if (this.handleDate() > 0) {
        data["status"] = "Telat";
      } else {
        data["status"] = "Kembali";
      }
      this.setState(this.props.savePeminjam(data));
    }
    console.log("data", data);
  };

  handlePayment = (day) => {
    const biaya = 10000 * day;
    return biaya;
  };

  handleDate = () => {
    let date1 = new Date(this.state.borrowedAt);
    let date2 = new Date(this.state.returnedAt);
    let totalTime = date2.getTime() - date1.getTime();
    let lamaTelat = totalTime / (1000 * 3600 * 24);
    return lamaTelat - this.state.duration;
  };

  handleFine = () => {
    const lamaTelat = this.handleDate();
    console.log(lamaTelat);
    let biaya = 0;
    if (lamaTelat > 0) {
      biaya = lamaTelat * 5000;
    }
    if (this.state.condition === "Rusak") {
      biaya += 10000;
    }
    return biaya;
  };

  render() {
    return (
      <>
        <Card>
          <Card.Header>
            <Card.Title as="h5">Rental Sepatu World Cup Jaya</Card.Title>
          </Card.Header>
          <Form onSubmit={this.handleSubmit}>
            <Card.Body>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="3">
                  Sepatu
                </Form.Label>
                <Col>
                  <Form.Control
                    name="shoe"
                    placeholder="Nama Sepatu"
                    value={this.state.shoe}
                    onChange={this.handleChange}
                    readOnly={this.state.id}
                    required
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="3">
                  Nama Peminjam
                </Form.Label>
                <Col>
                  <Form.Control
                    name="wearer"
                    placeholder="Nama Peminjam"
                    value={this.state.wearer}
                    onChange={this.handleChange}
                    readOnly={this.state.id}
                    required
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="3">
                  Tanggal Pinjam
                </Form.Label>
                <Col>
                  <Form.Control
                    name="borrowedAt"
                    type="date"
                    placeholder="Tanggal"
                    value={this.state.borrowedAt}
                    onChange={this.handleChange}
                    readOnly={this.state.id}
                    required
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="3">
                  Durasi Peminjaman
                </Form.Label>
                <Col>
                  <div className="d-flex">
                    <DropdownButton
                      onSelect={this.handleDropdown}
                      className="w-100"
                      variant="warning"
                      disabled={this.state.id ? true : false}
                      title={
                        this.state.duration
                          ? `Durasi: ${this.state.duration} Hari`
                          : "Pilih Durasi"
                      }
                      required
                    >
                      <Dropdown.Item eventKey="1">1 Hari</Dropdown.Item>
                      <Dropdown.Item eventKey="2">2 Hari</Dropdown.Item>
                      <Dropdown.Item eventKey="3">3 Hari</Dropdown.Item>
                    </DropdownButton>
                  </div>
                </Col>
              </Form.Group>
              {!this.state.id ? (
                ""
              ) : (
                <div>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="3">
                      Tanggal Pengembalian
                    </Form.Label>
                    <Col>
                      <Form.Control
                        type="date"
                        name="returnedAt"
                        placeholder="Tanggal Pengembalian"
                        value={this.state.returnedAt}
                        onChange={this.handleChange}
                        required
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="3">
                      Kondisi Sepatu
                    </Form.Label>
                    <Col>
                      <DropdownButton
                        onSelect={this.handleDropCondition}
                        className="w-100"
                        variant="info"
                        title={
                          this.state.condition
                            ? this.state.condition
                            : "Pilih Kondisi"
                        }
                        required
                      >
                        <Dropdown.Item eventKey="Baik">Baik</Dropdown.Item>
                        <Dropdown.Item eventKey="Rusak">Rusak</Dropdown.Item>
                      </DropdownButton>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="3">
                      Status
                    </Form.Label>
                    <Col>
                      <h5 className="text-uppercase font-weight-bold">
                        {this.state.status}
                      </h5>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="3">
                      Total Bayar
                    </Form.Label>
                    <Col>
                      <Form.Control
                        name="payment"
                        value={`Rp. ${this.handlePayment(this.state.duration)}`}
                        readOnly={true}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="3">
                      Total Denda
                    </Form.Label>
                    <Col>
                      <Form.Control
                        name="denda"
                        value={`Rp. ${this.handleFine(this.state.fine)}`}
                        readOnly={true}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </Form.Group>
                </div>
              )}
            </Card.Body>
            <Card.Footer>
              <Row>
                <Col sm="12">
                  <Button
                    type="submit"
                    variant={!this.state.id ? "primary" : "success"}
                  >
                    {!this.state.id
                      ? "Ajukan Peminjaman"
                      : "Simpan Pengembalian"}
                  </Button>
                </Col>
              </Row>
            </Card.Footer>
          </Form>
        </Card>
      </>
    );
  }
}

export default ShoesRentalForm;
