import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  questionStyle: {
    fontSize: 30,
    fontWeight: '800',
    color: '#fff'
  }
});

const NavigationIndicator = ({ question, index }) => (
  <View style={styles.container}>
    <Text style={styles.questionStyle}>{question}</Text>
  </View>
);

export const withQuestion = (question) => (props) => (
  <NavigationIndicator question={question} {...props} />
);

export default NavigationIndicator;
