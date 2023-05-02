import React, { useState } from "react";
import { ItemWrapper, Item, DeleteButton } from "@/styles/TodoItemStyles";
import checkIcon from "@/assets/checkbox.svg";
import checkNoIcon from "@/assets/checkbox_nocheck.svg";
import deleteIcon from "@/assets/delete.svg";

const CheckBox = ({ isChecked, handleCheck }: { isChecked: boolean, handleCheck:() => void}) => (
  <input type="checkbox" checked={isChecked} onChange={handleCheck} />
);

interface TodoItemProps extends React.HTMLAttributes<HTMLDivElement> {
  todo: string;
  onRemove: () => void;
}

const TodoItem = ({ todo, onRemove, ...props }: TodoItemProps) => {
  
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <ItemWrapper {...props}>
      <CheckBox isChecked={isChecked} handleCheck={handleCheck} />
      <Item isChecked={isChecked}>{todo}</Item>
      <DeleteButton
        src={deleteIcon}
        alt="삭제 버튼"
        onClick={onRemove}
      />
    </ItemWrapper>
  );
};

export default TodoItem;
