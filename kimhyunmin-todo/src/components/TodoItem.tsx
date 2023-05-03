import React, { useState } from "react";
import { ItemWrapper, Item, DeleteButton } from "@/styles/TodoItemStyles";
import checkIcon from "@/assets/checkbox.svg";
import checkNoIcon from "@/assets/checkbox_nocheck.svg";
import deleteIcon from "@/assets/delete.svg";

const CheckBox = ({ isChecked, handleCheck }: { isChecked: boolean, handleCheck:() => void}) => (
  <input type="checkbox" checked={isChecked} onChange={handleCheck} />
);

const TodoItem = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <ItemWrapper>
      <CheckBox isChecked={isChecked} handleCheck={handleCheck} />
      <Item isChecked={isChecked}>할 일의 내용</Item>
      <DeleteButton src={deleteIcon} alt="삭제 버튼" />
    </ItemWrapper>
  );
};

export default TodoItem;
