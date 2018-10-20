import { createStackNavigator } from 'react-navigation';

import InsuranceConfigurator from './screens/InsuranceConfigurator';
import InsuranceResult from './screens/InsuranceResult';

export default createStackNavigator({
    Configurator: {
        screen: InsuranceConfigurator,
    },
    Result: {
        screen: InsuranceResult,
    },
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});
