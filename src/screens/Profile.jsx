import React from 'react';
import FeedLayout from '../components/Feed/FeedLayout';
import {Text, TouchableOpacity, View} from 'react-native';
import {logUserOut} from '../../apollo';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function Profile() {
  return (
    <FeedLayout>
      <Container>
        <TouchableOpacity onPress={logUserOut}>
          <Text>로그아웃</Text>
        </TouchableOpacity>
      </Container>
    </FeedLayout>
  );
}
