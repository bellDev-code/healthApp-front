import React from 'react';
import styled from 'styled-components/native';
import {colors, fontWeight} from '../../Theme';

const Button = styled.TouchableOpacity`
  background-color: ${colors.blue};
  padding: 10px 10px;
  border-radius: 3px;
  width: 20%;
`;

const ButtonText = styled.Text`
  color: ${colors.white};
  font-weight: ${fontWeight.middle};
  text-align: center;
`;

export default function FeedButton({onPress, text}) {
  return (
    <Button onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
}
