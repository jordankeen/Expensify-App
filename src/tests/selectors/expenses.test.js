import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';


// filter by text
test('should filter by text value', () => {
	const filters =  {
		text: 'e',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined
	};
	// compare test expenses array, to test filters
	const result = selectExpenses(expenses, filters);

	expect(result).toEqual([ expenses[2], expenses[1] ]);
});

// filter by start date
test('should filter by start date', () =>  {
	const filters =  {
		text: '',
		sortBy: 'date',
		startDate: moment(0),
		endDate: undefined
	};
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([ expenses[2], expenses[0] ]);
});

// filter by endDate
test('should filter by end date', () => {
	const filters =  {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: moment(0).add(2, 'days')
	};
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([ expenses[0], expenses[1] ]);
});

// filter by date
test('should filter by date', () => {
	const filters =  {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined
	};
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ]);
});

// filter by amount
test('should filter by amount', () => {
	const filters =  {
		text: '',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	};
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([ expenses[1], expenses[2], expenses[0] ]);
});




