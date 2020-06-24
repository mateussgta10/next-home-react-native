import React from 'react';
import { Wrapper,Container,Title} from './styles';
import { EvilIcons } from '@expo/vector-icons';

export default function Header() {

  return (
    <Wrapper>
      <Container>
        <Title>Compartilhar conta</Title>
        <EvilIcons name="share-apple" size={30} color="#000" />
      </Container>
    </Wrapper>
)
}

