import { ChangeEventHandler, useEffect, useRef, useState } from "react";
import CheckBox from "../CheckBox";
import {
  TodoItemWrapper,
  TodoItemTitle,
  TodoItemContentWrapper,
  TodoModifyButtonWrapper,
  TodoModifyButton,
  TodoItemDateWrapper,
  TodoItemInfoWrapper,
  TodoItemCheckBoxWrapper,
} from "./TodoItem.styles";
import Icon from "../Icon";
import classNames from "classnames";
import Typography from "../Typography";
import useSlider from "@/hooks/common/useSlider";
import useTodoModal from "@/hooks/Todo/useTodoModal";

type TodoItemProps = {
  title: string;
  checked?: boolean;
  onChangeChecked?: ChangeEventHandler<HTMLInputElement>;
  onDelete?: () => void;
};
const TodoItem = ({
  title,
  checked,
  onChangeChecked,
  onDelete,
}: TodoItemProps) => {
  const { registerEvent } = useSlider({
    width: 96,
  });

  const { open } = useTodoModal();
  const openTodoEditModal = () => {
    open("todoItemEdit", {
      state: {},
    });
  };
  const openTodoDeleteModal = () => {
    open("todoItemDelete", {
      state: {},
    });
  };

  return (
    <TodoItemWrapper
      {...registerEvent}
      className={classNames({
        checked,
      })}
    >
      <TodoItemContentWrapper>
        <TodoItemCheckBoxWrapper>
          <CheckBox checked={checked} onChange={onChangeChecked} />
        </TodoItemCheckBoxWrapper>
        <TodoItemInfoWrapper>
          <TodoItemTitle variant="subTitle2">{title}</TodoItemTitle>
          <TodoItemDateWrapper>
            <Icon icon="Calendar" />
            <Typography variant="caption1">2023.04.18 14:02</Typography>
          </TodoItemDateWrapper>
        </TodoItemInfoWrapper>
      </TodoItemContentWrapper>
      <TodoModifyButtonWrapper>
        <TodoModifyButton
          className="edit"
          onClick={() => {
            openTodoEditModal();
          }}
        >
          <Icon icon="Edit" />
        </TodoModifyButton>
        <TodoModifyButton
          className="delete"
          onClick={() => {
            openTodoDeleteModal();
          }}
        >
          <Icon icon="Trash" />
        </TodoModifyButton>
      </TodoModifyButtonWrapper>
    </TodoItemWrapper>
  );
};

export default TodoItem;
