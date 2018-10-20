import React from 'react';
import NavigationScreen from '../components/NavigationScreen';
import Calendar from '../components/Calendar';
import store from '../util/store';

const rangeSelected = (range) => {
  store.dateRange = range;
};

const InsuranceConfigurator = ({ screenProps: { nextScreen } }) => (
  <NavigationScreen nextScreen={nextScreen}>
      <Calendar rangeSelected={rangeSelected} />
  </NavigationScreen>
);

export default InsuranceConfigurator;
