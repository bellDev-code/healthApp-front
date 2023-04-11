import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import styled from 'styled-components/native';
import Maps from '../maps/Maps';

const CenterView = styled.View`
  flex: 1;
  margin-top: 22px;
`;

export default function RegisterModal() {
  const [modalVisible, setModalVisible] = useState(false);
  console.log(modalVisible);

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
          <Maps />
          <Pressable
            style={[styles.button, styles.modalClose]}
            onPress={() => setModalVisible(false)}>
            <Text style={styles.textStyle}>취소하기</Text>
          </Pressable>
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
    marginTop: 3,
    padding: 5,
    elevation: 2,
    backgroundColor: '37CAEC',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
