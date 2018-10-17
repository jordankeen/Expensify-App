
// Filters Action Generators
// setup as named exports*
// Set_Text_Filter
export const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
});
// Sort_By_Amount
export const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT'
});
// Sort By Date
export const sortByDate = () => ({
	type: 'SORT_BY_DATE'
});
// Set Start Date
export const setStartDate = (date = filtersReducerDefaultState.startDate) => ({
	type: 'SET_START_DATE',
	date
});
// Set End Date
export const setEndDate = (date = filtersReducerDefaultState.endDate) => ({
	type: 'SET_END_DATE',
	date
});

// should above be what below is??
// note that filter reducer file has some things different as well **




// SET_START_DATE
// export const setStartDate = (startDate) => ({
//   type: 'SET_START_DATE',
//   startDate
// });

// SET_END_DATE
// export const setEndDate = (endDate) => ({
//   type: 'SET_END_DATE',
//   endDate
// });