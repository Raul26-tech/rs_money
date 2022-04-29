import { Conatiner, Content } from "./styles";
import Modal from "react-modal";
import logoImg from "../../assets/logoImg.png";
import { useState } from "react";

export function Header() {
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
      <Conatiner>
        <Content>
          <img src={logoImg} alt="rs money" />
          <button type="button" onClick={handleOpenNewTransactionModal}>
            Nova transação
          </button>

          <Modal
            isOpen={isNewTransactionModalOpen}
            onRequestClose={handleCloseNewTransactionModal}
          >
            <h2>Cadastrar transação</h2>
          </Modal>
        </Content>
      </Conatiner>
    </>
  );
}
