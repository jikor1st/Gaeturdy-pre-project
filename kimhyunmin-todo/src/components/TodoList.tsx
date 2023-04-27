import React, { useState } from "react";
import TodoTabs from "@/components/TodoTabs";
import TodoForm from "@/components/TodoForm";
import TodoItem from "@/components/TodoItem";
import { HomeContainer, TodoWrapper, Title, Divider } from "@/styles/TodoListStyles";

interface Todo {
  id: number;
  content: string;
  isChecked: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (content: string) => {
    const newTodo: Todo = {
      id: todos.length,
      content,
      isChecked: false
    };
    setTodos([...todos, newTodo]);
  };

  const handleCheckTodo = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <HomeContainer>
      <TodoWrapper>
        <Title>2023년 4월 18일</Title>
        <TodoTabs />
        <Divider />
        <TodoForm onAddTodo={handleAddTodo} />
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            content={todo.content}
            isChecked={todo.isChecked}
            onCheck={() => handleCheckTodo(todo.id)}
            onDelete={() => handleDeleteTodo(todo.id)}
          />
        ))}
      </TodoWrapper>
    </HomeContainer>
  );
};

export default TodoList;
