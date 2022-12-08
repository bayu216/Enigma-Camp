import { Component } from "react";
import ShoesRentalForm from "./ShoesRentalForm";
import { Row, Col, Button } from "react-bootstrap";
import ShoesRentalList from "./ShoesRentalList";

class Transaction {
  constructor() {
    this.id = "";
    this.shoe = "";
    this.wearer = "";
    this.duration = 0;
    this.borrowedAt = "";
    this.returnedAt = "";
    this.payment = 0;
    this.fine = 0;
    this.status = "";
    this.condition = "";
  }
}

class ShoesRentalPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "form",
      filter: "",
      dataPeminjam: [],
      transaction: new Transaction(),
    };
  }

  setPage = (page) => {
    this.setState({ page });
  };

  savePeminjam = (rent) => {
    if (rent.returnedAt === "") {
      this.setState({
        dataPeminjam: [...this.state.dataPeminjam, rent],
        page: "list",
      });
    } else {
      const arrData = [...this.state.dataPeminjam];
      const idx = arrData.findIndex((item) => item.id === rent.id);
      arrData.splice(idx, 1, rent);
      this.setState({
        dataPeminjam: arrData,
        page: "list",
        transaction: new Transaction(),
      });
    }
  };

  setFilter = (value) => {
    this.setState({ filter: value.target.name });
  };

  onHandleEdit = (dataSelected) => {
    this.setState({
      transaction: dataSelected,
      page: "form",
    });
  };

  handlePage = (switchPage) => {
    this.setState({ page: switchPage, transaction: new Transaction() });
  };

  render() {
    console.log(this.state);
    const { page } = this.state;
    return (
      <>
        <Row style={{ marginTop: "20px" }}>
          <Col sm="12" className="mb-3">
            <Button
              variant="dark"
              className="me-3"
              onClick={() => this.handlePage("form")}
            >
              Form Peminjam
            </Button>

            <Button variant="warning" onClick={() => this.handlePage("list")}>
              Daftar Peminjam
            </Button>
          </Col>
          <Col>
            {page === "list" ? (
              <ShoesRentalList
                dataPeminjam={this.state.dataPeminjam}
                onHandleEdit={this.onHandleEdit}
                filter={this.state.filter}
              />
            ) : (
              <ShoesRentalForm
                savePeminjam={this.savePeminjam}
                data={this.state.transaction}
              />
            )}
          </Col>
        </Row>
      </>
    );
  }
}

export default ShoesRentalPage;
