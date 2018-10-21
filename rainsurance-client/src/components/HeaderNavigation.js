import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
    // backgroundColor: 'green',
  },
  logo: {
    flex: 3,
    alignSelf: 'center',
    height: 35,
    // width: 200
  },
  naviButton: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    width: 35,
    height: 35,
    paddingLeft: 5,
    paddingTop: 1
  }
});

const HeaderNavigation = ({ style, shouldNavigate, goBack }) => (
  <View style={[styles.container, style]}>
    {shouldNavigate && (
      <TouchableOpacity style={styles.naviButton} onPress={goBack}>
        <Ionicons size={30} name="md-arrow-back" color='#fff' />
      </TouchableOpacity>
    )}

    <Image source={require('../../assets/otpBankLogo.png')} style={styles.logo} resizeMode="contain" />
  </View>
);

export default HeaderNavigation;
