import { createStackNavigator } from 'react-navigation';

import InsuranceConfigurator from './screens/InsuranceConfigurator';
import InsuranceResult from './screens/InsuranceResult';

require('./util/extensions');

export default createStackNavigator({
  Configurator: {
    screen: InsuranceConfigurator,
  },
  Result: {
    screen: InsuranceResult,
  },
}, {
  headerMode: 'none',
  cardStyle: {
    backgroundColor: '#fff'
  },
  navigationOptions: {
    headerVisible: false,
  }
});
