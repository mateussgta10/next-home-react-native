import React from 'react';
import { Wrapper, Container,HeaderTop, IconBar,ViewProfile,TitleProfile } from './styles';
import { FontAwesome } from '@expo/vector-icons';

import { useNavigation} from '@react-navigation/native';
import {StatusBar} from 'react-native'

import BellNotifications from '../../components/BellNotifications';


export default function Home() {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
      <Container>

        <HeaderTop>
          <IconBar onPress={() => navigation.goBack()}>
            <FontAwesome name="bars" size={24} color="#000" />
          </IconBar>

          <ViewProfile>
            <TitleProfile>Notificações</TitleProfile>
          </ViewProfile>
        </HeaderTop>

        <BellNotifications/>
      </Container>
    </Wrapper>
    )
}

