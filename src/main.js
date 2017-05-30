import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/Home';
import DetailScreen from './screens/Detail';

const MainApp = StackNavigator({
  Home: { screen: HomeScreen },
  Detail: { screen: DetailScreen },
});

export default MainApp;
