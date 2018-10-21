import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { loadingAnimation } from '../util/animation-helper';

const DISABLED_COLOR = 'rgb(178, 174, 189)';
const BUTTON_COLOR = 'rgb(255, 102, 0)';

const styles = StyleSheet.create({
  button: {
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  buttonContent: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  label: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  }
});

const ActionButton = ({ label, icon, style, loading = false, ...props }) => (
  <TouchableOpacity
    style={[style, styles.button, {
      backgroundColor: loading ? DISABLED_COLOR : BUTTON_COLOR,
    }]}
    {...props}
    disabled={loading}
  >
    <View style={styles.buttonContent}>
      {loadingAnimation(icon, loading)}
      <Text style={styles.label}>{label}</Text>
      <View />
    </View>
  </TouchableOpacity>
)

export default ActionButton;
