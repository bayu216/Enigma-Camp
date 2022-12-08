import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import LockerPanel from "./LockerPanel";
import Alert from "react-bootstrap/Alert";
import { Col } from "react-bootstrap";

export default function LockerSlot(props) {
  const { number, shoes, isLocked, functions } = props;
  const { removeLocker, toggleLock, putShoes, takeShoes } = functions;
  return (
    <>
      <Col sm="3" className="mb-4">
        <Card className="text-center mt-2">
          <Card.Header className="d-flex justify-content-between align-items-center">
            <Card.Title className="m-0">Locker {number + 1}</Card.Title>
            <Button
              className="px-2 py-0"
              variant="danger"
              disabled={shoes > 0 ? true : false}
              onClick={() => removeLocker(number)}
            >
              &times;
            </Button>
          </Card.Header>
          <Card.Body style={{ fontWeight: "600" }}>
            {!isLocked ? (
              <Alert variant={shoes < 3 ? "info" : "warning"}>
                Shoes Stored: {shoes}
              </Alert>
            ) : (
              <Alert variant="danger">LOCKED</Alert>
            )}
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between align-items-center">
            <LockerPanel
              // putshoes={props.putshoes}
              // takeshoes={props.takeshoes}
              // shoes={props.shoes}
              // status={props.status}
              // statlock={props.statlock}
              // idx={props.idx}
              toggleLock={toggleLock}
              putShoes={putShoes}
              takeShoes={takeShoes}
              number={number}
              shoes={shoes}
              isLocked={isLocked}
            />
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
}
