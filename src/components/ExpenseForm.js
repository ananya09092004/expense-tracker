import React, { useState } from 'react';
import { saveExpense } from '../utils/storage';

const ExpenseForm = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  const handleSubmit = (event) => {
    event.preventDefault();
    const expense = { description, amount, date };
    saveExpense(expense);
    setDescription('');
    setAmount(0);
    setDate(new Date().toISOString().slice(0, 10));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Description:
        <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
      </label>
      <label>
        Amount:
        <input type="number" value={amount} onChange={(event) => setAmount(event.target.valueAsNumber)} />
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
      </label>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;