import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

import LocationConfigurator from '../components/LocationConfigurator';
import DateConfigurator from '../components/DateConfigurator';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
});

const InsuranceConfigurator = ({ navigation }) => (
  <View styles={styles.container}>
    <Button title="lol" onPress={() => navigation.navigate('Result')}>go</Button>
  </View>
);

export default InsuranceConfigurator;
