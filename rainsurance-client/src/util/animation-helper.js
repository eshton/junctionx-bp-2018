import React from 'react';
import { Animated, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const percentageInterpolation = (val) => val.interpolate({
  inputRange: [0, 100],
  outputRange: ['0%', '100%']
});

export const animateCounterPercentage = (val, counterValue, toValue) => {
  Animated.parallel([
    Animated.timing(
      val, { toValue: toValue, duration: 250 }
    ),
    Animated.timing(
      counterValue, { toValue: 100 - toValue, duration: 250 }
    )
  ]).start();
}

export const loadingAnimation = (defaultIcon, loading) => {
  if (loading) {
    return <ActivityIndicator size="small" color="#fff" />;
  } else {
    return <Ionicons size={33} name={defaultIcon} color="#fff" style={{ position: 'relative', top: 2 }} />;
  }
};
