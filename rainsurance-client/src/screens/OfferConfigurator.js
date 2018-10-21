import React, { Component } from 'react';
import { View } from 'react-native';
import ActionButton from '../components/ActionButton';
import offerService from '../services/offerService';

class OfferConfigurator extends Component {
  state = {
    waitForContract: false,
  };

  componentDidMount() {

  }

  render() {
    return (
      <View>
        <ActionButton label="Accept" />
      </View>
    );
  }
}

export default OfferConfigurator;
