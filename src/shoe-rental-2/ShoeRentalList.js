// import { Button, Table } from 'react-bootstrap';
// import { ShoeConsumer, ShoeProvider } from './ShoeContext';

// export default function ShoeRentalList(props) {
//   return (
//     <>
//       <ShoeProvider>
//         <Table Table className='mx-1 my-5' striped bordered>
//           <thead>
//             <tr>
//               <th>No.</th>
//               <th>Nama Sepatu</th>
//               <th>Nama Peminjam</th>
//               <th>Tgl. Pinjam</th>
//               <th>Tgl. Kembali</th>
//               <th>Total Bayar</th>
//               <th>Total Denda</th>
//               <th>Kondisi Sepatu</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             <ShoeConsumer>
//               {({ rentedShoe }) => {
//                 rentedShoe.map((item, idx) => {
//                   return (
//                     <tr key={idx}>
//                       <td>{idx + 1}</td>
//                       <td>{item.shoe}</td>
//                       <td>{item.wearer}</td>
//                       <td>{item.borrowedAt}</td>
//                       <td>{item.returnedAt ? item.returnedAt : '-'}</td>
//                       <td>{item.returnedAt ? item.payment : '-'}</td>
//                       <td>{item.returnedAt ? item.payment : '-'}</td>
//                       <td>{item.returnedAt ? item.fine : '-'}</td>
//                       <td>{item.status}</td>
//                       <td>
//                         <Button
//                           variant='success'
//                           onClick={() => props.returnShoe(item, idx)}
//                         >
//                           return
//                         </Button>
//                       </td>
//                     </tr>
//                   );
//                 });
//               }}
//             </ShoeConsumer>
//           </tbody>
//         </Table>
//       </ShoeProvider>
//     </>
//   );
// }

import { useContext } from "react";
import { Button, Card, Col, Form, Row, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ShoeRentalContext from "./ShoeRentalContext";
import { TransactionStatus } from "./ShoeRentalFormFn";

export default function ShoeRentalList(props) {
  const rentalContextValue = useContext(ShoeRentalContext);
  const {
    filter,
    setFilter,
    setTransaction: selectTransaction,
  } = rentalContextValue;
  let { transactions } = rentalContextValue;

  if (filter.status) {
    transactions = transactions.filter((trx) => trx.status === filter.status);
  }

  return (
    <Card>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <Card.Title as="h2" className="fs-5">
          Shoe Rental Transactions
        </Card.Title>
        <Button as={Link} size="sm" to="form">
          Rent Shoes
        </Button>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <Form.Select name="status" value={filter} onChange={setFilter}>
              <option value="">Filter by status</option>
              <option value={TransactionStatus.BORROWED}>Borrowed</option>
              <option value={TransactionStatus.RETURNED}>Returned</option>
              <option value={TransactionStatus.LATE}>Late</option>
            </Form.Select>
          </Col>
        </Row>
      </Card.Body>
      <Card.Body className="p-0">
        <Table hover striped bordered responsive className="m-0">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Shoe</th>
              <th>Wearer</th>
              <th>Duration</th>
              <th>Borrowing Day</th>
              <th>Returning Day</th>
              <th>Payment</th>
              <th>Fine</th>
              <th>Shoe Condition</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(transactions) && transactions.length === 0 ? (
              <tr>
                <td colSpan={11} className="text-center fw-bold">
                  No Transaction
                </td>
              </tr>
            ) : (
              transactions.map((trx, index) => (
                <tr key={trx.id}>
                  <td>{index + 1}</td>
                  <td>{trx.shoe}</td>
                  <td>{trx.wearer}</td>
                  <td>{trx.duration} day(s)</td>
                  <td>{trx.borrowedAt}</td>
                  <td>{trx.returnedAt || "-"}</td>
                  <td>{trx.payment || "-"}</td>
                  <td>{trx.fine || "-"}</td>
                  <td>{trx.condition || "-"}</td>
                  <td>{trx.status}</td>
                  <td>
                    {trx.status === TransactionStatus.BORROWED ? (
                      <Button
                        as={Link}
                        variant="warning"
                        size="sm"
                        to={`form/${trx.id}`}
                      >
                        Return Shoes
                      </Button>
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
