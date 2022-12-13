import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import counterSlice, { delCard } from "./counter-slice";
import CounterSliceButton from "./CounterSliceButton";

export default function CounterSliceCard(props) {
  const { cards, title } = useSelector((store) => store[counterSlice.name]);
  const dispatch = useDispatch();

  return (
    <Row className="mb-3 p-3 d-flex justify-content-center align-items-center">
      {cards.map((count, index) => (
        <Col style={{ width: "22rem" }} sm="4" className="mb-3">
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Title as="h4">
                {title} {index + 1}
              </Card.Title>
              <Button
                variant="danger"
                size="sm"
                onClick={() => dispatch(delCard(index))}
              >
                &times;
              </Button>
            </Card.Header>
            <Card.Body className="text-center">
              <Card.Text as="h2">{count}</Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-center">
              <CounterSliceButton index={index} />
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
