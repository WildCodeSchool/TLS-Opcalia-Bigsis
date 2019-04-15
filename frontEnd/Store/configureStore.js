import { createStore } from 'redux'
import favorite from '../Store/Reducer/FavoriteReducer'
import {combineReducers} from  'redux'

const  allReducers  =  combineReducers({
    auth:  favorite,
});



export default createStore(allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    );