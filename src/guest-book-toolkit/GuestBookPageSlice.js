import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Provider } from "react-redux";
import MainStore from "../store";
import GuestBookFormSlice from "./GuestBookFormSlice";
import GuestBookListSlice from "./GuestBookListSlice";

class Person {
  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.phone = "";
    this.address = "";
  }
}

export default function GuestBookPageSlice() {
  const [page, setPage] = useState("form");
  const [person, setPerson] = useState(new Person());
  const [idxSelected, setIdxSelected] = useState(undefined);

  const onHandleEdit = (personSelected, idx) => {
    setPerson(personSelected);
    setPage("form");
    setIdxSelected(idx);
  };

  const changePage = (newPage) => {
    setPage(newPage);
    setPerson(new Person());
    setIdxSelected(undefined);
  };

  return (
    <Provider store={MainStore}>
      <Row className="p-3">
        <Col sm="12" className="mb-3">
          <Button
            variant="success"
            className="me-3"
            onClick={() => changePage("form")}
          >
            Open Form
          </Button>
          <Button variant="info" onClick={() => changePage("list")}>
            Open List
          </Button>
        </Col>
        <Col sm="12">
          {page === "list" ? (
            <GuestBookListSlice onHandleEdit={onHandleEdit} />
          ) : (
            <GuestBookFormSlice
              person={person}
              idxSelected={idxSelected}
              setIdxSelected={setIdxSelected}
              changePage={changePage}
            />
          )}
        </Col>
      </Row>
    </Provider>
  );
}
