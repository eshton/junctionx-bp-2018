import React, { Component } from 'react';
import { Animated, Image, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo';
import Workflow, { SCREENS, HeaderContent } from './src/Workflow';
import { percentage, animateCounterPercentage } from './src/util/animation-helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerContainer: {
    marginTop: 30,
  },
  headerContainerContent: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'center',
    height: 40,
    width: 200
  },
  floatingPane: {
    position: 'absolute',
    zIndex: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    left: 0,
    width: '100%',
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  content: {
    backgroundColor: '#fff'
  }
});

class App extends Component {

  state = {
    screenIndex: 0,
    paneTop: new Animated.Value(85),
    paneHeight: new Animated.Value(15),
  };

  onNavigating = (event) => {
    let paneTop = 25;

    animateCounterPercentage(this.state.paneTop, this.state.paneHeight, paneTop);

    this.setState({ screenIndex: event.index });
  };

  renderHeaderContent = () => {
    const screen = SCREENS[this.state.screenIndex];
    const component = HeaderContent[screen];
    return component && component();
  };

  render() {
    const { paneTop, paneHeight, screenIndex } = this.state;

    return (
      <LinearGradient
        style={styles.container}
        colors={['#41E3F1', '#0070F9']}
        start={[1, 0.1]}
      >
        <Animated.View style={[styles.headerContainer, {
          height: percentage(paneTop)
        }]}>
          <Image source={require('./assets/otpBankLogo.png')} style={styles.logo} resizeMode="contain" />
          <View style={styles.headerContainerContent}>
            {this.renderHeaderContent()}
          </View>
        </Animated.View>
        <Animated.View style={[styles.floatingPane, {
          top: percentage(paneTop),
          height: percentage(paneHeight)
        }]}>
          <Workflow
            style={styles.content}
            initialRouteName={SCREENS[0]}
            onTransitionStart={this.onNavigating}
            screenProps={{ nextScreen: SCREENS[screenIndex + 1] }}
          />
        </Animated.View>
      </LinearGradient>
    );
  }
}

export default App;
