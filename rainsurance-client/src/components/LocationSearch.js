import React from 'react';
import { Text, StyleSheet } from 'react-native';
import AutoComplete from 'react-native-autocomplete-input';

const data = ['Paris', 'London'];

const styles = StyleSheet.create({
  input: {
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    height: 40
  }
}); 

const renderItem = (item) => (
  <Text>{item}</Text>
  );
  
  const LocationSearch = ({ onSelect, value }) => (
    <AutoComplete
      onChangeText={onSelect}
      data={data}
      suggestionObjectTextProperty='text'
      defaultValue={value}
      renderItem={renderItem}
      // inputContainerStyle={styles.input}
      style={styles.input}
    />
  );
    
export default LocationSearch;
