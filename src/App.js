import logo from "./logo.svg";
import "./App.css";
import { Hello, HelloClass } from "./intro/Hello";
import { Col, Container, Row } from "react-bootstrap";
import CetakTabel from "./intro/CetakTabel";

function CobaCetak() {
  return <p>Hay</p>;
}

function App() {
  let nama = "Joni";
  let mobil = {
    brand: "Toyota",
    name: "Rush",
  };

  let greet = () => {
    console.log("Hello");
    const hello = "Hello";
    return hello;
  };

  /**
   * TODO: turunkan mobil dan greet ke component Hello dan HelloClass
   * function hello(mobil,name,job,gender)
   * function HelloReact(props)
   */

  return (
    <Container fluid>
      <Row>
        {/* <Col>
          <Hello nama={nama} {...mobil} greet={greet} job="Actor" gender="M" />
        </Col> */}
        {/* <Col>
          <HelloClass nama={nama} {...mobil} greet={greet} />
          <HelloClass HelloCoba={CobaCetak} car={mobil} greet={greet}>
            <Hello
              nama={nama}
              {...mobil}
              greet={greet}
              job="Actor"
              gender="M"
            />
            <CobaCetak />
          </HelloClass>
        </Col> */}
        <Col sm="12">
          <CetakTabel />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
