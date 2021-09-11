import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AW from 'react-native-vector-icons/FontAwesome';

const ModalComponent = ({data, setModalVisible, modalVisible}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible();
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* <View style={styles.closeContainer}> */}
            <Pressable
              style={[styles.button, {alignSelf: 'flex-end'}]}
              onPress={() => setModalVisible()}>
              <Text style={[styles.textStyle, {textAlign: 'right'}]}>
                <AW name="close" size={10} />
              </Text>
            </Pressable>
            {/* </View> */}
            <View style={styles.main}>
              <Icon
                name="shield-checkmark"
                size={40}
                style={{margin: 0, padding: 0}}
                color={data.type === 'danger' ? '#FF0000' : '#00FF00'}
              />
              <Text style={styles.modalTextOne}>{data.attendee.name}</Text>
              <Text style={styles.modalText}>
                {data.attendee.ateendeeUniversty}
              </Text>
              <Text style={styles.modalTextMsg}>
                <Text
                  style={{
                    color: data.type === 'danger' ? '#FF0000' : '#00FF00',
                  }}>
                  {data.msg}
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  info: {
    // marginBottom: 13,
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
  },
  modalView: {
    borderRadius: 5,
    marginTop: 250,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 35,
    paddingRight: 30,
    paddingLeft: 60,
    fontSize: 26,
    alignItems: 'center',
    elevation: 5,
  },
  main: {
    paddingTop: 0,
    paddingRight: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 13,
    fontSize: 18,
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    backgroundColor: '#2196F3',
  },
  closeContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 15,
    textAlign: 'center',
  },
  modalTextOne: {
    fontSize: 15,
    textAlign: 'center',
  },
  modalTextMsg: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ModalComponent;
