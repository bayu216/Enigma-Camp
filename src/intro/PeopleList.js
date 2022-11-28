import { Row, Col, Image } from "react-bootstrap";
import Table from "react-bootstrap/Table";

export default function PeopleList(props) {
  const { people, pickSomeone } = props;
  return (
    <div>
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

      <h1 style={{ textAlign: "center" }}>List People</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Photo</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          {people.map((ppl, idx) => {
            const fullName = `${ppl.firstName} ${ppl.lastName}`;
            return (
              <tr
                key={idx}
                onClick={() => pickSomeone(fullName, ppl.job, ppl.gender)}
              >
                <td>{idx + 1}</td>
                <td>{fullName}</td>
                <td>{ppl.gender === "M" ? "Male" : "Female"}</td>
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
  );
}
