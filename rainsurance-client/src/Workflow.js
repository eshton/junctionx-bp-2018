import { createStackNavigator } from 'react-navigation';

import Index from './screens';
import DateConfigurator from './screens/DateConfigurator';
import LocationConfigurator from './screens/LocationConfigurator';
import InsuranceResult from './screens/InsuranceResult';

import UserProfile from './components/UserProfile';

require('./util/extensions');

export const SCREENS = [
  'Index',
  'LocationConfigurator',
  'DateConfigurator',
  'InsuranceResult'
];

export const HeaderContent = {
  Index: UserProfile
};

export default createStackNavigator({
  Index: {
    screen: Index,
  },
  DateConfigurator: {
    screen: DateConfigurator,
  },
  LocationConfigurator: {
    screen: LocationConfigurator,
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
