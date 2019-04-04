import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../Components/SignIN'
import Register from '../Components/SignUP'
import Select from '../Components/Map'

const SearchStackNavigation = createStackNavigator({
  Accueil: {
    screen: Login,
    navigationOptions: {
      title:'Accueil'
    }
  },
  Register:{
    screen:Register,
    navigationOptions:{
      title:'Inscription'
    }
},
Selection:{
  screen:Select
  }
  }
)


export default createAppContainer(SearchStackNavigation)