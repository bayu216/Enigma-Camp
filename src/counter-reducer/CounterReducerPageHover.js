import { useReducer } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { counterReducer, initialState } from "./reducer";

export default function CounterReducerPageHover() {
  // implementasi useReducer
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
        <Button onMouseOver={increment} className="mx-2 px-5">
          +
        </Button>
        <Button onMouseOver={decrement} className="mx-2 px-5">
          -
        </Button>
        <Button onMouseOver={multiply} className="mx-2 px-5">
          *
        </Button>
        <Button onMouseOver={division} className="mx-2 px-5">
          /
        </Button>
        <Button onMouseOver={reset} className="mx-2 px-5">
          Reset
        </Button>
      </Col>
    </Row>
  );
}
