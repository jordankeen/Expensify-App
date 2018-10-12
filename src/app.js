// import react
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// get return value from configureStore
// gives access to dispatch, getState, subscribe
const store = configureStore();

// subscribe runs anytime an action is dispatched
// store.subscribe(() => {
// 	const state = store.getState();
// 	// console.log(state);
// 	// only show visible expenses
// 	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// 	// console.log(visibleExpenses);
// });

// add expense's
store.dispatch(addExpense( {description: 'Water Bill', amount: 4500 }));
store.dispatch(addExpense( {description: 'Gas Bill', createdAt: 1000 }));
store.dispatch(addExpense( {description: 'Rent', amount: 109500 }));

// only show visible expenses
const state = store.getState();

console.log('state is below');
console.log(state);
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

// setup provider
const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

// console.log(store.getState());

ReactDOM.render(jsx, document.getElementById('app'));

