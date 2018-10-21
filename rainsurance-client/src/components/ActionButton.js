import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { loadingAnimation } from '../util/animation-helper';

const styles = StyleSheet.create({
  button: {
    borderRadius: 40,
    backgroundColor: 'rgb(255, 102, 0)',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  buttonContent: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  }
});

const ActionButton = ({ label, icon, loading = false, ...props }) => (
  <TouchableOpacity
    style={styles.button}
    {...props}
  >
    <View style={styles.buttonContent}>
      {loadingAnimation(icon, loading)}
      <Text style={styles.label}>{label}</Text>
    </View>
  </TouchableOpacity>
)

export default ActionButton;
