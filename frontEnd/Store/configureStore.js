import { createStore, combineReducers } from 'redux';
import favorite from './Reducer/FavoriteReducer';


const allReducers = combineReducers({
  auth: favorite,
});


export default createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
