import { Button, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import guestBookSlice from "./guest-book-slice";

export default function GuestBookListSlice(props) {
  const state = useSelector((store) => store[guestBookSlice.name]);
  return (
    <>
      <Table variant="dark" striped bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Alamat</th>
            <th className="d-flex justify-content-center align-items-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {state.guests.map((item, idx) => {
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td className="d-flex justify-content-center align-items-center">
                  <Button
                    variant="primary"
                    onClick={() => props.onHandleEdit(item, idx)}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
