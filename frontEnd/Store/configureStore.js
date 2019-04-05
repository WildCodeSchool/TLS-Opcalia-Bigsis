import { createStore } from 'redux'
import favorite from '../Store/Reducer/FavoriteReducer'



export default createStore(favorite,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    );