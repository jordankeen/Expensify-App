// import react
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
	<div>
		from dashboard (1)
	</div>
);
const AddExpensePage = () => (
	<div>
		Add Expense Component (2)
	</div>
);
const EditExpensePage = () => (
	<div>
		edit expense (3)
	</div>
);
const HelpPage = () => (
	<div>
		Help Page (4)
	</div>
);
const routes = (
	<BrowserRouter>
		<div>
			<Route path="/" component={ExpenseDashboardPage} exact={true}/>
			<Route path="/create" component={AddExpensePage} />
			<Route path="/edit" component={EditExpensePage} />
			<Route path="/help" component={HelpPage} />
		</div>
	</BrowserRouter>
);
ReactDOM.render(routes, document.getElementById('app'));





