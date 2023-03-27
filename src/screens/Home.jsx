import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import AuthButton from '../components/auth/AuthButton';
import AuthLayOut from '../components/auth/AuthLayOut';
import {colors, fontWeight} from '../Theme';

const LoginLink = styled.Text`
  color: ${colors.blue};
  font-weight: ${fontWeight.middle};
  margin-top: 20px;
  text-align: center;
`;

export default function Home({navigation}) {
  const goToAccount = () => navigation.navigate('CreateAccount');
  const goToLogin = () => navigation.navigate('Login');
  return (
    <AuthLayOut>
      <AuthButton
        text="Crate New Account"
        disabled={false}
        onPress={goToAccount}
      />
      <TouchableOpacity onPress={goToLogin}>
        <LoginLink>Log In</LoginLink>
      </TouchableOpacity>
    </AuthLayOut>
  );
}
