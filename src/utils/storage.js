export const saveExpense = (expense) => {
  const expenses = getExpenses();
  expenses.push(expense);
  localStorage.setItem('expenses', JSON.stringify(expenses));
};

export const getExpenses = () => {
  const expenses = localStorage.getItem('expenses');
  return expenses ? JSON.parse(expenses) : [];
};

export const deleteExpense = (id) => {
  const expenses = getExpenses();
  const filteredExpenses = expenses.filter((expense) => expense.id !== id);
  localStorage.setItem('expenses', JSON.stringify(filteredExpenses));
};

export const updateExpense = (id, updatedExpense) => {
  const expenses = getExpenses();
  const index = expenses.findIndex((expense) => expense.id === id);
  if (index !== -1) {
    expenses[index] = updatedExpense;
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }
};