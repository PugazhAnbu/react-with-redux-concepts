import { createStore, combineReducers, applyMiddleware } from 'redux'
import counterReducer from './count/reducer'
import Postreducer from './posts/reducer'
import thunk from "redux-thunk";
//const thunkMiddleware = reduxThunk.default
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    count: counterReducer,
    posts: Postreducer
})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, createLogger())))

export default store