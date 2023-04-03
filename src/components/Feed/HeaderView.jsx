import React from 'react';
import styled from 'styled-components/native';
import FeedButton from './FeedButton';

const Container = styled.View`
  padding: 10px 0;
  flex-direction: column;
  align-items: flex-end;
`;

export default function HeaderView() {
  return (
    <Container>
      <FeedButton text="헬스장 등록하기" />
    </Container>
  );
}
