import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import LockerPanel from "./LockerPanel";
import Alert from "react-bootstrap/Alert";

export default function LockerSlot(props) {
  return (
    <>
      <Card className="text-center mt-2">
        <Card.Header>
          <div
            className="d-flex justify-content-between"
            style={{ fontWeight: "600" }}
          >
            <h4>Locker {props.idx + 1}</h4>
            <Button
              className="px-2 py-0"
              variant="danger"
              disabled={props.shoes > 0 ? true : false}
              onClick={() => props.hapus(props.idx)}
            >
              X
            </Button>
          </div>
        </Card.Header>
        <Card.Body style={{ fontWeight: "600" }}>
          {props.status === true ? (
            <Alert variant="danger">LOCKED</Alert>
          ) : (
            <Alert variant={props.shoes < 3 ? "info" : "warning"}>
              Shoes Stored: {props.shoes}
            </Alert>
          )}
        </Card.Body>
        <Card.Footer className="text-muted">
          <LockerPanel
            putshoes={props.putshoes}
            takeshoes={props.takeshoes}
            shoes={props.shoes}
            status={props.status}
            statlock={props.statlock}
            idx={props.idx}
          />
        </Card.Footer>
      </Card>
    </>
  );
}
