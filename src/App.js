import React from "react";
import Expenses from './components/Expense/Expenses';
import NewExpense from "./components/NewExpense/NewExpense"
const  App = () =>{
  const expense = [
    {id:1,title: 'Test 1',amount:100,date: new Date(2000,1,1)},
    {id:2,title: 'Test 2',amount:123,date: new Date(2001,1,1)},

  ];
  return (
    <div>
        <NewExpense />
        <Expenses items={expense}/>
    </div>
  );
}

export default App;
