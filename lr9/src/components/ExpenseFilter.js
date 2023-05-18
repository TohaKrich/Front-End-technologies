import React from 'react';

const ExpenseFilter = () => {
  const dropdownChangeHandler = (event) => {
    // Тут можна обробити зміну значення фільтру та передати його вище по ієрархії компонентів
  };

  return (
    <div>
      <label
        style={{
          color: 'white',
          textAlign: 'right',
        }}
      >
        Filter by Year
      </label>
      <select
        onChange={dropdownChangeHandler}
        style={{
          borderRadius: '5px',
          paddingLeft: '5px',
        }}
      >
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
