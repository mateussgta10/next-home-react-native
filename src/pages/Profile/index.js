import React from 'react';
import { Wrapper, Container,HeaderTop, IconBar,ViewProfile,TitleProfile } from './styles';
import { FontAwesome } from '@expo/vector-icons';

import { useNavigation} from '@react-navigation/native';
import {StatusBar} from 'react-native'

import ProfileInfo from '../../components/ProfileInfo';
import ButtonProfile from '../../components/ButtonProfile';
import ButtonProfileGray from '../../components/ButtonProfileGray';

export default function Home() {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <StatusBar barStyle="light-content" backgroundColor="#000"/>
      <Container>

        <HeaderTop>
          <IconBar onPress={() => navigation.goBack()}>
            <FontAwesome name="bars" size={24} color="#01FF5F" />
          </IconBar>

          <ViewProfile>
            <TitleProfile>Perfil</TitleProfile>
          </ViewProfile>
        </HeaderTop>

        <ProfileInfo/>
        <ButtonProfile/>
        <ButtonProfileGray/>
      </Container>
    </Wrapper>
    )
}

