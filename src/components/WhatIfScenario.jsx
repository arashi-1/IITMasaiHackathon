import { useState } from "react";

export const WhatIfScenario = () => {
  const [income, setIncome] = useState(50000);
  const [expenses, setExpenses] = useState(20000);

  const savings = income - expenses;

  return (
    <div className="what-if-scenario">
      <h3>What If Scenario</h3>
      <div className="space-y-2">
        <label>Income: ₹{income}</label>
        <input
          type="range"
          min="10000"
          max="100000"
          value={income}
          onChange={(e) => setIncome(+e.target.value)}
        />

        <label>Expenses: ₹{expenses}</label>
        <input
          type="range"
          min="5000"
          max="80000"
          value={expenses}
          onChange={(e) => setExpenses(+e.target.value)}
        />

        <div className="result">Projected Monthly Savings: ₹{savings}</div>
      </div>
    </div>
  );
};
