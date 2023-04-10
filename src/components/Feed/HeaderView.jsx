import React from 'react';
import styled from 'styled-components/native';
import FeedButton from './FeedButton';
import RegisterModal from '../modal/RegisterModal';

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
`;

export default function HeaderView() {
  return (
    <Container>
      <RegisterModal />
    </Container>
  );
}
