import { Container } from "./styles";
import { Logo } from "../../Components/User/Logo";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

export function SignIn() {
  return (
    <Container>
      <form>
        <Logo />
        <Input
          htmlFor="email"
          fieldName="Email"
          type="email"
          placeholder="Exemplo:exemplo@exemplo.com.br"
          id="email"
        />
        <Input
          htmlFor="password"
          fieldName="Senha"
          type="password"
          placeholder="No mínimo 6 caracteres"
          id="password"
        />
        <Button title="Entrar"/>

        <a href="#">Criar uma conta</a>
      </form>
    </Container>
  );
}
