import ExpenseItem from './components/ExpenseItem'
function App() {
  const expense = [
    {id:1,title: 'Test 1',amount:100,date: new Date(2000,1,1)},
    {id:2,title: 'Test 2',amount:123,date: new Date(123,1,1)},

  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date}></ExpenseItem>
      <ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date}></ExpenseItem>
    </div>
  );
}

export default App;
