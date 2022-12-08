import { useReducer } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { counterReducer, initialState } from "./reducer";

export default function CounterReducerPage() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const increment = () => {
    dispatch({ type: "increment", payload: 1 });
  };
  const decrement = () => {
    dispatch({ type: "decrement", payload: 1 });
  };
  const multiply = () => {
    dispatch({ type: "multiply", payload: 2 });
  };
  const division = () => {
    dispatch({ type: "division", payload: 2 });
  };
  const reset = () => {
    dispatch({ type: "reset", payload: initialState });
  };

  return (
    <Row>
      <Col
        sm="12"
        className="d-flex mt-3 justify-content-center align-items-center"
      >
        {state.count}
      </Col>
      <Col
        sm="12"
        className="d-flex mt-3 justify-content-center align-items-center"
      >
        <Button onClick={increment} className="mx-2 px-5">
          +
        </Button>
        <Button onClick={decrement} className="mx-2 px-5">
          -
        </Button>
        <Button onClick={multiply} className="mx-2 px-5">
          *
        </Button>
        <Button onClick={division} className="mx-2 px-5">
          /
        </Button>
        <Button onClick={reset} className="mx-2 px-5">
          Reset
        </Button>
      </Col>
    </Row>
  );
}
