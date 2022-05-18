import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';
function App() {
  const expense = [
    {id:1,title: 'Test 1',amount:100,date: new Date(2000,1,1)},
    {id:2,title: 'Test 2',amount:123,date: new Date(2001,1,1)},

  ];
  return (
    <div>
      <h2>Let's get started!</h2>
        <Expenses items={expense}/>
    </div>
  );
}

export default App;
