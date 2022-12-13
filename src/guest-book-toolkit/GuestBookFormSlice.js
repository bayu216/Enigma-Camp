import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addGuest } from "./guest-book-slice";

export default function GuestBookFormSlice(props) {
  const { person, changePage, idxSelected } = props;
  const [form, setForm] = useState(person);
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(addGuest({ form, idxSelected }));
    changePage("list");
  };

  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title
            className="d-flex justify-content-center align-items-center"
            as="h5"
          >
            Form Buku Tamu
          </Card.Title>
        </Card.Header>
        <Form onSubmit={handleFormSubmit}>
          <Card.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Nama Depan
              </Form.Label>
              <Col>
                <Form.Control
                  name="firstName"
                  placeholder="Nama Depan"
                  value={form.firstName}
                  onChange={handleOnChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Nama Belakang
              </Form.Label>
              <Col>
                <Form.Control
                  name="lastName"
                  placeholder="Nama Belakang"
                  value={form.lastName}
                  onChange={handleOnChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                No. Telepon
              </Form.Label>
              <Col>
                <Form.Control
                  name="phone"
                  placeholder="No. Telepon"
                  value={form.phone}
                  onChange={handleOnChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Alamat
              </Form.Label>
              <Col>
                <Form.Control
                  name="address"
                  placeholder="Alamat"
                  value={form.address}
                  onChange={handleOnChange}
                />
              </Col>
            </Form.Group>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col
                className="d-flex justify-content-center align-items-center"
                sm="12"
              >
                <Button
                  type="submit"
                  variant={idxSelected === undefined ? "primary" : "warning"}
                >
                  {idxSelected === undefined ? "Save" : "Edit"}
                </Button>
              </Col>
            </Row>
          </Card.Footer>
        </Form>
      </Card>
    </>
  );
}
