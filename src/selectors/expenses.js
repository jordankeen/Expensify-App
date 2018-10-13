
import moment from 'moment';

// Get Visible Expenses, using filters
// Note: timestamps (milliseconds), timestamp 0 represents Jan 1, 1970 (12am midnight)
// pure function with no dependencies, export as default

export default (expenses, { text, sortBy, startDate, endDate }) => {
	// filter thru each indiv. expense in expenses array
	return expenses.filter((expense) => {
		// 
		const createdAtMoment = moment(expense.createdAt);
		const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
		const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;

		// convert expense desc and filter text to lowercase, then check to see if text is included
		// in expense desc
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
	
		// return only ones that are true
		return startDateMatch && endDateMatch && textMatch;
	}).sort((a, b) => {
		// if a is less than b, b will come first
		if (sortBy === 'date') {
			return a.createdAt < b.createdAt ? 1 : -1;
		} else if (sortBy === 'amount') {
			// show higher amount first
			return a.amount < b.amount ? 1 : -1;
		}
	});
};
