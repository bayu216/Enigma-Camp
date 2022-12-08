import { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Locker from "./Locker";
import LockerSlot from "./LockerSlot";

export default class LockerPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lockers: [new Locker()],
    };

    this.removeLocker = this.removeLocker.bind(this);
    this.toggleLock = this.toggleLock.bind(this);
    this.putShoes = this.putShoes.bind(this);
    this.takeShoes = this.takeShoes.bind(this);
    this.addLocker = this.addLocker.bind(this);
  }

  // toggleLock(index) {
  //   const statlock = [...this.state.lockers];
  //   statlock[index].isLocked = !statlock[index].isLocked;
  //   this.setState({
  //     lockers: statlock,
  //   });
  // }

  toggleLock(index) {
    this.setState({
      lockers: this.state.lockers.map((locker, idx) => {
        if (idx === index) {
          locker.isLocked = !locker.isLocked;
        }

        return locker;
      }),
    });
  }

  // putShoes(index) {
  //   const tambahSepatu = [...this.state.lockers];
  //   tambahSepatu[index].shoes = tambahSepatu[index].shoes + 1;
  //   this.setState({
  //     lockers: tambahSepatu,
  //   });
  // }

  putShoes(index) {
    this.setState({
      lockers: this.state.lockers.map((locker, idx) => {
        if (idx === index) {
          locker.shoes += 1;
        }

        return locker;
      }),
    });
  }

  // takeShoes(index) {
  //   const kurangSepatu = [...this.state.lockers];
  //   kurangSepatu[index].shoes = kurangSepatu[index].shoes - 1;
  //   this.setState({
  //     lockers: kurangSepatu,
  //   });
  // }
  takeShoes(index) {
    this.setState({
      lockers: this.state.lockers.map((locker, idx) => {
        if (idx === index && locker.shoes > 0) {
          locker.shoes -= 1;
        }

        return locker;
      }),
    });
  }

  // addLocker(statLock) {
  //   const add = [...this.state.lockers];
  //   add.push(new Locker());
  //   if (statLock) {
  //     add[add.length - 1].isLocked = true;
  //   }
  //   this.setState({
  //     lockers: add,
  //   });
  // }
  addLocker() {
    this.setState({ lockers: [...this.state.lockers, new Locker()] });
  }

  // removeLocker(index) {
  //   const hapus = [...this.state.lockers];
  //   hapus.splice(index, 1);
  //   this.setState({
  //     lockers: hapus,
  //   });
  // }

  removeLocker(index) {
    const lockers = [...this.state.lockers];
    lockers.splice(index, 1);
    this.setState({
      lockers,
    });
  }

  render() {
    const functions = {
      removeLocker: this.removeLocker,
      toggleLock: this.toggleLock,
      putShoes: this.putShoes,
      takeShoes: this.takeShoes,
    };
    return (
      // <>
      //   <h1>Locker</h1>
      //   <Button
      //     className="me-2 px-2 py-2"
      //     variant="dark"
      //     onClick={() => this.addLocker(false)}
      //   >
      //     Add Locker
      //   </Button>
      //   <Button
      //     variant="warning"
      //     className="px-2 py-2"
      //     onClick={() => this.addLocker(true)}
      //   >
      //     Add Locked Locker
      //   </Button>
      //   <Row xs="1" sm="2" md="3" lg="4">
      //     {this.state.lockers.map((objLockers, idx) => {
      //       return (
      //         <Col>
      //           <LockerSlot
      //             shoes={objLockers.shoes}
      //             status={objLockers.isLocked}
      //             hapus={this.removeLocker}
      //             putshoes={this.putShoes}
      //             takeshoes={this.takeShoes}
      //             statlock={this.toggleLock}
      //             idx={idx}
      //           />
      //         </Col>
      //       );
      //     })}
      //   </Row>
      // </>
      <>
        <Row className="p-3">
          <Col sm="12" className="mb-3">
            <h1>Locker</h1>
            <Button
              onClick={this.addLocker}
              className="px-3 me-2"
              variant="dark"
            >
              Add Locker
            </Button>
            <Button className="px-3" variant="warning">
              Add Locked Locker
            </Button>
          </Col>
          {this.state.lockers.map((locker, index) => {
            return (
              <LockerSlot
                key={index}
                number={index}
                shoes={locker.shoes}
                isLocked={locker.isLocked}
                functions={functions}
              />
            );
          })}
        </Row>
      </>
    );
  }
}
