import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import ActionButton from 'react-native-action-button';
import { loadingAnimation } from '../util/animation-helper';

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

class NavigationScreen extends PureComponent {

  state = {
    inProgress: false,
  };

  executeAction = () => {
    const { navigation: { navigate }, nextScreen, action } = this.props;

    this.setState({ inProgress: true }, async () => {
      if (action) {
        await action();
      }

      this.setState({ inProgress: false }, () => navigate(nextScreen));
    });
  };

  render() {
    const { children, navigation: { navigate }, nextScreen, action } = this.props;

    return (
      <View style={styles.container}>
        {children}
        <ActionButton
          buttonColor='rgb(255, 102, 0)'
          onPress={this.executeAction}
          style={styles.cta}
          renderIcon={() => loadingAnimation('md-arrow-round-forward', this.state.inProgress)}
        >
        </ActionButton>
      </View>
    );
  }
}

export default withNavigation(NavigationScreen);

