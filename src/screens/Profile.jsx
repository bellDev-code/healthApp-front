import React from 'react';
import FeedLayout from '../components/feed/FeedLayout';
import {Button, View} from 'react-native';
import {logUserOut} from '../../apollo';

export default function Profile() {
  return (
    <FeedLayout title="Profile">
      <View>
        <Button onPress={logUserOut}>로그아웃</Button>
      </View>
    </FeedLayout>
  );
}
