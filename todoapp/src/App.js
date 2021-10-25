import "./App.css";
import { InputForm } from "./components/InputForm";
import { Title } from "./components/Title";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="body">
      <Title />
      <InputForm />
      <TodoList />
    </div>
  );
}

export default App;
