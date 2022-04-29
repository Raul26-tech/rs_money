import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import {NewTransactionModal} from './components/NewTransactionModal'
import { Header } from "./components/Header";
import { TransactionTable } from "./components/TransactionTable";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal
       isOpen={isNewTransactionModalOpen}
       onRequestClose={handleCloseNewTransactionModal}
       />
      <GlobalStyle />
      <TransactionTable />
    </>
  );
}

export default App;
