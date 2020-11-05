import {createStore, applyMiddleware} from 'redux';
import Reducer from './reducer';
import Thunk from 'redux-thunk'


export default createStore(Reducer,{},applyMiddleware(Thunk));