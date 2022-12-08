import "./App.css";
//import { Hello, HelloClass } from "./intro/Hello";
import { Col, Container, Row } from "react-bootstrap";
//import CetakTabel from "./intro/CetakTabel";
//import PeopleView from "./intro/PeopleView";
import LatihanPage from "./latihan/LatihanPage";
import LockerSlot from "./pr/LockerSlot";
import LockerPage from "./pr/LockerPage";
import GuestBookPage from "./guest-book/GuestBookPage";
import LoginPage from "./latihan-dashboard/LoginPage";
import Dashboard from "./latihan-dashboard/Dashboard";
import Parent from "./latihan-dashboard/Parent";
import UncontrolledPage from "./latihan-dashboard/UncontrolledPage";
import ShoeRentalPage from "./rental-shoes-fixed/ShoeRentalPage";
import ShoeRentalPageFn from "./rental-shoes-fixed/ShoeRentalPageFn";
import CounterReducerPage from "./counter-reducer/CounterReducerPage";
import CounterReducerPageHover from "./counter-reducer/CounterReducerPageHover";
import StateSamplePage from "./state-sample/StateSamplePage";

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
      {/* <Col> */}
      {/* <PeopleView /> */}
      {/* <LatihanPage increment={2} decrement={5} /> */}
      {/* <LockerPage /> */}
      {/* <GuestBookPage /> */}
      {/* </Col> */}
      {/* <LoginPage /> */}
      {/* <Dashboard /> */}
      {/* <Parent /> */}
      {/* <UncontrolledPage /> */}
      {/* <ShoeRentalPage /> */}
      {/* <ShoeRentalPageFn /> */}
      {/* <CounterReducerPage />
      <CounterReducerPageHover /> */}
      <StateSamplePage />
    </Container>
  );
}

export default App;
