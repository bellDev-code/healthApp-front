import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
`;

export default function CalendarLayout({children}) {
  return <Container>{children}</Container>;
}
