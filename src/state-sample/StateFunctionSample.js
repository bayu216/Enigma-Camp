import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import AnakPertama from "./AnakPertama";

export default function StateFunctionSample(props) {
  const [state, setState] = useState({ firstName: "", lastName: "" });
  const [teman, setTeman] = useState([
    "Roronoa Zoro",
    "Jimbe Oyabun",
    "Monkey D Luffy",
  ]);
  console.log("Rendering component", "StateClassSample");
  console.log("state function", state);
  console.log("teman function", teman);

  return (
    <Card>
      <Card.Header>
        <Card.Title>State Function Component</Card.Title>
      </Card.Header>
      <Card.Body>
        <p className="text-center">
          {state.firstName} {state.lastName}
        </p>
        <p>Temannya:</p>
        <ul>
          {teman.map((tmn) => (
            <li>{tmn}</li>
          ))}
        </ul>
        <AnakPertama />
      </Card.Body>
      <Card.Footer className="d-flex justify-content-center align-items-center">
        <Button onClick={() => setState({ ...state, firstName: "Fauzi" })}>
          Change First Name
        </Button>
        <Button onClick={() => setState({ ...state, lastName: "K" })}>
          Change Last Name
        </Button>
        <Button onClick={() => setTeman([...teman, "Usop"])}>
          Tambah Teman
        </Button>
      </Card.Footer>
    </Card>
  );
}
