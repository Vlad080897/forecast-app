import { Action, applyMiddleware, combineReducers, createStore } from "redux";
import weatherReducer from "./weatherReducer";
import thunkMiddleWear from 'redux-thunk'


const reducers = combineReducers({
    weatherReducer: weatherReducer,

})

const store = createStore(reducers, applyMiddleware(thunkMiddleWear));

export default store

export type AppStateType = ReturnType<typeof reducers> 
