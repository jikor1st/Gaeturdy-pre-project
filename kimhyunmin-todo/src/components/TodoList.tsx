import React from "react";
import TodoTabs from '@/components/TodoTabs';
import TodoForm from '@/components/TodoForm';
import TodoItem from '@/components/TodoItem';
import { HomeContainer, TodoWrapper, Title, Divider } from "@/styles/TodoListStyles";


const TodoList = () => {
    return (
      <HomeContainer>
        <TodoWrapper>
          <Title>2023년 4월 18일</Title>
          <TodoTabs />
          <Divider />
          <TodoForm />
          <TodoItem/>
          <TodoItem/>
          <TodoItem/>
          <TodoItem/>
          <TodoItem/>
          <TodoItem/>
        </TodoWrapper>
      </HomeContainer>
        
      );
}

export default TodoList;
