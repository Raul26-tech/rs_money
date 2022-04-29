import React from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionTable } from "./components/TransactionTable";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
      <TransactionTable/>
    </>
  );
}

export default App;
