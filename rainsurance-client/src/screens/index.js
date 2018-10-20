import React from 'react';
import { Button, View } from 'react-native';

const Index = ({ navigation, screenProps }) => (
  <View>
    <Button
      title="Add rainsurance"
      onPress={() => navigation.navigate(screenProps.nextScreen)}
    />
  </View>
);

export default Index;
