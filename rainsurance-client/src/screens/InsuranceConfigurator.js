import React from 'react';
import { Button, Text, SafeAreaView } from 'react-native';

const InsuranceConfigurator = ({ navigation }) => (
  <SafeAreaView>
    <Text>Configurator</Text>
    <Button title="lol" onPress={() => navigation.navigate('Result')}>go</Button>
  </SafeAreaView>
);

export default InsuranceConfigurator;
