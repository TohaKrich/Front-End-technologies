import React, { useState } from 'react';
import Expenses from './components/Expenses';
import ExpenseForm from './components/ExpenseForm';
import ExpenseFilter from './components/ExpenseFilter';
import ExpenseChart from './components/ExpenseChart';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const addExpenseHandler = (expenseData) => {
    const newExpense = {
      id: Math.random().toString(),
      ...expenseData,
    };

    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <div className="expenses-container">
        <div className="expenses-list">
          <ExpenseFilter />
          <div className="expenses-chart">
            <ExpenseChart expenses={expenses} />
          </div>
          <Expenses items={expenses} />
        </div>
      </div>
    </div>
  );
};

export default App;
