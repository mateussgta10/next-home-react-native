import React from 'react';
import { Wrapper, Container,TextBox,Line} from './styles';
import { MaterialIcons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';


export default function Header() {
  return (
    <Wrapper>

      <Container>
        <MaterialIcons name="attach-money" size={45} color="#000" />
        <TextBox>SALDO E EXTRATO</TextBox>
        <Line/>
      </Container>


      <Container>
        <MaterialCommunityIcons name="bank-transfer" size={45} color="#000" />
        <TextBox>SALDO E EXTRATO</TextBox>
        <Line/>
      </Container>


      <Container>
        <MaterialIcons name="payment" size={45} color="#000" />
        <TextBox>Pagar conta</TextBox>
        <Line/>
      </Container>


      <Container>
        <MaterialCommunityIcons name="cellphone" size={45} color="#000" />
        <TextBox>Recarga celular</TextBox>
        <Line/>
      </Container>


      <Container>
        <AntDesign name="creditcard" size={45} color="#000" />
        <TextBox>CARTÃO</TextBox>
        <Line/>
      </Container>


      <Container>
        <MaterialCommunityIcons name="crown" size={45} color="#000" />
        <TextBox>MIMOS</TextBox>
        <Line/>
      </Container>


      <Container>
        <MaterialCommunityIcons name="cow" size={45} color="#000" />
        <TextBox>VAQUINHA</TextBox>
        <Line/>
      </Container>

      <Container>
        <AntDesign name="wallet" size={45} color="#000" />
        <TextBox> Trazer Salário</TextBox>
        <Line/>
      </Container>


      <Container>
        <MaterialCommunityIcons name="cash-usd" size={45} color="#000" />
        <TextBox>Depósitos e saques</TextBox>
        <Line/>
      </Container>

    </Wrapper>
    )
}

