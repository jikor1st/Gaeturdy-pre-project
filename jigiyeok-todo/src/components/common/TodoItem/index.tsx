import { ChangeEventHandler } from "react";
import CheckBox from "../CheckBox";
import {
  TodoItemWrapper,
  TodoCheckBoxWrapper,
  TodoItemTitle,
  TodoDeleteIconButton,
} from "./TodoItem.styles";
import Icon from "../Icon";
import classNames from "classnames";

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
  return (
    <TodoItemWrapper
      className={classNames({
        checked,
      })}
    >
      <TodoCheckBoxWrapper>
        <CheckBox checked={checked} onChange={onChangeChecked} />
      </TodoCheckBoxWrapper>
      <TodoItemTitle variant="subTitle2">{title}</TodoItemTitle>
      <TodoDeleteIconButton className="todo-item__delete" onClick={onDelete}>
        <Icon icon="Trash" />
      </TodoDeleteIconButton>
    </TodoItemWrapper>
  );
};

export default TodoItem;
