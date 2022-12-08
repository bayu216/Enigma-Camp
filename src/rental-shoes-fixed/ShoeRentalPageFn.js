import { Component, useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ShoeRentalFormFn from "./ShoeRentalFormFn";
import ShoeRentalListFn from "./ShoeRentalListFn";
import ShoeRentalContextFn, {
  ShoeRentalProvider,
  ShoeRentalConsumer,
} from "./ShoeRentalContextFn";

export default function ShoeRentalPageFn(props) {
  const [state, setState] = useState({
    page: "list",
  });

  return (
    <ShoeRentalProvider>
      <Row className="m-5 vh-100 d-flex justify-content-center align-items-center">
        {state.page === "form" ? (
          <Col md="8">
            <ShoeRentalFormFn
              openList={() => {
                setState({ page: "list" });
              }}
            />
          </Col>
        ) : (
          <Col>
            <ShoeRentalListFn openForm={() => setState({ page: "form" })} />
          </Col>
        )}
      </Row>
    </ShoeRentalProvider>
  );
}
