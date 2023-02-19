import React from 'react';
import { useState } from "react";
import './style.css';

const Tasks = () => {
  
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const removeTodo = (arrayList) => {
    const newArrayList = todos.filter((todo) => {
      return todo !== arrayList;
    });
    setTodos(newArrayList);
  };
 
  return (
    <div className='wrapper'>
      <h1 className='title'>List</h1>

      <div className='forInput'>
      <input
        type="text"
        name="todo"
        value={todo}
        placeholder="Create a new todo"
        onChange={(e) => {
        setTodo(e.target.value);
        }}
      />
        <button onClick={addTodo}>Add</button>

        <ul>
          {todos.map((todo, index) => (
            <div className="todoList">
              <li key={index}>{todo}</li>
              <button onClick={()=>{removeTodo(todo)}} >Delete</button>
            </div>
          ))}
        </ul>

      </div>
    </div>
  );
};


export default Tasks;
