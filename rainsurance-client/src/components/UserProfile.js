import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 40,
    fontWeight: '500',
    color: '#fff',
  }
});

const UserProfile = () => (
  <View stlye={styles.container}>
    <Image source={require('../../assets/csanyi.png')} />
    <Text style={styles.name}>Sandor Csanyi</Text>
  </View>
);

export default UserProfile;
