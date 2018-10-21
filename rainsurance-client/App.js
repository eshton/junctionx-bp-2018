import React, { Component } from 'react';
import { Animated, Image, StyleSheet, SafeAreaView, View } from 'react-native';
import { LinearGradient } from 'expo';
import Workflow, { SCREENS, HeaderContent } from './src/Workflow';
import { percentageInterpolation, animateCounterPercentage } from './src/util/animation-helper';
import HeaderNavigation from './src/components/HeaderNavigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  headerContainer: {
    marginTop: 30,
    alignItems: 'center',
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
        style={{ height: '100%' }}
        colors={['#41E3F1', '#0070F9']}
        start={[1, 0.1]}
      >
        <SafeAreaView style={styles.container}>
          <Animated.View style={[styles.headerContainer, {
            height: percentageInterpolation(paneTop)
          }]}>
              <HeaderNavigation style={{ alignSelf: 'stretch' }} shouldNavigate={false} />
              <View style={styles.headerContainerContent}>
                {this.renderHeaderContent()}
              </View>
          </Animated.View>
        </SafeAreaView>
        <Animated.View style={[styles.floatingPane, {
          top: percentageInterpolation(paneTop),
          height: percentageInterpolation(paneHeight)
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
