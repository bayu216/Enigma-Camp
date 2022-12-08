import { Button, Table, Badge, Form } from "react-bootstrap";

const ShowBagdes = () => {
  return <Badge bg="danger">Belum Kembali</Badge>;
};

const ShowCondition = (props) => {
  return (
    <Badge bg={props.condition === "Rusak" ? "danger" : "primary"}>
      {props.condition}
    </Badge>
  );
};

const ShowStatus = (props) => {
  return (
    <Badge
      bg={
        props.status === "Dipinjam"
          ? "primary"
          : props.status === "Kembali"
          ? "success"
          : "danger"
      }
    >
      {props.status}
    </Badge>
  );
};

function ShowRentalList(props) {
  const { filter, setFilter } = props;
  let { transactions } = props;

  if (filter) {
    transactions = transactions.filter((trx) => trx.status === filter);
  }

  return (
    <>
      <h5>Rental Sepatu World Cup Jaya</h5>
      <Table variant="warning" striped bordered hover>
        <thead>
          <tr>
            <th colspan="10">
              <div className="d-flex">
                <Form.Select
                  style={{ width: "150pt" }}
                  size="sm"
                  placeholder="Filter"
                  onChange={setFilter}
                >
                  <option selected>Filter by Status</option>
                  <option value={"Dipinjam"}>Dipinjam</option>
                  <option value={"Kembali"}>Kembali</option>
                  <option value={"Telat"}>Telat</option>
                </Form.Select>
                <p style={{ margin: "10pt" }}></p>
                <Form.Select
                  style={{ width: "150pt" }}
                  size="sm"
                  placeholder="Filter"
                >
                  <option selected>Filer by Shoe Condition</option>
                  <option>Baik</option>
                  <option>Rusak</option>
                </Form.Select>
              </div>
            </th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>No.</th>
            <th>Nama Sepatu</th>
            <th>Nama Peminjam</th>
            <th>Tgl. Pinjam</th>
            <th>Tgl. Kembali</th>
            <th>Total Bayar</th>
            <th>Total Denda</th>
            <th>Kondisi</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.dataPeminjam.map((item, idx) => {
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{item.shoe}</td>
                <td>{item.wearer}</td>
                <td>{item.borrowedAt}</td>
                <td>{item.returnedAt ? item.returnedAt : <ShowBagdes />}</td>
                <td>
                  {item.returnedAt ? `Rp. ${item.payment}` : <ShowBagdes />}
                </td>
                <td>{item.returnedAt ? `Rp. ${item.fine}` : <ShowBagdes />}</td>
                <td>
                  {item.returnedAt ? (
                    <ShowCondition condition={item.condition} />
                  ) : (
                    <ShowBagdes />
                  )}
                </td>
                <td>{<ShowStatus status={item.status} />}</td>
                <td>
                  <Button
                    variant="success"
                    onClick={() => props.onHandleEdit(item, idx)}
                    disabled={item.returnedAt}
                  >
                    {item.returnedAt ? "Sudah Kembali" : "Pengembalian"}
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

export { ShowBagdes, ShowCondition, ShowStatus };
export default ShowRentalList;
