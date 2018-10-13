
import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {

	// Store Creation
	// Note: store holds the whole state tree
	// must dispatch an action to change state
	const store = createStore(
		combineReducers({
			expenses: expensesReducer,
			filters: filtersReducer
		}),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	return store;
}
