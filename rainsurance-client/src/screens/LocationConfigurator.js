import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import LocationSearch from '../components/LocationSearch';
import NavigationScreen from '../components/NavigationScreen';
import store from '../util/store';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff'
    padding: 30,
  }
});

class LocationConfigurator extends Component {
  state = { location: '' }

  selected = (location) => {
    store.location = location;
    this.setState({ location });
  };

  render() {
    return (
      <NavigationScreen nextScreen={this.props.screenProps.nextScreen}>
        <View style={styles.container}>
          <LocationSearch onSelect={this.selected} value={this.state.location} />
        </View>
      </NavigationScreen>
    );
  }
}

export default LocationConfigurator;
