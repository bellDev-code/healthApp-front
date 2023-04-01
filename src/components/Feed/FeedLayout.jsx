import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  color: white;
`;

export default function FeedLayout({title}) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}
