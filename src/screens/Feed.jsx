import React, {useState} from 'react';
import FeedLayout from '../components/feed/FeedLayout';
import styled from 'styled-components/native';
import FeedButton from '../components/feed/FeedButton';

const HeaderView = styled.View`
  flex: 1;
  margin-top: 10px;
  flex-direction: column;
  align-items: flex-end;
`;

export default function Feed() {
  return (
    <FeedLayout>
      <HeaderView>
        <FeedButton text="Register" />
      </HeaderView>
    </FeedLayout>
  );
}
