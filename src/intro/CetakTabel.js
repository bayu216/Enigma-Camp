import people from "../intro/people.js";
import { Row, Col, Image } from "react-bootstrap";
import Table from "react-bootstrap/Table";

export default function CetakTabel() {
  const data = ["Ayam", "Gajah", "Jerapah", "Macan"];
  const mobil2an = [
    {
      brand: "Toyota",
      name: "Rush",
    },
    {
      brand: "Honda",
      name: "Accord",
    },
    {
      brand: "Daihatsu",
      name: "Sigra",
    },
  ];

  // cetak list didalam jsx
  return (
    <>
      <ul>
        {data.map((binatang) => {
          return <li>{binatang} </li>;
        })}
      </ul>
      <ol>
        {mobil2an.map((mobil) => {
          return (
            <li>
              {mobil.brand} {mobil.name}
            </li>
          );
        })}
      </ol>

      {/* <ol>
        <Row>
          {people.map((ppl) => {
            return (
              <>
                <Col>
                  <li>
                    {`${ppl.firstName} ${ppl.lastName}`}
                    <ul style={{ display: "inline-block" }}>
                      <li>{ppl.gender}</li>
                      <li>{ppl.job}</li>
                      <img width="100" src={ppl.photo} />
                    </ul>
                  </li>
                </Col>
              </>
            );
          })}
        </Row>
      </ol> */}
      <div>
        <h1 style={{ textAlign: "center" }}>List People</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Photo</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody>
            {people.map((ppl) => {
              return (
                <tr>
                  <td>{ppl.firstName}</td>
                  <td>{ppl.lastName}</td>
                  <td>{ppl.gender}</td>
                  <td style={{ textAlign: "center" }}>
                    {/* <img
                      style={{
                        width: "75px",
                        borderRadius: "100px",
                      }}
                      src={ppl.photo}
                    /> */}
                    <Image width="75" src={ppl.photo} roundedCircle />
                  </td>
                  <td>{ppl.job}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
