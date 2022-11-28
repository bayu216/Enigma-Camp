import { Button } from "react-bootstrap";

export default function BtnMin(props) {
  // const { minus, decrement } = props; //destructuring object props, menggunakan property dalam {} menjadi props
  //const number = decrement === null ? 1 : decrement;
  return (
    <>
      {/* <Button variant="dark" onClick={() => minus(number)}>
        {`- ${number}`}
      </Button> */}

      <Button
        disabled={props.status}
        variant="dark"
        className="px-4 py-2 fs-3"
        onClick={() => props.minus(props.idx, props.decrement)}
      >
        -{props.decrement}
      </Button>
    </>
  );
}
