import Header from "./Components/Header";
import Form from "./Components/Form";
import { useState } from "react";
import TodoList from "./Components/TodoList";
function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="App">
      <Header></Header>
      <Form todo = {todo} todoList ={todoList} setTodo = {setTodo} setTodoList = {setTodoList}></Form>
     <TodoList setTodoList ={setTodoList} todoList={todoList} />
    </div>
  );
}

export default App;
