import React from 'react';
import { Wrapper, Container,TextBox} from './styles';


export default function Header() {
  return (
    <Wrapper>

      <Container>
        <TextBox>REorganizar menu</TextBox>
      </Container>

      <Container>
        <TextBox>Configurações do app</TextBox>
      </Container>

      <Container>
        <TextBox>Termos e condições</TextBox>
      </Container>

      <Container>
        <TextBox>Sair</TextBox>
      </Container>

    </Wrapper>
    )
}

