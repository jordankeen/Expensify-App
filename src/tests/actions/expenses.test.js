// import functions to test with jest
import { addExpense, editExpense, removeExpense } from '../../actions/expenses';


// removeExpense test
test('should setup remove expense action object', () =>  {
	// function expects object with id property
	const action = removeExpense({ id: '123abcd' });
	// use toEqual method to compare object propties(for objects or arrays);
	expect(action).toEqual({ 
		type: 'REMOVE_EXPENSE',
		id: '123abcd'
	});
});

// editExpense test
test ('should edit expense', () => {
	const action = editExpense('123abcd', { note: 'New Note' });
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123abcd',
		updates:  {
			note: 'New Note'
		}
	})
});

// addExpense
test ('should setup add expense action object with provided values', () => {
	const expenseData =  { 
		description: 'Rent', 
		note: 'Rent Note', 
		amount: 100, 
		createdAt: 1000 
	}
	const action = addExpense(expenseData);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense:  {
			...expenseData,
			id: expect.any(String),
		}
	});
});

test('should setup add expense action object with default values', () => {
	const action = addExpense();
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense:  {
			id: expect.any(String),
			description: '',
			note: '',
			amount: 0,
			createdAt: 0
		}
	});
});

