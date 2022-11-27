import "./App.css";
//import { Hello, HelloClass } from "./intro/Hello";
import { Col, Container, Row } from "react-bootstrap";
//import CetakTabel from "./intro/CetakTabel";
//import PeopleView from "./intro/PeopleView";
import LatihanPage from "./latihan/LatihanPage";
import LockerSlot from "./pr/LockerSlot";
import LockerPage from "./pr/LockerPage";

// function CobaCetak() {
//   return <p>Hay</p>;
// }

function App() {
  //   let nama = "Joni";
  //   let mobil = {
  //     brand: "Toyota",
  //     name: "Rush",
  //   };

  //   let greet = () => {
  //     console.log("Hello");
  //     const hello = "Hello";
  //     return hello;
  //   };

  /**
   * TODO: turunkan mobil dan greet ke component Hello dan HelloClass
   * function hello(mobil,name,job,gender)
   * function HelloReact(props)
   */

  return (
    <Container fluid>
      {/* <Col>
          <Hello nama={nama} {...mobil} greet={greet} job="Actor" gender="M" />
        </Col>
        <Col>
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
        </Col>
        <Col sm="12">
          <CetakTabel />
        </Col> */}
      <Col>
        {/* <PeopleView /> */}
        {/* <LatihanPage increment={2} decrement={5} /> */}
        <LockerPage />
      </Col>
    </Container>
  );
}

export default App;
