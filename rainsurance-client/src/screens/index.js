import React from 'react';
import { StyleSheet, View } from 'react-native';
import ActionButton from '../components/ActionButton';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

const Index = ({ navigation, screenProps }) => (
  <View style={styles.container}>
    <ActionButton
      onPress={() => navigation.navigate(screenProps.nextScreen)}
      label="Add rainsurance"
      icon="md-add-circle"
    />
  </View>
);

export default Index;
