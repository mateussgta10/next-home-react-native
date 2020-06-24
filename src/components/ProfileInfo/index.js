import React from 'react';
import { Wrapper,
  Profile,
  Container,
  ImageProfile,
  NomeUser,
  NomeUserText,
  ViewInfo,
  BankInfo,
  BankText,
  BankTitle,
  Line

} from './styles';
import { Feather } from '@expo/vector-icons';


import profile from '../../assets/profile.jpg'
export default function Header() {

  return (
    <Wrapper>
      <Container>

      <Profile>
        <ImageProfile source={profile}  resizeMode="cover"/>
        <NomeUser>
          <NomeUserText>
          MATEUS SANTANA
          </NomeUserText>
        </NomeUser>
        <Feather name="camera" size={25} color="#01FF5F" />
      </Profile>

      <ViewInfo>
        <BankInfo>
          <BankText>Banco</BankText>
          <BankTitle>Next - 475</BankTitle>
        </BankInfo>
        <Line></Line>

        <BankInfo>
          <BankText>Agência</BankText>
          <BankTitle>0000</BankTitle>
        </BankInfo>
        <Line></Line>

        <BankInfo>
          <BankText>Conta-corrente</BankText>
          <BankTitle>00000-0</BankTitle>
        </BankInfo>
        <Line></Line>

        <BankInfo>
          <BankText>CPF</BankText>
          <BankTitle>000.000.000-00</BankTitle>
        </BankInfo>
      </ViewInfo>

    </Container>
  </Wrapper>
)
}

