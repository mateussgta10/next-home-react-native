import styled from 'styled-components/native';


export const Wrapper = styled.SafeAreaView`
  background: #01FF5F;
  flex: 1;
`;

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-color: #000000;
  border-bottom-width: 0.5px;
`;

export const ImageProfile = styled.Image`
  width:60px;
  height:60px;
  border-radius: 200px;
`;

export const NomeUser = styled.View`
  flex:1;
  padding: 0px 15px;
`;
export const NomeUserText = styled.Text`
  font-weight: bold;
  font-size:18px;
  text-transform: uppercase;
`;







