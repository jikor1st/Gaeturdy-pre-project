import React from "react";
import TodoTabs from '@/components/TodoTabs';
import TodoForm from '@/components/TodoForm';
import TodoItem from '@/components/TodoItem';
import { TodoWrapper, Title, Divider } from "@/styles/TodoListStyles";


const TodoList = () => {
    return (
        <TodoWrapper>
          <Title>2023년 4월 18일</Title>
          <TodoTabs />
          <Divider />
          <TodoForm />
          <TodoItem/>
        </TodoWrapper>
      );
}

export default TodoList;
