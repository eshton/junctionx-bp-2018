import React from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import store from '../util/store';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20
    // backgroundColor: 'green',
  },
  logo: {
    flex: 3,
    alignSelf: 'center',
    height: 25,
  },
  naviButton: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    width: 35,
    height: 35,
    paddingLeft: 5,
    paddingTop: 1
  },
  detailsStyle: {
    fontWeight: 'bold',
    fontSize: 17,
    flexDirection: 'row',
    color: '#fff',
    marginLeft: 20
  },
});

const checkStore = () => {
  console.log(store.location);
  return store.location || store.dateRange
};

const renderImage = () => (
  <Image source={require('../../assets/otpBankLogo.png')} style={styles.logo} resizeMode="contain" />
);

const renderDetails = () => (
  <Text style={styles.detailsStyle}>
    {[store.location, store.dateRange].join(' ')}
  </Text>
);

const HeaderNavigation = ({ style, shouldNavigate, goBack }) => (
  <View style={[styles.container, style]}>
    {shouldNavigate && (
      <TouchableOpacity style={styles.naviButton} onPress={goBack}>
        <Ionicons size={30} name="md-arrow-back" color='#fff' />
      </TouchableOpacity>
    )}

    {checkStore() ? renderDetails() : renderImage()}
    <View></View>
  </View>

);

export default HeaderNavigation;
