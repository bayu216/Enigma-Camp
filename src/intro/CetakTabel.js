import { Row, Col, Image } from "react-bootstrap";
import Table from "react-bootstrap/Table";

export default function CetakTabel(props) {
  const data = ["Ayam", "Gajah", "Jerapah", "Macan"];
  const { people } = props;
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
    </>
  );
}
