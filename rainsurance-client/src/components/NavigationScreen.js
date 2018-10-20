import React from 'react';
import { StyleSheet, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import ActionButton from 'react-native-action-button';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cta: {
    position: 'absolute',
    bottom: 50,
    right: 0,
  }
});

const NavigationScreen = ({ children, navigation: { navigate }, nextScreen, action }) => (
  <View style={styles.container}>
    {children}
    <ActionButton
      buttonColor='rgb(255, 102, 0)'
      onPress={() => {
        navigate(nextScreen);

        if (action) {
          action();
        }
      }}
      style={styles.cta}
      renderIcon={() => <Ionicons size={25} name="md-arrow-round-forward" color='#fff' />}
    >
    </ActionButton>
  </View>
);

export default withNavigation(NavigationScreen);

