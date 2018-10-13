import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// to use moment/datepicker
// installed below
// moment@2.18.1
// react-dates@12.7.0
// react-addons-shallow-compare@15.6.0

// const date = new Date();
const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
	state =  {
		description: '',
		note: '',
		amount: '',
		createdAt: moment(),
		calenderFocused: false,
		error: ''
	};
	onDescriptionChange = (e) => {
		const description = e.target.value;
		this.setState(() => ({ description }));
	};
	onNoteChange = (e) => {
		const note = e.target.value;
		this.setState(() => ({ note }));
	};
	onAmountChange = (e) => {
		const amount = e.target.value;
		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			this.setState(() => ({ amount }));
		}
	};
	onDateChange = (createdAt) => {
		if (createdAt) {
			this.setState(() => ({ createdAt }))	
		}
	};
	onFocusChange = ({ focused }) => {
		this.setState(() => ({ calenderFocused: focused }))
	};
	onSubmit = (e) => {
		e.preventDefault();
		// on submit, if no desc or amount
		if (!this.state.description || !this.state.amount) {
			// set error state 
			this.setState(() => ({
				error: 'Please provide a description and amount.'
			}));
		} else {
			// clear error when desc and amount are present
			this.setState(() => ({
				error: ''
			}));
			// passing function from AddExpensePage
			this.props.onSubmit({
				description: this.state.description,
				amount: parseFloat(this.state.amount, 10) * 100,
				createdAt: this.state.createdAt.valueOf(),
				note: this.state.note
			});
		}
	};
	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.onSubmit}>
					<input
						type="text"
						placeholder="Description"
						autoFocus
						value={this.state.description}
						onChange={this.onDescriptionChange}
					/>
					<input
						type="text"
						placeholder="Amount"
						value={this.state.amount}
						onChange={this.onAmountChange}
					/>
					<SingleDatePicker
						date={this.state.createdAt}
						onDateChange={this.onDateChange}
						focused={this.state.calenderFocused}
						onFocusChange={this.onFocusChange}
						numberOfMonths={1}
						isOutsideRange={() => false}
					/>
					<textarea
						placeholder="Add a note for your expense (optional)"
						value={this.state.note}
						onChange={this.onNoteChange}
					>
					</textarea>
					<button>
						Add Expense
					</button>
				</form>
			</div>
		)
	}
}