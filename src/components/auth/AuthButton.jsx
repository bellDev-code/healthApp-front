import React from 'react';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  background-color: ${colors.blue};
  padding: 13px 10px;
  border-radius: 3px;
  width: 100%;
  opacity: ${props => (props.disabled ? '0.5' : '1')};
`;

const ButtonText = styled.Text`
  color: ${colors.blue};
  font-weight: ${fontWeight.middle};
  margin-top: 20px;
`;

export default function AuthButton({disabled, onPress, text}) {
  return (
    <Button disabled={disabled} onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
}
