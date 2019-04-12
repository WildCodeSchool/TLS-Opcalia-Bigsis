import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../Components/SignIN'
import Register from '../Components/SignUP'
import Select from '../Components/SelectContact'

const SearchStackNavigation = createStackNavigator({
  Accueil: {
    screen: Login,
    navigationOptions: {
      title: 'Accueil',
      header: null

    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: 'Inscription',
      header: null
      
    }
  },
  Selection: {
    screen: Select,
    navigationOptions: {
      header: null
    }
  }
}
)


export default createAppContainer(SearchStackNavigation)