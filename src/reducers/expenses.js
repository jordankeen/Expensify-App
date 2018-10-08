
// Expenses Reducer
// pure function with no dependencies *

// default state
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		// Add - using spread, add new expense to end of array
		case 'ADD_EXPENSE':
			return [
				...state,
				action.expense
			];
		// Remove - create new array with .filter, return all except match which is removed
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => id !== action.id);
		// Edit - map thru expense's array
		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				// when find matched id..
				// return new object, using object spread, and overwrite edited value's of expense object
				if (expense.id === action.id) {
					return {
						...expense,
						...action.updates
					};
				} else {
					// else just return with no change
					return expense;
				}
			});
		default:
			return state;
	}
};
