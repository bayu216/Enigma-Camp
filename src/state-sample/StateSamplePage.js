import { Col, Row } from "react-bootstrap";
import StateClassSample from "./StateClassSample";
import StateFunctionSample from "./StateFunctionSample";

export default function StateSamplePage() {
  return (
    <Row>
      <Col>
        <StateClassSample />
      </Col>
      <Col>
        <StateFunctionSample />
      </Col>
    </Row>
  );
}
