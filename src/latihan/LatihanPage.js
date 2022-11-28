import { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import BtnMin from "./LatihanButtonMinus";
import BtnPlus from "./LatihanButtonPlus";
import LatihanCard from "./LatihanCard";

//memakai class karena LatihanPage berfungsi sebagai state manager yang mengatur childnya
export default class LatihanPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      angka: [],
    };

    //mengarahkan konteks this ke class LatihanPage, karena yang diarahkan ke props, hanya referensi fungsi
    this.minus = this.minus.bind(this);
    this.plus = this.plus.bind(this);
    this.addCard = this.addCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  minus(idx, decrement) {
    // this.setState({
    //   angka: this.state.angka - decrement,
    // });
    // const hasil = this.state.angka - this.props.decrement;
    // this.setState({ angka: hasil <= 0 ? 0 : hasil });
    const tampung = [...this.state.angka];
    const hasil = tampung[idx] - decrement;
    tampung[idx] = hasil <= 0 ? 0 : hasil;
    this.setState({
      angka: tampung,
    });
  }

  plus(idx, increment) {
    // this.setState({
    //   angka: this.state.angka + increment,
    // });
    // const hasil = this.state.angka + this.props.increment;
    // this.setState({ angka: hasil >= 20 ? 20 : hasil });

    const tampung = [...this.state.angka];
    const hasil = tampung[idx] + increment;
    tampung[idx] = hasil >= 20 ? 20 : hasil;
    this.setState({
      angka: tampung,
    });
  }

  addCard() {
    const tampung = [...this.state.angka];
    tampung.push(0);
    this.setState({
      angka: tampung,
    });
  }

  deleteCard(idx) {
    const hapus = [...this.state.angka];
    hapus.splice(idx, 1);
    this.setState({
      angka: hapus,
    });
  }

  render() {
    return (
      // <div>
      //   <Row className="vh-50">
      //     <Col>
      //       <LatihanCard number={this.state.angka} />
      //       <Col>
      //         <BtnPlus plus={this.plus} increment={this.props.increment} />
      //         <BtnMin minus={this.minus} decrement={this.props.decrement} />
      //       </Col>
      //     </Col>
      //   </Row>
      // </div>
      <>
        <Button
          className="d-flex justify-content-center align-items-center"
          onClick={this.addCard}
        >
          Tambah Card
        </Button>
        {this.state.angka.map((item, idx) => {
          return (
            <Row className="d-flex justify-content-center align-items-center">
              <Col sm="2">
                <Row>
                  <Col sm="12">
                    {/* state diturunkan ke childnya menggunakan props */}
                    <LatihanCard
                      number={item}
                      deleteCard={this.deleteCard}
                      idx={idx}
                    />
                  </Col>
                  <Col
                    sm="12"
                    className="d-flex justify-content-center align-items-center py-3"
                  >
                    {/* parsing data didalam child berisikan 1 props yang memiliki beberapa attribute */}
                    <BtnPlus
                      plus={this.plus}
                      status={item >= 20 ? true : false}
                      increment={this.props.increment}
                      idx={idx}
                    />
                    <BtnMin
                      minus={this.minus}
                      status={item <= 0 ? true : false}
                      decrement={this.props.decrement}
                      idx={idx}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          );
        })}
      </>
    );
  }
}
