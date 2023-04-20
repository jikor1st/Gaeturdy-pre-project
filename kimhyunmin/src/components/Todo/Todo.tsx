import React, { useState } from "react";
import { TodoItem } from "./TodoItem";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue) {
      const newTodo: Todo = {
        id: Date.now(),
        title: inputValue,
        completed: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInputValue("");
    }
  };

  const handleTodoToggle = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleTodoRemove = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>할 일들</h1>
      <div>
        <input
          type="text"
          placeholder="할 일을 입력하세요."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddTodo}>추가</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => handleTodoToggle(todo.id)}
            onRemove={() => handleTodoRemove(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
};
