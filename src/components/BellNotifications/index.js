import React from 'react';
import { Wrapper, Container,TextBox} from './styles';
import { Feather } from '@expo/vector-icons';

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Feather name="bell" size={130} color="#000" />
        <TextBox>Você não possui notificações</TextBox>
      </Container>
    </Wrapper>
    )
}

