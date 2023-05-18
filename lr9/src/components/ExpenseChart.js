import React from 'react';

const ExpenseChart = ({ expenses }) => {
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth(); // Припустимо, що значення місяця знаходиться в індексі 0-11
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  const chartBars = chartDataPoints.map((dataPoint) => (
    <div key={dataPoint.label}>
      <div>{dataPoint.label}</div>
      <div>{dataPoint.value}</div>
      <div className="chart-bar">
        <div
          className="chart-bar__fill"
          style={{ height: `${dataPoint.value/10}px` }}
        ></div>
      </div>
    </div>
  ));

  return <div className="chart">{chartBars}</div>;
};

export default ExpenseChart;
