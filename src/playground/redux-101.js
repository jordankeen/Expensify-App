
import { createStore } from 'redux';

// action generators - functions that return action objects
// 
const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy: typeof decrementBy === 'number' ? decrementBy : 1
});

const setCount = ({ count }) => ({
	type: 'SET',
	count: count
});

const resetCount = () => ({
	type: 'RESET',
});

// simple redux state container example **
const store = createStore((state = { count: 0 }, action) => {
	// switch statement
	switch (action.type) {
		// actions
		case 'INCREMENT':
			return {
				count: state.count + action.incrementBy
			};
		case 'DECREMENT':
			return {
				count: state.count - action.decrementBy
			}
		case 'SET': 
			return {
				count: action.count
			}
		case 'RESET':
			return {
				count: 0
			}
		default:
			return state;
	}
});

const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

//

store.dispatch(incrementCount( { incrementBy: 5 } ));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 99 }));

