import { Conatiner, Content } from "./styles";
import logoImg from "../../assets/logoImg.png";

export function Header() {
  return (
    <>
      <Conatiner>
        <Content>
          <img src={logoImg} alt="rs money" />
          <button type="button">Nova transação</button>
        </Content>
      </Conatiner>
    </>
  );
}
