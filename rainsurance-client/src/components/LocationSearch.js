import React, { Component } from 'react';
import { Image, Text, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Haptic } from 'expo';
import { getCountryForCity } from '../util/geoHelper';

const cities = [
  'New York',
  'Stockholm',
  'Sydney',
  'Rome',
  'Paris',
  'Hamburg',
  'Barcelona',
  'Moscow',
  'Zurich'
].sort((a, b) => a.localeCompare(b));

const borderStyle = {
  borderWidth: 1,
  borderRadius: 30,
  borderColor: 'rgba(0, 0, 0, 0.06)',
}

const styles = StyleSheet.create({
  containerStyle: {
    padding: 5,
  },
  inputContainerStyle: {
    ...borderStyle,
    padding: 14,
  },
  resultContainerStyle: {
    marginTop: 5,
    // flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemStyle: {
    ...borderStyle,
    width: 150,
    height: 50,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  flag: {
    width: 35,
    height: 35,
    marginLeft: 5,
    marginRight: 10
  }
}); 

const CityResult = ({ city, selected, pressed }) => (
  <TouchableOpacity
    onPress={pressed}
    style={[styles.itemStyle, { backgroundColor: selected ? 'rgb(43, 54, 149)' : '#fff'}]}
  >
    <Image style={styles.flag} source={{ uri: `https://www.countryflags.io/${getCountryForCity(city)}/shiny/32.png` }} />
    <Text style={{ color: selected ? '#fff' : '#000' }}>{city}</Text>
  </TouchableOpacity>
);
  
class LocationSearch extends Component {
  state = {
    results: cities,
    selectedIndex: null,
  };

  filter = (text) => {
    const results = cities.filter(city => city.toLocaleLowerCase().startsWith(text.toLocaleLowerCase()));
    this.setState({ results, selectedIndex: null });
  };

  selectCity = (selectedIndex) => {
    const { results } = this.state;

    Haptic.impact(Haptic.ImpactStyles.Light);
    this.setState({ selectedIndex });

    this.props.onSelect(results[selectedIndex]);
  };

  render() {
    const { results, selectedIndex } = this.state;

    return (
      <View style={styles.containerStyle}>
        <View style={styles.inputContainerStyle}>
          <TextInput
            placeholder="Search destinations"
            onChangeText={this.filter}
          />
        </View>

        <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Suggestions</Text>
        <View style={styles.resultContainerStyle}>
          {results.map((city, index) => (
            <CityResult
              key={city}
              city={city}
              selected={selectedIndex === index}
              pressed={() => this.selectCity(index)}
            />
          ))}
        </View>
      </View>
    );
  }
}

export default LocationSearch;
