import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding: 0 20px;
`;

export default function FeedLayout({children}) {
  return <Container>{children}</Container>;
}
