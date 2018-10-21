import React from 'react';
import NavigationScreen from '../components/NavigationScreen';
import Calendar from '../components/Calendar';
import store from '../util/store';
import offerService from '../services/offerService';

const rangeSelected = (range) => {
  store.dateRange = range;
};

const getOffer = async () => {
  store.offer = await offerService.getOffer();
};

const InsuranceConfigurator = ({ screenProps: { nextScreen } }) => (
  <NavigationScreen nextScreen={nextScreen} action={getOffer}>
    <Calendar rangeSelected={rangeSelected} />
  </NavigationScreen>
);

export default InsuranceConfigurator;
