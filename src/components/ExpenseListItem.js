
import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';


// stateless funct. comp.

// deconstruct props from each expense from expenseList
const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
	<div>
		<h3>{description}</h3>
		<p>{amount} - {createdAt}</p>
		<button onClick={() => {
			dispatch(removeExpense({ id }));
		}}>Remove</button>
	</div>

);


// export default with connect, using connect gives access to dispatch prop
export default connect()(ExpenseListItem);