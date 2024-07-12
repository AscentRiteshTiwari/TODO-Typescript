
import './App.css';
import Todos from './Components/Todos';
import Todo from './models/todo';
import NewTodo from './Components/NewTodo';
import TodosContextProvider from './Components/Store/TodoContext';

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
