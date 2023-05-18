/* eslint-disable no-undef */
import React from 'react';
import ExpenseItem from './ExpenseItem';

const Expenses = ({ items }) => {
  return (
    <div className="expenses">
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default Expenses;
