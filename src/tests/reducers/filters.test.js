import moment from 'moment';
import filtersReducer from '../../reducers/filters';

// test for default values, using @@INIT
test('should setup default filter values', () => {
	// use undefined to test default values
	// using @@INIT, action object from redux
	const state = filtersReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	});
});

// sortBy amount
test('should set sortBy to amount', () => {
	const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
	expect(state.sortBy).toBe('amount');
});

// sortBy Date
test('should set sortBy to date', () => {
	const currentState =  {
		text: '',
		startDate: undefined,
		endDate: undefined,
		sortBy: 'amount'
	};
	const action = { type: 'SORT_BY_DATE' };
	const state = filtersReducer(currentState, action);
	expect(state.sortBy).toBe('date');
});

// set text filter
test('should set text filter', () => {
	const text = 'This is my filter';
	const action = {
		type: 'SET_TEXT_FILTER',
		text
	};
	const state = filtersReducer(undefined, action);
	expect(state.text).toBe(text);
});

// start date filter
test('should set startDate filter', () => {
	const startDate = moment();
	const action =  {
		type: 'SET_START_DATE',
		date: startDate
	};
	const state = filtersReducer(undefined, action);
	expect(state.startDate).toEqual(startDate);
});

// end date filter
test('should set endDate filter', () => {
	const endDate = moment();
	const action =  {
		type: 'SET_END_DATE',
		date: endDate
	};
	const state = filtersReducer(undefined, action);
	expect(state.endDate).toEqual(endDate);


});




