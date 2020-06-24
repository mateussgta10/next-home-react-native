import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #01FF5F;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  /* margin-top:15px; */
`;

export const Container = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 32px 15px;
  /* margin: 15px 0 30px 0; */
  /* margin-bottom: 50px; */
  /* border-color: #000000; */
  /* border-bottom-width: 0.5px; */
  width: 200px;
`;

export const TextBox = styled.Text`
  margin-top: 15px;
  text-transform: uppercase;
  color:#555;
`;

export const Line = styled.View`
  margin-top: 25px;
  width: 180px;
  height: 0.5px;
  background:#777;
`;









