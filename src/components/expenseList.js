
import React from 'react';
// import Connect, to get list information
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// stateless functional comp. for ExpenseList
const ExpenseList = (props) =>  (
	<div>
		<h1>Expense List</h1>
		{props.expenses.map((expense) =>  {
			return <ExpenseListItem key={expense.id} {...expense} />
		})}
	</div>
);

const mapStateToProps = (state) => {
	return  {
		expenses: selectExpenses(state.expenses, state.filters)
	};
};

// HOC comp.
// define content we want from store (mapStateToProps)
// define comp. that we want to create connected version
export default connect(mapStateToProps)(ExpenseList);
