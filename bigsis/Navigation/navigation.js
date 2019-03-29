import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../Components/SignIN'
import Register from '../Components/SignUP'
import Mapi from '../Components/Map'


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
  Map:{
    screen:Mapi,
    navigationOptions:{
      title:'Map'
    }
  }
})


export default createAppContainer(SearchStackNavigation)