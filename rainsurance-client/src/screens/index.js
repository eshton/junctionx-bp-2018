import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  button: {
    borderRadius: 40,
    backgroundColor: 'rgb(255, 102, 0)',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  buttonContent: {
    flexDirection: 'row',
  },
  label: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    position: 'relative',
    top: 4
  }
});

const Index = ({ navigation, screenProps }) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate(screenProps.nextScreen)}
    >
      <View style={styles.buttonContent}>
        <Ionicons name="md-add-circle" size={33} style={{ color: '#fff' }} />
        <Text style={styles.label}>Add rainsurance</Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default Index;
