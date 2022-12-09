import React, { useState } from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";
import TodoList from "./components/TodoList";
import { Todo } from "./models/models";





const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      //for update
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      //for empty
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;






// import Welcome from "./Welcome";
// import UserForm from "./UserForm";
// import { Hooks } from "./Hooks";
// import { Render } from "./Render";




// function sum(a: number, b: number) {
//   return a + b;
// }

// interface Iprop {
//   a: number;
//   b: number;
// }

// function Sum1(props: Iprop) {
//   return <>{props.a + props.b}</>;
// }
