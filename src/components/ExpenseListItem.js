
import React from 'react';
// stateless funct. comp.

// deconstruct props
const ExpenseListItem = ({ description, amount, createdAt }) => (
	<div>
		<h3>{description}</h3>
		<p>{amount} - {createdAt}</p>
	</div>

);

export default ExpenseListItem;