import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: black;
`;

export default function CreateAccount() {
  return (
    <Container>
      <Text>CreateAccount</Text>
    </Container>
  );
}
