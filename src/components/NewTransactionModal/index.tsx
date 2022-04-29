import { useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.png";
import incomeImg from "../../assets/iconArrow.png";
import outcomeImg from "../../assets/iconArrowDown.png";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";

interface NewTransactionModalPros {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen,onRequestClose}: NewTransactionModalPros) {

  const [type, setType] = useState('deposit')

 
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>
          <input placeholder="Título" />

          <input placeholder="Valor" type="number" />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {setType('deposit')}}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entradas" />
            <span>Entrada</span>

          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {setType('withdraw')}}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>

          </RadioBox>
        </TransactionTypeContainer>

        <input 
          placeholder="Categoria" 
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
