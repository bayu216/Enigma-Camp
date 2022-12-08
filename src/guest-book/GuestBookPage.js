import { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import GuestBookForm from "./GuestBookForm";
import GuestBookList from "./GuestBookList";

export default class GuestBookPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "form",
      guests: [],
      idx: undefined,
      edit: {
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
      },
    };

    this.saveGuest = this.saveGuest.bind(this);
    this.editForm = this.editForm.bind(this);
  }

  setPage(page) {
    this.setState({ page });
  }

  saveGuest(guest, idx) {
    console.log("guestbookpage", guest);
    if (idx !== undefined) {
      const newArr = [...this.state.guests];
      newArr.splice(idx, 1, guest);
      this.setState({
        guests: newArr,
        idx: undefined,
        page: "list",
      });
    } else {
      this.setState({
        guests: [...this.state.guests, guest],
        idx: idx,
        page: "list",
      });
    }
  }

  editForm(form, idx) {
    // this.setState({ edit: [...this.state.edit, form], page: "list" });
    this.setState({
      edit: form,
      idx: idx,
      page: "form",
    });
  }

  render() {
    const { page, guests } = this.state;
    console.log(guests);
    return (
      <>
        <Row className="mt-2">
          <Col sm="12" className="mb-3">
            <Button className="me-2" onClick={() => this.setPage("form")}>
              Open Form
            </Button>
            <Button className="me-2" onClick={() => this.setPage("list")}>
              Open List
            </Button>
          </Col>
          <Col sm="12">
            {page === "list" ? (
              // <GuestBookList data={this.state.guests} />
              <GuestBookList guests={this.state.guests} edit={this.editForm} />
            ) : (
              <GuestBookForm
                saveGuest={this.saveGuest}
                edit={this.state.edit}
                idx={this.state.idx}
              />
            )}
          </Col>
        </Row>
      </>
    );
  }
}
