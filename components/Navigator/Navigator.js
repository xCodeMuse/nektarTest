import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import {HomeScreen} from '../../screens/HomeScreen'
import {DealLeadsDescScreen} from '../../screens/DealLeadsDescScreen'

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen, navigationOptions: {
    header: null
  } },
  DLDescScreen:{ screen : DealLeadsDescScreen ,
    navigationOptions: {
    header: null
  } }

});

const Navigator = createAppContainer(MainNavigator);

export default Navigator;