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
  },
  progressIndicatorContainer: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressItems: {
    height: 5,
    width: 50,
  }
});

const COMPLETED_COLOR = 'rgba(43, 54, 149, 0.6)';
const INCOMPLETE_COLOR = 'rgba(255, 255, 255, 0.6)';

const NavigationIndicator = ({ question, stepCount, index }) => (
  <View style={styles.container}>
    <Text style={styles.questionStyle}>{question}</Text>

    <View style={styles.progressIndicatorContainer}>
      {[...Array(stepCount).keys()].map((i) => (
        <View
          key={i}
          style={[styles.progressItems, {
            backgroundColor: i <= index ? COMPLETED_COLOR : INCOMPLETE_COLOR
          }]}
        >
        </View>
      ))}
    </View>
  </View>
);

export const withQuestion = (question) => (props) => (
  <NavigationIndicator question={question} {...props} />
);

export default NavigationIndicator;
