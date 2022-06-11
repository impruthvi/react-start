import React, { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const DUMMY_EXPENSES = [
    { id: 1, title: "Test 1", amount: 100, date: new Date(2020, 1, 1) },
    { id: 2, title: "Test 2", amount: 123, date: new Date(2020, 1, 1) },
  ];
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
