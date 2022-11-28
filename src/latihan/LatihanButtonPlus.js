import { Button } from "react-bootstrap";

export default function BtnPlus(props) {
  //const { plus, increment } = props; //destructuring object props menjadi {}
  //const number = increment === null ? 1 : increment;
  return (
    <>
      {/* <Button variant="dark" onClick={() => plus(number)}>
        {`+ ${number}`}
      </Button> */}
      <Button
        disabled={props.status}
        variant="dark"
        className="px-4 py-2 fs-3"
        onClick={() => props.plus(props.idx, props.increment)}
      >
        +{props.increment}
      </Button>
    </>
  );
}
