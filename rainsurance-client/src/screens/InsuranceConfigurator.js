import React from 'react';
import { Button, Text, SafeAreaView } from 'react-native';

import Dateconfigurator from '../components/Dateconfigurator';
import DateConfigurator from '../components/Dateconfigurator';

const InsuranceConfigurator = ({ navigation }) => (
  <SafeAreaView>
    <DateConfigurator />
    <Button title="lol" onPress={() => navigation.navigate('Result')}>go</Button>
  </SafeAreaView>
);

export default InsuranceConfigurator;
