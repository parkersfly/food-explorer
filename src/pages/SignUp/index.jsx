import { Container } from "./styles";
import { Logo } from "../../Components/User/Logo";
import { Input } from "../../Components/Input";
import { Button } from '../../Components/Button'

export function SignUp() {
  return (
    <Container>
      <div className="content">
        <Logo />
        <form>
          <Input 
          fieldName="Seu nome"
          htmlFor="name"
          id="name"
          type="text"
          placeholder="Exemplo: Maria da Silva"
          />
          <Input 
          fieldName="Email"
          htmlFor="email"
          id="email"
          type="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          />
          <Input 
          fieldName="Senha"
          htmlFor="password"
          id="password"
          type="password"
          placeholder="No mínimo 6 caracteres"
          />
          <Button title="Criar conta"/>
          <a href="#">Já tenho uma conta</a>
        </form>
      </div>
    </Container>
  );
}
