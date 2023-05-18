import React, { useState } from 'react';

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [showForm, setShowForm] = useState(false);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    props.onAddExpense(expenseData);
  };

  const cancelHandler = () => {
    setTitle('');
    setAmount('');
    setDate('');
    setShowForm(false);
  };

  const showFormHandler = () => {
    setShowForm(true);
  };

  return (
    <div>
      {!showForm && (
        <button
          type="button"
          className="expense-form__button"
          onClick={showFormHandler}
          style={{
            backgroundColor: 'purple',
            borderRadius: '10px',
            fontSize: '1.2rem',
            padding: '1rem',
            color: 'white',
          }}
        >
          Add New Expense
        </button>
      )}
      {showForm && (
        <form onSubmit={submitHandler}>
          <div className="expense-form__container">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={titleChangeHandler}
              style={{
                padding: '0.5rem',
                fontSize: '1rem',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />

            <label>Amount</label>
            <input
              type="number"
              value={amount}
              onChange={amountChangeHandler}
              style={{
                padding: '0.5rem',
                fontSize: '1rem',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />

            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={dateChangeHandler}
              style={{
                padding: '0.5rem',
                fontSize: '1rem',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />

            <div className="expense-form__button">
              <button
                type="button"
                onClick={cancelHandler}
                style={{
                  backgroundColor: 'purple',
                  borderRadius: '10px',
                  fontSize: '1.2rem',
                  padding: '1rem',
                  color: 'white',
                  marginRight: '1rem',
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                style={{
                  backgroundColor: 'purple',
                  borderRadius: '10px',
                  fontSize: '1.2rem',
                  padding: '1rem',
                  color: 'white',
                }}
              >
                Add Expense
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ExpenseForm;
