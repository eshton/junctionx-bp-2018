import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo';
import Workflow, { SCREENS } from './src';
import './global';



const Web3 = require('web3');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    screenIndex: 1,
    paneTop: 75,
  };

  onNavigating = (event) => {
    let paneTop = 25;
    const nextScreen = SCREENS[event.index + 1];

    switch(name) {
      case 'Index':
        paneTop = 75;
        break;
    }

    this.setState({ paneTop, screenIndex: event.index + 1 });
  };

  render() {
    const { paneTop, screenIndex } = this.state;

    return (
      <LinearGradient
        style={styles.container}
        colors={['#41E3F1', '#0070F9']}
        start={[1, 0.1]}
      >
        <View style={[styles.floatingPane, {
          top: `${paneTop}%`,
          height: `${100 - paneTop}%`,
        }]}>
          <Workflow
            style={styles.content}
            initialRouteName={SCREENS[0]}
            onTransitionStart={this.onNavigating}
            screenProps={{ nextScreen: SCREENS[screenIndex] }}
          />
        </View>
      </LinearGradient>
    );
  }
}

export default App;
