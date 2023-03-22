import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {colors, fontWeight} from '../Theme';

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
  justify-content: center;
  padding: 0px 40px;
`;

// 임시 Text 처리 추후 logo image 적용 예정
const Logo = styled.Text`
  color: ${colors.white};
  font-size: 30px;
  font-weight: ${fontWeight.middle};
  height: 10%;
  margin-bottom: 50px;
  /* max-width: 50%;
  height: 100px; */
`;

const CreateAccount = styled.TouchableOpacity`
  background-color: ${colors.blue};
  padding: 10px 10px;
  margin-top: 20px;
  border-radius: 3px;
  width: 100%;
  opacity: ${props => (props.disabled ? '0.5' : '1')};
`;

const CreateAccountText = styled.Text`
  color: ${colors.white};
  font-weight: ${fontWeight.middle};
  text-align: center;
`;

const LoginLink = styled.Text`
  color: ${colors.blue};
  font-weight: ${fontWeight.middle};
  margin-top: 20px;
`;

export default function Home({navigation}) {
  const goToAccount = () => navigation.navigate('CreateAccount');
  const goToLogin = () => navigation.navigate('Login');
  return (
    <Container>
      <Logo>Go to the fuxxing Gym</Logo>
      <CreateAccount disabled={false} onPress={goToAccount}>
        <CreateAccountText>Create New Account</CreateAccountText>
      </CreateAccount>
      <TouchableOpacity onPress={goToLogin}>
        <LoginLink>Login</LoginLink>
      </TouchableOpacity>
    </Container>
  );
}
