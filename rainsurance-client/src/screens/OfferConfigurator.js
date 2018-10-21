import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ActionButton from '../components/ActionButton';
import offerService from '../services/offerService';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: 200
  }
});

class OfferConfigurator extends Component {
  state = {
    progress: true,
  };

  componentDidMount() {
    offerService.pollTransaction().then(() => {
      this.setState({ progress: false });
    });
  }

  payOffer = () => {
    const { navigation, screenProps } = this.props;

    this.setState({ progress: true }, async () => {
      await offerService.pay();
      this.setState({ progress: false },
        () => navigation.navigate(screenProps.nextScreen));
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ActionButton
          label="Accept"
          icon="ios-checkmark-circle"
          loading={this.state.progress}
          onPress={this.payOffer}
          style={styles.button}
        />
      </View>
    );
  }
}

export default OfferConfigurator;
