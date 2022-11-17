import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { todoReducer } from './reducers/todoReducer';

const reducer = combineReducers({
	todos: todoReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
