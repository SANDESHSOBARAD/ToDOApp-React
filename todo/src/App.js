import Header from "./Components/Header";
import Form from "./Components/Form";
import { useState } from "react";
function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="App">
      <Header></Header>
      <Form todo = {todo} todoList ={todoList} setTodo = {setTodo} setTodoList = {setTodoList}></Form>
    </div>
  );
}

export default App;
