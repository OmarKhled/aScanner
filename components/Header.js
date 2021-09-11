import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import logo from '../static/images/IEEE-NU-Logo.png';

const Header = () => {
  return (
    <View style={styles.container}>
      {/* <Image source={logo} style={styles.logo} /> */}
      <Text style={styles.title}>IEEE NU SB</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    // flex: 1,
    // justifyContent: 'center',
    // height: 80,
    padding: 16,
  },
  logo: {
    resizeMode: 'contain',
  },
  title: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 24,
  },
});

export default Header;
