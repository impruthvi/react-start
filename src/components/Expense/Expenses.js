import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {props.items.map((expenses) => {
        return (
          <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
