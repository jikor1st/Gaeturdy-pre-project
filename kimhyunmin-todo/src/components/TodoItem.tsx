import React, { useState } from "react";
import { ItemWrapper, CheckBox, Item, DeleteButton } from "@/styles/TodoItemStyles";
import checkIcon from "@/assets/checkbox.svg";
import checkNoIcon from "@/assets/checkbox_nocheck.svg";
import deleteIcon from "@/assets/delete.svg";

const TodoItem = () => {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheck = () => {
        setIsChecked(!isChecked);
    };

    return (
        <ItemWrapper>
            <CheckBox src={isChecked ? checkIcon : checkNoIcon} alt="체크 박스" onClick={handleCheck} />
            <Item isChecked={isChecked}>할 일의 내용</Item>
            <DeleteButton src={deleteIcon} alt="삭제 버튼" />
        </ItemWrapper>
    );
};

export default TodoItem;