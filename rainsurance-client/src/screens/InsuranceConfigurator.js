import React from 'react';
import crypto from '../services/cryptoStuff';
import crypto2 from '../services/cryptoStuff2';
import { Button, StyleSheet, View } from 'react-native';

import LocationConfigurator from '../components/LocationConfigurator';
import DateConfigurator from '../components/Dateconfigurator';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
});

const InsuranceConfigurator = ({ navigation, screenProps: { nextScreen } }) => (
  <View styles={styles.container}>
    <Button title="A gomb" onPress={() => {
      navigation.navigate(nextScreen);
    }} />
    <Button title="A gomb 2" onPress={() => crypto2()} />
  </View>
);

export default InsuranceConfigurator;
