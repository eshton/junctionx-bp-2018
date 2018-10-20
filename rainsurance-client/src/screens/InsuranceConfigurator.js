import React from 'react';
import { Button, StyleSheet, View } from 'react-native';


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
  </View>
);

export default InsuranceConfigurator;
