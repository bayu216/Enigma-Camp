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
  }

  toggleLock(index) {
    const statlock = [...this.state.lockers];
    statlock[index].isLocked = !statlock[index].isLocked;
    this.setState({
      lockers: statlock,
    });
  }

  putShoes(index) {
    const tambahSepatu = [...this.state.lockers];
    tambahSepatu[index].shoes = tambahSepatu[index].shoes + 1;
    this.setState({
      lockers: tambahSepatu,
    });
  }

  takeShoes(index) {
    const kurangSepatu = [...this.state.lockers];
    kurangSepatu[index].shoes = kurangSepatu[index].shoes - 1;
    this.setState({
      lockers: kurangSepatu,
    });
  }

  addLocker(statLock) {
    const add = [...this.state.lockers];
    add.push(new Locker());
    if (statLock) {
      add[add.length - 1].isLocked = true;
    }
    this.setState({
      lockers: add,
    });
  }

  removeLocker(index) {
    const hapus = [...this.state.lockers];
    hapus.splice(index, 1);
    this.setState({
      lockers: hapus,
    });
  }

  render() {
    return (
      <>
        <h1>Locker</h1>
        <Button
          className="me-3 px-2 py-2"
          variant="dark"
          onClick={() => this.addLocker(false)}
        >
          Add Locker
        </Button>
        <Button
          variant="warning"
          className="px-2 py-2"
          onClick={() => this.addLocker(true)}
        >
          Add Locked Locker
        </Button>
        <Row xs="1" sm="2" md="3" lg="4">
          {this.state.lockers.map((objLockers, idx) => {
            return (
              <Col>
                <LockerSlot
                  shoes={objLockers.shoes}
                  status={objLockers.isLocked}
                  hapus={this.removeLocker}
                  putshoes={this.putShoes}
                  takeshoes={this.takeShoes}
                  statlock={this.toggleLock}
                  idx={idx}
                />
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}
