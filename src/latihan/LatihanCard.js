import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function LatihanCard(props) {
  const { number, deleteCard, idx } = props; //destructuring object props menjadi {number}
  return (
    <>
      <Card>
        <Card.Header className="text-center bg-secondary">
          Counter
          <Button
            variant="danger"
            className="px-2 py-0 fs-6"
            onClick={() => deleteCard(idx)}
          >
            X
          </Button>
        </Card.Header>
        <Card.Body className="fs-1 text-center">{number}</Card.Body>
      </Card>
    </>
  );
}
