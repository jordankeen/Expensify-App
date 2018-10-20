import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set default state', () => {
	const state = expensesReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual([]);
});

test('should remove expense by id', () => {
	const action =  {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[2]]);
});

// random id so no expense should be removed
test('should not remove expenses if id not found', () => {
	const action =  {
		type: 'REMOVE_EXPENSE',
		id: '-1'
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

// add expense
test('should add an expense', () => {
	const expense =  {
		id: '109',
		description: 'Laptop',
		note: '',
		createdAt: 20000,
		amount: 29500
	};
	// action to dispatch
	const action =  {	
		type: 'ADD_EXPENSE',
		expense
	};
	// using expenses fixture and action above
	const state = expensesReducer(expenses, action);
	// equal expneses fixture array with test expense added to end of array
	expect(state).toEqual([...expenses, expense ])
});

test('edit an expense', () => {
	// test by changing amount
	const amount = 122000;
	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[1].id,
		updates:  {
			amount
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state[1].amount).toBe(amount);
});

test('should not edit an expense if id not found', () => {
	// test by changing amount
	const amount = 122000;
	const action = {
		type: 'EDIT_EXPENSE',
		id: '-1',
		updates:  {
			amount
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});








