import React from "react";
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddButton from "./components/AddButton";
import Counter from "./components/CounterCompo";

import './style.css';

function App(){
  return (
    <div class="todo-container">
      <Counter/>
      <Header title="TODO" />
      <TodoList value="Eat" />
      <TodoList value="Sleep" />
      <TodoList value="Code" />
      <TodoList value="Read" />
      <TodoList value="Repeat" />
      <AddButton />
    </div>
  );
}

export default App;
