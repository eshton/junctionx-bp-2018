import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { StyleSheet, View } from 'react-native';
import ActionButton from '../components/ActionButton';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: 200
  }
});

const InsuranceConfigurator = ({ navigation }) => (
  <View style={styles.container}>
    <ActionButton
      label="Done"
      icon="ios-checkmark-circle"
      style={styles.button}
    />
  </View>
);
  
export default InsuranceConfigurator;
  