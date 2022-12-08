import { Table, Button } from "react-bootstrap";

// export default class GuestBookList extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <>
//         {this.props.data.map((item) => {
//           return <>{item.firstName}</>;
//         })}
//       </>
//     );
//   }
// }

export default function GuestBookList(props) {
  const { guests } = props;

  return (
    <Table striped bordered hover>
      <thead className="table-dark">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {guests.map((person, idx) => {
          return (
            <tr key={idx}>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.phone}</td>
              <td>{person.address}</td>
              <td>
                <Button
                  variant="primary"
                  className="px-2 py-1"
                  onClick={() => props.edit(person, idx)}
                >
                  Edit
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
