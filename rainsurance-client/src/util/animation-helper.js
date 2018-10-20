import { Animated } from 'react-native';

export const percentage = (val) => val.interpolate({
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
