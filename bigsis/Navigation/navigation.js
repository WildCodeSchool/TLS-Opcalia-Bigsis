import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../Components/SignIN'
import Register from '../Components/SignUP'


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
  }
})


export default createAppContainer(SearchStackNavigation)