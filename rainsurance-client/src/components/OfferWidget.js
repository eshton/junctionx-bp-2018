import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import offerService from '../services/offerService';

const styles = StyleSheet.create({
  offerWidget: {
    marginTop: 20,
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  offerPrice: {
    color: '#fff',
    fontSize: 80,
  },
  successStyle: {
    fontSize: 50,
    padding: 30,
  }
});

const OfferWidget = ({ children }) => (
  <View style={styles.offerWidget}>{children}</View>
);

export const withPrice = () => () => (
  <OfferWidget>
    {offerService.price && <Text style={styles.offerPrice}>{`${offerService.price} ETH`}</Text>}
  </OfferWidget>
);

export const withThumbsup = () => () => (
  <OfferWidget>
    <Ionicons size={80} name="ios-checkmark-circle" color="#fff" />
  </OfferWidget>
);

export default OfferWidget;
