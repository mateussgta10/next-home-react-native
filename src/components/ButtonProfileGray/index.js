import React from 'react';
import { Wrapper,Container,Title} from './styles';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

export default function Header() {

  return (
    <Wrapper>

      <Container>
        <Title>Meus Dados</Title>
        <AntDesign name="user" size={24} color="#01FF5F" />
      </Container>

      <Container>
        <Title>Meu plano</Title>
        <AntDesign name="creditcard" size={24} color="#01FF5F" />
      </Container>

      <Container>
        <Title>Trocar plano</Title>
        <FontAwesome name="exchange" size={24} color="#01FF5F" />
      </Container>
    </Wrapper>
)
}

