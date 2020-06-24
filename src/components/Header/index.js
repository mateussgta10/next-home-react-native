import React from 'react';
import { Wrapper, Container, ImageProfile, NomeUser,NomeUserText} from './styles';
import { MaterialIcons } from '@expo/vector-icons';

import { useNavigation} from '@react-navigation/native'



import profile from '../../assets/profile.jpg'
export default function Header() {

  const navigation = useNavigation();

  return (
    <Wrapper>
      <Container onPress={() => navigation.navigate('Profile')}>
        <ImageProfile source={profile}  resizeMode="cover"/>
        <NomeUser>
          <NomeUserText>
          MATEUS SANTANA
          </NomeUserText>
        </NomeUser>
        <MaterialIcons name="keyboard-arrow-right" size={30} color="#000" />
      </Container>
    </Wrapper>
    )
}

