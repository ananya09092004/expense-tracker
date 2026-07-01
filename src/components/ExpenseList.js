import React, { useState, useEffect } from 'react';
import { getExpenses, removeExpense } from '../utils/storage';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const data = await getExpenses();
      setExpenses(data);
    };
    fetchExpenses();
  }, []);

  const handleRemoveExpense = async (id) => {
    await removeExpense(id);
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <span>{expense.date}</span>
            <span>{expense.category}</span>
            <span>${expense.amount}</span>
            <button onClick={() => handleRemoveExpense(expense.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;