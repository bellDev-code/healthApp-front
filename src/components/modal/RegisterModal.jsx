import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import styled from 'styled-components/native';
import Maps from '../maps/Maps';
import {gql, useMutation, useReactiveVar} from '@apollo/client';
import {isLoggedInVar, tokenVar} from '../../../apollo';

const CREATE_POSITION_MUTATION = gql`
  mutation createPosition(
    $latitude: Decimal!
    $longitude: Decimal!
    $gymname: String
  ) {
    createPosition(
      latitude: $latitude
      longitude: $longitude
      gymname: $gymname
    ) {
      ok
      error
    }
  }
`;

const CenterView = styled.View`
  flex: 1;
  margin-top: 22px;
`;

const ButtonView = styled.View`
  flex: 1;
  flex-direction: row;
`;

export default function RegisterModal() {
  const [modalVisible, setModalVisible] = useState(false);
  const [position, setPosition] = useState(null);
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const token = useReactiveVar(tokenVar);
  console.log(token, 'useToken');

  const onPositionSelect = position => {
    setPosition(position);
  };

  const onCompleted = data => {
    const {
      createPosition: {latitude, longitude},
    } = data;

    console.log(data);
  };

  const [createPosition, {loading}] = useMutation(CREATE_POSITION_MUTATION, {
    onCompleted,
  });

  const onValid = async () => {
    if (!isLoggedIn) {
      // 로그인되어 있지 않은 경우 처리
      throw new Error('로그인이 필요필요');
      return;
    }

    if (!loading && position) {
      try {
        await createPosition({
          variables: {
            latitude: position.latitude,
            longitude: position.longitude,
            gymname: position.gymname,
          },
          context: {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <CenterView>
      <Pressable
        style={[styles.button, styles.modalOpen]}
        onPress={() => setModalVisible(true)}>
        {<Text style={styles.textStyle}>헬스장 등록하기</Text>}
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(false);
        }}>
        <View style={styles.modalView}>
          <Maps onPositionSelect={onPositionSelect} />
          <ButtonView>
            <Pressable
              style={[styles.button, styles.modalClose]}
              onPress={onValid}>
              <Text style={styles.textStyle}>등록하기</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.modalClose]}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.textStyle}>취소하기</Text>
            </Pressable>
          </ButtonView>
        </View>
      </Modal>
    </CenterView>
  );
}

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    height: '80%',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modalOpen: {
    backgroundColor: '#37CAEC',
  },
  modalClose: {
    borderRadius: 10,
    marginTop: 5,
    padding: 5,
    height: 30,
    margin: 5,
    elevation: 2,
    backgroundColor: '37CAEC',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
