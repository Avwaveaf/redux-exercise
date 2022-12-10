import { TodoList } from "./components/todos/todos.list.component";
import { GoalsList } from "./components/goals/goals.list.component";
function App() {
  return (
    <div className="App">
      <GoalsList />
      <TodoList />
    </div>
  );
}

export default App;
