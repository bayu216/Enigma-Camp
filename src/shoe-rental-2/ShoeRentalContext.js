// import { Component, createContext } from 'react';
// import Transaction from './Transaction';

// const ShoeContext = createContext();
// const { Provider, Consumer: ShoeConsumer } = ShoeContext;

// class ShoeProvider extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       page: 'form',
//       rentedShoe: [],
//       transaction: new Transaction(),
//     };
//   }

//   saveShoe = (shoe) => {
//     if (shoe.returnedAt === '') {
//       this.setState({
//         rentedShoe: [...this.state.rentedShoe, shoe],
//         page: 'list',
//       });
//     } else {
//       const newShoesList = [...this.state.rentedShoe];
//       const idx = newShoesList.findIndex((item) => item.id === shoe.id);
//       newShoesList.splice(idx, 1, shoe);
//       this.setState({
//         rentedShoe: newShoesList,
//         page: 'list',
//         transaction: new Transaction(),
//       });
//     }
//   };

//   setPage = (page) => {
//     this.setState({ page: page, transaction: new Transaction() });
//   };

//   returnShoe = (selectedShoe) => {
//     this.setState({
//       transaction: selectedShoe,
//       page: 'form',
//     });
//   };

//   render() {
//     const { children } = this.props;

//     const value = {
//       ...this.state,
//       saveShoe: this.saveShoe.bind(this),
//       setPage: this.setPage.bind(this),
//       returnShoe: this.returnShoe.bind(this),
//     };

//     return <Provider value={value}>{children}</Provider>;
//   }
// }

// export { ShoeProvider, ShoeConsumer };

import { nanoid } from "@reduxjs/toolkit";
import { Component, createContext, useState } from "react";
import { Transaction } from "./ShoeRentalFormFn";

const ShoeRentalContext = createContext();
const { Provider, Consumer: ShoeRentalConsumer } = ShoeRentalContext;

class NotShoeRentalProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: undefined,
      transactions: [
        new Transaction("Nike 1", "John", 1, 1),
        new Transaction("Nike 2", "Jane", 2, 1),
        new Transaction("Nike 3", "Moon", 3, 1),
      ],
      transactionId: undefined,
    };

    this.saveTransaction = this.saveTransaction.bind(this);
    this.selectTransactionId = this.selectTransactionId.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.getTransaction = this.getTransaction.bind(this);
  }

  saveTransaction(transaction) {
    const { transactionId, transactions } = this.state;
    if (transactionId) {
      this.setState({
        transactionId: undefined,
        transactions: transactions.map((trx) => {
          if (trx.id === transactionId) {
            trx = { ...transaction };
          }

          return trx;
        }),
      });
    } else {
      this.setState({ transactions: [...transactions, transaction] });
    }
  }

  selectTransactionId(transactionId) {
    this.setState({ transactionId });
  }

  setFilter({ target: { value: filter } }) {
    this.setState({ filter });
  }

  getTransaction(transactionId) {
    const { transactions } = this.state;

    if (transactionId) {
      return transactions.find((trx) => trx.id === transactionId);
    }
  }

  render() {
    const { children } = this.props;
    const value = {
      transactions: this.state.transactions,
      transactionId: this.state.transactionId,
      filter: this.state.filter,
      saveTransaction: this.saveTransaction,
      selectTransaction: this.selectTransactionId,
      setFilter: this.setFilter,
      getTransaction: this.getTransaction,
    };

    return <Provider value={value}>{children}</Provider>;
  }
}

function ShoeRentalProvider(props) {
  const [status, setStatus] = useState("");
  const [condition, setCondition] = useState("");
  const [transactionId, setTransactionId] = useState(null);
  const [transactions, setTransactions] = useState([]);

  const setFilter = ({ target: { name, value } }) => {
    switch (name) {
      case "status":
        setStatus(value);
        break;
      case "condition":
        setCondition(value);
        break;
      default:
        break;
    }
  };

  const getTransaction = (transactionId) => {
    if (transactionId) {
      return transactions.find((trx) => trx.id === transactionId);
    }
  };

  const saveTransaction = (transaction) => {
    if (transaction.id) {
      setTransactions(
        transactions.map((trx) => {
          if (trx.id === transaction.id) {
            trx = { ...transaction };
          }

          return trx;
        })
      );
    } else {
      transaction.id = nanoid();
      setTransactions([...transactions, transaction]);
    }
  };

  const value = {
    filter: { status, condition },
    transactionId,
    transactions,
    getTransaction,
    setFilter,
    setTransaction: setTransactionId,
    saveTransaction,
  };

  return <Provider value={value}>{props.children}</Provider>;
}

export { ShoeRentalProvider, ShoeRentalConsumer };
export default ShoeRentalContext;
