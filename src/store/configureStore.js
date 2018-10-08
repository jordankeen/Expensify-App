
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
		})
	);

	return store;
}
