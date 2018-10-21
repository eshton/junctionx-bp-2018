import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import ActionButton from '../components/ActionButton';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
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
