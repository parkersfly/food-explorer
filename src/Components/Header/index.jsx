import { Container } from "./styles";
import { List, Receipt } from "@phosphor-icons/react";
import { Logo } from "../../Components/Logo";

export function Header({ isAdmin }) {
  return (
    <Container isAdmin={isAdmin}>
      <button>
        <List size={32} />
      </button>
      <div className="logo">
      <Logo />
        {isAdmin && <span>admin</span>}
      </div>
      {!isAdmin && (
        <button className="receipt">
          <Receipt size={32} />
          <div className="requests">0</div>
        </button>
      )}
    </Container>
  );
}
