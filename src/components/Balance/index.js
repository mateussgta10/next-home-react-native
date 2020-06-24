import React,{useState} from 'react';
import { Wrapper, Container, Balance, BalanceCash,BalanceText,IconEye} from './styles';
import { Feather } from '@expo/vector-icons';


export default function Header() {

  const [visibily, setVisibily] = useState(true);

  function handleToggleVisibility() {
    setVisibily((prevState) => !prevState);
  }
  return (
    <Wrapper>
      <Container>
        <Balance>
          <BalanceText>Saldo conta-corrente</BalanceText>
          <BalanceCash>R$ {visibily ? '0,00' : '.....'}</BalanceCash>
        </Balance>
        <IconEye onPress={handleToggleVisibility}>
          <Feather  name={visibily ? 'eye' : 'eye-off' } size={23} color="#000" />
        </IconEye>
      </Container>
    </Wrapper>
    )
}

