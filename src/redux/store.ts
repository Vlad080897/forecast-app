import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleWear from 'redux-thunk';
import weatherReducer from './weatherReducer';

const reducers = combineReducers({
  weatherReducer,

});

const store = createStore(reducers, applyMiddleware(thunkMiddleWear));

export default store;

export type AppStateType = ReturnType<typeof reducers>;
