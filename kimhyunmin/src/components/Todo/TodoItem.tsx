import React from "react";
import styled from "styled-components";

interface TodoItemProps {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
  onToggle: () => void;
  onRemove: () => void;
}

export const TodoItem = ({
  todo,
  onToggle,
  onRemove,
}: TodoItemProps) => {
  return (
    <TodoItemBlock>
      <TodoItemCheckbox
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
      />
      <TodoItemText completed={todo.completed}>{todo.title}</TodoItemText>
      <TodoItemButton onClick={onRemove}>삭제</TodoItemButton>
    </TodoItemBlock>
  );
};

const TodoItemBlock = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const TodoItemCheckbox = styled.input`
  margin-right: 0.5rem;
`;

interface TodoItemTextProps {
  completed: boolean;
}

const TodoItemText = styled.span<TodoItemTextProps>`
  flex: 1;
  font-size: 1rem;
  color: ${(props) => (props.completed ? "#aaa" : "#000")};
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  cursor: pointer;
`;

const TodoItemButton = styled.button`
  margin-left: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #f00;
  color: #fff;
  font-size: 0.875rem;
  cursor: pointer;
`;
