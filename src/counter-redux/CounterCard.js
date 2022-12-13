import { Button, Card, Col } from "react-bootstrap";
import { connect } from "react-redux";
import CounterButton from "./CounterButton";
import { COUNT_ACTIONS } from "./counter-store";

function CounterCard(props) {
  const { judul, cardSlot, deleteCard } = props;
  return (
    <>
      {cardSlot.map((item, idx) => (
        <Col>
          <Card style={{ width: "18rem" }} className="mt-4 ms-2">
            <Card.Header className="d-flex justify-content-between">
              <Card.Title as="h3">
                {judul} {idx + 1}
              </Card.Title>
              <Button variant="danger" onClick={() => deleteCard(idx)}>
                x
              </Button>
            </Card.Header>
            <Card.Body className="d-flex justify-content-center align-items-center">
              <Card.Text as="h2">{item.count}</Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-center">
              <CounterButton idx={idx} labelPlus="+" labelMinus="-" />
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </>
  );
}

function mapStateToProps(state) {
  return {
    judul: state.title,
    cardSlot: state.cardSlot,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard: (idx) =>
      dispatch({ type: COUNT_ACTIONS.DELETECARD, payload: idx }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterCard);
