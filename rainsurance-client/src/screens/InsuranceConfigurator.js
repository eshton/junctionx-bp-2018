import React from 'react';
import crypto from '../services/cryptoStuff';
import { Button, StyleSheet, View } from 'react-native';

import LocationConfigurator from '../components/LocationConfigurator';
import DateConfigurator from '../components/Dateconfigurator';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
});

const InsuranceConfigurator = ({ navigation }) => (
  <View styles={styles.container}>
    <Button title="A gomb" onPress={() => crypto()} />
  </View>
);

export default InsuranceConfigurator;
