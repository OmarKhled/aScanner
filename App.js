import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from './components/Modal';

import QRCodeScanner from 'react-native-qrcode-scanner';

import Header from './components/Header.js';
import SelectMode from './components/SelectMode.js';
import axios from 'axios';

const App = () => {
  let scanner;

  const [userData, setUserData] = useState({attendee: {}, type: 'success'});
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = useState('Attendance');

  useEffect(() => {
    if (modalVisible) {
      // scanner._setScanning(false);
    } else {
      // scanner._setScanning(true);
    }
  }, [modalVisible]);
  const onSuccess = async e => {
    try {
      const res = await axios.post(
        `http://ieeenu.com/api/spaceSummit/attendance/${e.data}`,
        {
          options: {
            type: checked,
          },
        },
      );
      // console.log(checked);
      console.log(res.data);
      setUserData({
        attendee: res.data.atendee,
        msg: res.data.msg,
        type: res.data.type,
      });
      setModalVisible(true);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Modal
        data={userData}
        setModalVisible={() => setModalVisible(!modalVisible)}
        modalVisible={modalVisible}
      />
      <Header />
      <SelectMode checked={checked} setChecked={setChecked} />
      <QRCodeScanner
        ref={camera => (scanner = camera)}
        cameraStyle={styles.camera}
        containerStyle={styles.cameraContainer}
        onRead={onSuccess}
        reactivate={true}
        reactivateTimeout={2000}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  cameraContainer: {
    display: 'flex',
  },
  modal: {
    // backgroundColor: 'white',
    // padding: 20,
    // zIndex: 100000000,
  },
  camera: {
    // display: 'flex',
    height: 401,
    // overflow: 'hidden',
    marginTop: 30,
    // zIndex: -1000,
  },
  containerStyle: {
    // overflow: 'hidden',
    // zIndex: -1000,
  },
  buttonTouchable: {
    height: 300,
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
});

export default App;
