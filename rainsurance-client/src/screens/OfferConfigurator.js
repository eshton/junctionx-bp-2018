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

  pay = () => {
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
          loading={this.state.progress}
          onPress={this.pay}
        />
      </View>
    );
  }
}

export default OfferConfigurator;
