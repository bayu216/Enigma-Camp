import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { decrement, increment } from "./counter-slice";

export default function CounterSliceButton(props) {
  const { index, labelPlus = "+", labelMinus = "-" } = props;
  const dispatch = useDispatch();
  const [incrementValue, setIncrementValue] = useState();
  const [decrementValue, setDecrementValue] = useState();

  return (
    <>
      <InputGroup>
        <Form.Control
          placeholder="Set Increment"
          value={incrementValue}
          onChange={(e) => setIncrementValue(e.target.value * 1)}
        />
        <Button
          className="me-5"
          variant="dark"
          onClick={() => dispatch(increment({ incrementValue, index }))}
        >
          {labelPlus}
        </Button>
        <Form.Control
          placeholder="Set Decrement"
          value={decrementValue}
          onChange={(e) => setDecrementValue(e.target.value * 1)}
        />
        <Button
          className=""
          variant="dark"
          onClick={() => dispatch(decrement({ decrementValue, index }))}
        >
          {labelMinus}
        </Button>
      </InputGroup>
    </>
  );
}
