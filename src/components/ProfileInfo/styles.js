import styled from 'styled-components/native';


export const Wrapper = styled.SafeAreaView`
  background: #000;
  flex: 1;
  padding: 8px;
`;


export const Container = styled.TouchableOpacity`
  /* flex-direction: row; */
  /* justify-content: space-between; */
  align-items: center;
  padding: 10px 15px;
  border-color: #555;
  /* border-bottom-width: 0.5px; */
  border-width: 0.5px;
  border-radius: 30px;
`;

export const Profile = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-color: #555;
  /* border-bottom-width: 0.5px; */
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
  color :#fff;
`;

export const ViewInfo = styled.View`
  /* border-color: #555; */
  /* border-bottom-width: 0.5px; */
  /* border-radius: 30px; */
  /* width: 100%; */
`;

export const BankInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;


export const BankText = styled.Text`
 color :#777;
 font-size: 17px;
`;


export const BankTitle = styled.Text`
 color :#fff;
 font-size: 17px;
`;

export const Line = styled.View`
  width: 350px;
  margin: 0 10px;
  background :#777;
  height: 0.5px;
`


