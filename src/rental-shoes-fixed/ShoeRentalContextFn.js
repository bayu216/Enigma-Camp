import { nanoid } from "nanoid";
import { Component, createContext, useState } from "react";
import { Transaction } from "./ShoeRentalFormFn";

const ShoeRentalContextFn = createContext();
const { Provider, Consumer: ShoeRentalConsumer } = ShoeRentalContextFn;

function ShoeRentalProvider(props) {
  const [filter, setFilter] = useState(undefined);
  const [transactionId, setTransactionId] = useState(null);
  const [transactions, setTransactions] = useState([]);

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

  const getTransaction = (transactionId) => {
    if (transactionId) {
      return transactions.find((trx) => trx.id === transactionId);
    }
  };

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const { children } = props;
  const value = {
    transactions: transactions,
    transactionId: transactionId,
    filter: filter,
    saveTransaction: saveTransaction,
    selectTransaction: setTransactionId,
    setFilter: changeFilter,
    getTransaction: getTransaction,
  };

  return <Provider value={value}>{children}</Provider>;
}

export { ShoeRentalProvider, ShoeRentalConsumer };
export default ShoeRentalContextFn;
