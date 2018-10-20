import { createStackNavigator } from 'react-navigation';

import Index from './screens';
import InsuranceConfigurator from './screens/InsuranceConfigurator';
import LocationConfigurator from './screens/LocationConfigurator';
import InsuranceResult from './screens/InsuranceResult';

import UserProfile from './components/UserProfile';

require('./util/extensions');

export const SCREENS = [
  'Index',
  'LocationConfigurator',
  'DateConfigurator',
];

export const HeaderContent = {
  Index: UserProfile
};

export default createStackNavigator({
  Index: {
    screen: Index,
  },
  DateConfigurator: {
    screen: InsuranceConfigurator,
  },
  LocationConfigurator: {
    screen: LocationConfigurator,
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
