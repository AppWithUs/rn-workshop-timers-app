import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/Home';

const MainApp = StackNavigator({
  Home: { screen: HomeScreen },
});

export default MainApp;
