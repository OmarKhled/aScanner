import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RadioButton} from 'react-native-paper';

const RadioComponent = ({checked, title, onPress}) => {
  const styles = StyleSheet.create({
    radio: {
      padding: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    radioText: {
      fontSize: 18,
      fontWeight: '500',
    },
  });
  return (
    <View style={styles.radio}>
      <RadioButton
        value="Atendance"
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => onPress(title)}
      />
      <Text style={styles.radioText}>{title}</Text>
    </View>
  );
};

const SelectMode = ({checked, setChecked}) => {
  useEffect(() => {}, [checked]);
  const onPress = name => {
    console.log(name);
    setChecked(name);
  };
  return (
    <View style={styles.container}>
      <View style={styles.radioContainer}>
        <RadioComponent
          title="Attendance"
          checked={checked === 'Attendance'}
          onPress={onPress}
        />
        <RadioComponent
          title="Food"
          checked={checked === 'Food'}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  radioContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default SelectMode;
