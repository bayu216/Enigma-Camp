import { Button } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import CounterCard from "./CounterCard";
import { COUNT_ACTIONS } from "./counter-store";

function CounterReduxPage(props) {
  const { addCard } = props;
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <Button size="sm" onClick={addCard}>
          Tambah Card
        </Button>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        {/* untuk mendapatkan */}
        <Row>
          <CounterCard />
        </Row>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: () => dispatch({ type: COUNT_ACTIONS.ADDCARD }),
  };
};

export default connect(undefined, mapDispatchToProps)(CounterReduxPage);
