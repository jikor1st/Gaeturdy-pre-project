import React, { useState } from "react";
import { ItemWrapper, Item, DeleteButton } from "@/styles/TodoItemStyles";
import checkIcon from "@/assets/checkbox.svg";
import checkNoIcon from "@/assets/checkbox_nocheck.svg";
import deleteIcon from "@/assets/delete.svg";

interface TodoItemProps {
  content: string;
  isChecked: boolean;
  onCheck: () => void;
  onDelete: () => void;
}

const CheckBox = ({ isChecked, handleCheck }: { isChecked: boolean; handleCheck: () => void }) => (
  <input type="checkbox" checked={isChecked} onChange={handleCheck} />
);

const TodoItem = ({ content, isChecked, onCheck, onDelete }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  const handleCheck = () => {
    onCheck();
  };

  const handleDelete = () => {
    onDelete();
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedContent(e.target.value);
  };

  const handleEditKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
  };

  return (
    <ItemWrapper>
      <CheckBox isChecked={isChecked} handleCheck={handleCheck} />
      {isEditing ? (
        <input
          type="text"
          value={editedContent}
          onChange={handleEditChange}
          onKeyDown={handleEditKeyDown}
        />
      ) : (
        <Item isChecked={isChecked} onDoubleClick={handleDoubleClick}>
          {content}
        </Item>
      )}
      <DeleteButton src={deleteIcon} alt="삭제 버튼" onClick={handleDelete} />
    </ItemWrapper>
  );
};

export default TodoItem;
