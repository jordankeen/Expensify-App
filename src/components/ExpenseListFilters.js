import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

// 
const ExpenseListFilters = (props) => (
	// set text filter value to value for input
	<div>
		<input
			type="text"
			value={props.filters.text}
			onChange={(e) => {
				// access dispatch from ExpenseListFilters props, import setTextFilter from filters action file
				props.dispatch(setTextFilter(e.target.value));	
			}}
		/>
		<select 
			value={props.filters.sortBy}
			onChange={(e) => {
				if (e.target.value === 'date') {
					props.dispatch(sortByDate());
				} else if (e.target.value === 'amount') {
					props.dispatch(sortByAmount());
				}
			}}
		>
			<option value="date">Date</option>
			<option value="amount">Amount</option>
		</select>
	</div>	
);

// connect above comp. to store so we can have access to text filter


// mapstate funct.
const mapStateToProps = (state) => {
	// need filters, but not expenses
	return {
		filters: state.filters
	};
};

export default connect(mapStateToProps)(ExpenseListFilters);