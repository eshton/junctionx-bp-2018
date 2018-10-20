import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo';
import RootStack from './src';

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
    top: '25%',
    left: 0,
    width: '100%',
    height: '75%',
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  content: {
    backgroundColor: '#fff'
  }
});

class App extends Component {
  render() {
    return (
      <LinearGradient
        style={styles.container}
        colors={['#41E3F1', '#0070F9']}
        start={[1, 0.1]}
      >
        <View style={styles.floatingPane}>
          <RootStack style={styles.content} />
        </View>
      </LinearGradient>
    );
  }
}

export default App;
