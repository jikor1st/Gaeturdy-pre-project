import React, { useState } from "react";
import {
  ItemWrapper,
  Item,
  DeleteButton,
  CheckboxWrapper,
} from "@/styles/TodoItemStyles";
import checkIcon from "@/assets/checkbox.svg";
import checkNoIcon from "@/assets/checkbox_nocheck.svg";
import deleteIcon from "@/assets/delete.svg";

const CheckBox = ({
  isChecked,
  handleCheck,
}: {
  isChecked: boolean;
  handleCheck: () => void;
}) => (
  <CheckboxWrapper
    onClick={handleCheck}
    style={{
      backgroundImage: `url(${isChecked ? checkIcon : checkNoIcon})`,
    }}
  />
);

interface TodoItemProps {
  todo: string;
  onRemove: () => void;
}

// TodoItem 컴포넌트는 각각의 할 일 항목을 나타냅니다.
const TodoItem = ({ todo, onRemove }: TodoItemProps) => {
  // useState(false) 를 사용하여 isChecked 라는 state를 관리하고 있습니다. 이 state는 할 일의 체크 여부를 나타냅니다.
  const [isChecked, setIsChecked] = useState(false);

  // handleCheck 함수는 체크박스의 상태를 변경하는 이벤트 핸들러입니다. 현재 isChecked 값을 반대로 설정합니다.
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  // CheckBox 컴포넌트에서 handleCheck 함수를 전달받아 체크박스의 이벤트 핸들러로 설정합니다.
  // Item 컴포넌트에 전달된 todo prop을 사용하여 할 일의 내용을 표시합니다.
  // DeleteButton 컴포넌트에서 상위 컴포넌트로부터 전달받은 onRemove 함수를 클릭 이벤트 핸들러로 설정하여 삭제 기능을 구현했습니다.
  return (
    <ItemWrapper>
      <CheckBox isChecked={isChecked} handleCheck={handleCheck} />
      <Item isChecked={isChecked}>{todo}</Item>
      <DeleteButton src={deleteIcon} alt="삭제 버튼" onClick={onRemove} />
    </ItemWrapper>
  );
};

export default TodoItem;
