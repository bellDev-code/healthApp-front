import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import styled from 'styled-components/native';
import {colors, fontWeight} from '../../Theme';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  background-color: black;
`;

const Logo = styled.Text`
  color: ${colors.white};
  font-size: 30px;
  font-weight: ${fontWeight.middle};
  height: 50px;
  text-align: center;
  margin-bottom: 50px;
`;

// 임시 Text 처리 추후 logo image 적용 예정
// const Logo = styled.Image`
//   max-width: 50%;
//   width: 100%;
//   height: 100px;
//   margin-bottom: 20px;
// `;

export default function AuthLayOut({children}) {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback
      style={{flex: 1}}
      onPress={dismissKeyboard}
      disabled={Platform.OS === 'web'}>
      <Container>
        <KeyboardAvoidingView
          style={{
            width: '100%',
          }}
          behavior="position"
          keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0}>
          <Logo>Go to the fuxxing Gym</Logo>
          {children}
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  );
}
