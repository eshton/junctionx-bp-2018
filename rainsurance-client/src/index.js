import { createStackNavigator } from 'react-navigation';

import Index from './screens';
import InsuranceConfigurator from './screens/InsuranceConfigurator';
import InsuranceResult from './screens/InsuranceResult';

require('./util/extensions');

export const SCREENS = [
  'Index',
  'DateConfigurator',
  'LocationConfigurator'
];

export default createStackNavigator({
  Index: {
    screen: Index,
  },
  DateConfigurator: {
    screen: InsuranceConfigurator,
  },
  LocationConfigurator: {
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
