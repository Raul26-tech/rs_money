import Modal from 'react-modal'


interface NewTransactionModalPros {
    isOpen:boolean;
    onRequestClose: () => void


}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalPros ) {

    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
    )
}