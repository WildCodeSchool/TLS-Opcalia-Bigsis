import React from "react";
import Navigation from './Navigation/navigation'
import store from './Store/configureStore'
import { Provider } from 'react-redux'



class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
       </Provider>

    );
  }
}


export default App;
