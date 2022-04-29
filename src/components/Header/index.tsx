import { Conatiner, Content } from "./styles";
import logoImg from "../../assets/logoImg.png";

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}


export function Header({onOpenNewTransactionModal}: HeaderProps) {
  return (
    <>
      <Conatiner>
        <Content>
          <img src={logoImg} alt="rs money" />
          <p>Rs Money</p>
          <button type="button" onClick={onOpenNewTransactionModal}>
            Nova transação
          </button>
        </Content>
      </Conatiner>
    </>
  );
}
