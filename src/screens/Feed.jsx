import React, {useState} from 'react';
import FeedLayout from '../components/feed/FeedLayout';
import HeaderView from '../components/feed/HeaderView';
import styled from 'styled-components/native';

const ContentsView = styled.View`
  flex: 1
  background-color: red;
`;

const ContentsView2 = styled.View`
  flex: 1
  background-color: blue;
`;

export default function Feed() {
  return (
    <FeedLayout>
      <HeaderView />
      <ContentsView />
      <ContentsView2 />
    </FeedLayout>
  );
}
