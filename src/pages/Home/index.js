import React from 'react';
import { Wrapper, Container,IconBell, HeaderTop,NameNext,Help,HelpText } from './styles';
import { Feather } from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import BoxMenu from '../../components/BoxMenu';
import Footer from '../../components/Footer';

import logo from '../../assets/next.png'
export default function Home() {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <Container>
        <HeaderTop>
          <IconBell onPress={() => navigation.navigate('Notifications')}>
            <Feather name="bell" size={24} color="black" />
          </IconBell>
          <NameNext source={logo} resizeMode="contain"></NameNext>
          <Help>
            <HelpText>AJUDA</HelpText>
          </Help>
        </HeaderTop>

        <Header/>
        <Balance/>
        <BoxMenu/>
        <Footer/>

      </Container>
    </Wrapper>
    )
}

