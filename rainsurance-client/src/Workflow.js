import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Index from './screens';
import DateConfigurator from './screens/DateConfigurator';
import LocationConfigurator from './screens/LocationConfigurator';
import InsuranceResult from './screens/InsuranceResult';
import OfferConfigurator from './screens/OfferConfigurator';
import { withQuestion } from './components/NavigationIndicator';
import { withPrice, withThumbsup } from './components/OfferWidget';

import UserProfile from './components/UserProfile';

require('./util/extensions');

export const SCREENS = [
  'Index',
  'LocationConfigurator',
  'DateConfigurator',
  'OfferConfigurator',
  'InsuranceResult'
];

export const HeaderContent = {
  Index: UserProfile,
  LocationConfigurator: withQuestion('Where would you like to travel?'),
  DateConfigurator: withQuestion('When would you like to travel?'),
  OfferConfigurator: withPrice(),
  InsuranceResult: withThumbsup(),
};

const Navigator = createStackNavigator({
  Index: {
    screen: Index,
  },
  DateConfigurator: {
    screen: DateConfigurator,
  },
  LocationConfigurator: {
    screen: LocationConfigurator,
  },
  OfferConfigurator: {
    screen: OfferConfigurator,
  },
  InsuranceResult: {
    screen: InsuranceResult,
  },
}, {
  headerMode: 'none',
  cardStyle: {
    backgroundColor: '#fff'
  },
  navigationOptions: {
    headerVisible: false,
    gesturesEnabled: false,
  }
});


export default ({ navigatorRef, ...props }) => (
  <Navigator ref={navigatorRef} {...props} />
);
