import React from 'react';
import {Button, View} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: black;
  padding: 0 20px;
`;

export default function FeedLayout({children}) {
  return <Container>{children}</Container>;
}
