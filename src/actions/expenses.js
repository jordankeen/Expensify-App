
import uuid from 'uuid';

// Expense Action Generators
// setup as named exports *

// Add_Expense
export const addExpense = ( 
	// default values
	{ 
		description = '', 
		note = 'default note!', 
		amount = 0, 
		createdAt = 0 
	} = {}
) => ({
	type: 'ADD_EXPENSE',
	expense:  {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
});

// Remove_Expense
// Object gets passed in as first arg.
// destructure obj, set default for obj if doesn't exist
export const removeExpense =  ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
});
// Edit_Expense
export const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE', 
	id,
	updates
});