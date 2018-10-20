import React, { Component } from 'react';
import { Image, StyleSheet, SafeAreaView, View } from 'react-native';
import { LinearGradient } from 'expo';
import Workflow, { SCREENS, HeaderContent } from './src/Workflow';

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
    paneTop: 75,
  };

  onNavigating = (event) => {
    let paneTop = 25;
    const nextScreen = SCREENS[event.index];

    switch(name) {
      case 'Index':
        paneTop = 75;
        break;
    }

    this.setState({ paneTop, screenIndex: event.index });
  };

  renderHeaderContent = () => {
    const screen = SCREENS[this.state.screenIndex];
    const component = HeaderContent[screen];
    return component && component();
  };

  render() {
    const { paneTop, screenIndex } = this.state;

    return (
      <LinearGradient
        style={styles.container}
        colors={['#41E3F1', '#0070F9']}
        start={[1, 0.1]}
      >
        <SafeAreaView style={[styles.headerContainer, {
          height: `${paneTop}%`
        }]}>
          <Image source={require('./assets/otpBankLogo.png')} style={styles.logo} resizeMode="contain" />
          <View style={styles.headerContainerContent}>
            {this.renderHeaderContent()}
          </View>
        </SafeAreaView>
        <View style={[styles.floatingPane, {
          top: `${paneTop}%`,
          height: `${100 - paneTop}%`,
        }]}>
          <Workflow
            style={styles.content}
            initialRouteName={SCREENS[0]}
            onTransitionStart={this.onNavigating}
            screenProps={{ nextScreen: SCREENS[screenIndex + 1] }}
          />
        </View>
      </LinearGradient>
    );
  }
}

export default App;
