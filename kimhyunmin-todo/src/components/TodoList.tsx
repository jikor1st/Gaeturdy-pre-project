import React, { useState, useEffect } from "react";
import TodoTabs from "@/components/TodoTabs";
import TodoForm from "@/components/TodoForm";
import TodoItem from "@/components/TodoItem";
import {
  HomeContainer,
  TodoWrapper,
  Title,
  Divider,
} from "@/styles/TodoListStyles";

// TodoList는 프로젝트의 가장 상위 컴포넌트로, 여기서는 Todo 항목을 추가하고 삭제하는 기능을 구현했습니다.
const TodoList = () => {
  // 이 useState에서는 useState<string[]>([])를 사용하여 todos라는 state를 관리하고 있습니다. 이 state는 문자열의 배열로 각각의 문자열은 할 일의 내용을 나타냅니다. ([]) 은 'useState'의 인자로 빈 배열을 전달하여 초기 상태값을 설정합니다. 이 상태값은 빈 문자열 배열로 초기화됩니다.
  const [todos, setTodos] = useState<string[]>(() => {
    // LocalStorage에서 이전에 저장된 할 일 목록을 가져옵니다.
    const savedTodos = localStorage.getItem("todos");
    // 저장된 할 일 목록이 있다면 JSON 형식으로 파싱하여 반환하고, 없다면 빈 배열을 반환합니다.
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // todos 상태가 변경될 때마다 LocalStorage에 저장합니다.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // addTodo 함수는 새로운 할 일을 추가하는 함수입니다. 인자로 받은 할 일(Todo)을 기존의 todos 배열에 추가합니다.
  const addTodo = (todo: string) => {
    setTodos([...todos, todo]);
  };
  // removeTodo 함수는 할 일을 삭제하는 함수입니다. 인자로 받은 index를 기반으로 해당 index의 할 일을 삭제합니다. 인덱스는 i로 표시됩니다. 이 함수는 i !== index 조건식을 반환합니다. 즉, 현재 인덱스 i가 삭제하려는 인덱스 index와 같지 않은 경우에만 true를 반환하며, 이러한 조건에 맞는 요소들만 추출하여 새로운 배열을 생성합니다. 따라서 removeTodo 함수는 인덱스 값을 매개변수로 받아, 해당 인덱스의 항목을 제외한 나머지 항목으로 구성된 새로운 배열을 생성하고 이를 setTodos 를 통해 할 일 목록으로 설정합니다. 이렇게 함으로써 특정 인덱스의 할 일 항목이 삭제됩니다.
  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  // TodoForm 컴포넌트에 onTodoSubmit prop으로 addTodo 함수를 전달합니다. 이를 통해 TodoForm에서 작성된 할 일을 추가할 수 있습니다.
  // todos.map() 을 사용하여 todos 배열에 있는 각 할 일에 대해 TodoItem 컴포넌트를 렌더링합니다. 이때 key, todo, onRemove props 를 전달합니다.
  return (
    <HomeContainer>
      <TodoWrapper>
        <Title>
          {new Intl.DateTimeFormat("ko-KR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(new Date())}
        </Title>
        <TodoTabs />
        <Divider />
        <TodoForm onTodoSubmit={addTodo} />
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onRemove={() => removeTodo(index)}
          />
        ))}
      </TodoWrapper>
    </HomeContainer>
  );
};

export default TodoList;
