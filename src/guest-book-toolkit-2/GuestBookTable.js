import { useEffect, useRef, useState } from "react";
import { Alert, Button, Spinner, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GUEST_BOOK_PAGE } from "./guest-model";
import guestSlice, {
  deleteGuest,
  fetchGuests,
  selectGuest,
} from "./guest-slice";

export default function GuestBookTable(props) {
  const [refresh, setRefresh] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const { setPage } = props;
  const { guests } = useSelector((store) => store[guestSlice.name]);
  const dispatch = useDispatch();
  const loading = useRef(true);

  // fetch dipanggil akan mengembalikan promise
  // hook yang mewakili lifecycle react
  // lifecycle: componentDidMount, componentWillUnmount, componentDidUpdate
  useEffect(() => {
    if (loading.current) {
      dispatch(fetchGuests());

      loading.current = false;
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchGuests());
    setTimeout(() => {
      setIsShow(false);
    }, 2500);
  }, [refresh]);

  return (
    <>
      {isShow === true ? (
        <Alert variant="success" onClose={() => setIsShow(false)}>
          Item has been deleted
        </Alert>
      ) : (
        ""
      )}
      <Table striped hover responsive>
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading.current && (
            <tr>
              <td colSpan={6} className="text-center text-info fw-bold">
                <Spinner
                  animation="border"
                  variant="info"
                  size="sm"
                  as="span"
                  className="me-2"
                />
                Loading...
              </td>
            </tr>
          )}
          {!loading.current && Array.isArray(guests) && guests.length === 0 && (
            <tr>
              <td colSpan={6} className="fw-bold text-center text-warning">
                No Data
              </td>
            </tr>
          )}
          {!loading.current &&
            guests.length > 0 &&
            guests.map((guest, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{guest.firstName}</td>
                  <td>{guest.lastName}</td>
                  <td>{guest.phone}</td>
                  <td>{guest.address}</td>
                  <td>
                    <Button
                      variant="info"
                      size="sm"
                      onClick={() => {
                        dispatch(selectGuest(guest.id));
                        setPage(GUEST_BOOK_PAGE.FORM);
                      }}
                    >
                      Update
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      className="ms-3"
                      onClick={() => {
                        // let result = window.confirm("Want to delete?");
                        // if (result) {
                        //   dispatch(deleteGuest(guest.id));
                        //   setRefresh(refresh + 1);
                        // }
                        dispatch(deleteGuest(guest.id));
                        setRefresh(refresh + 1);
                        setIsShow(true);
                      }}
                    >
                      Delete
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
