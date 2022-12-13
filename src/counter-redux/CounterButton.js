import { Button, Form, InputGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { COUNT_ACTIONS } from "./counter-store";
import { useState } from "react";

function CounterButton(props) {
  const { increment, decrement, labelPlus, labelMinus, idx } = props;
  const [incrementAmount, setIncrementAmount] = useState(0);
  const [decrementAmount, setDecrementAmount] = useState(0);

  return (
    <>
      <InputGroup>
        <Form.Control
          placeholder="Set Increment"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value * 1)}
        />
        <Button
          className="me-5"
          variant="dark"
          onClick={() => increment(incrementAmount, idx)}
        >
          {labelPlus}
        </Button>
        <Form.Control
          placeholder="Set Decrement"
          value={decrementAmount}
          onChange={(e) => setDecrementAmount(e.target.value * 1)}
        />
        <Button
          className=""
          variant="dark"
          onClick={() => decrement(decrementAmount, idx)}
        >
          {labelMinus}
        </Button>
      </InputGroup>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (angka, idx) =>
      dispatch({
        type: COUNT_ACTIONS.INCREMENT,
        payload: { number: angka, idx: idx },
      }),
    decrement: (angka, idx) =>
      dispatch({
        type: COUNT_ACTIONS.DECREMENT,
        payload: { number: angka, idx: idx },
      }),
    deleteCard: (idx) =>
      dispatch({ type: COUNT_ACTIONS.DELETECARD, payload: idx }),
  };
};

export default connect(undefined, mapDispatchToProps)(CounterButton);
