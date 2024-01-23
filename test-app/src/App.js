import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Do the dishes">
      </Task>
      <Task title="Laundry" deadline="Tomorrow" description="Fold and tidy laundry">
      </Task>
      <Task title="Tidy" deadline="Today" description="Tidy everything else">
      </Task>
    </div>
  );
}

export default App;