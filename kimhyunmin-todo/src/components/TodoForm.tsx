import React, { useState } from "react";
import { FormWrapper, Input, Button } from "@/styles/TodoFormStyles";

interface TodoFormProps {
  onAddTodo: (content: string) => void;
}

const TodoForm = ({ onAddTodo }: TodoFormProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddTodo && onAddTodo(inputValue);
    setInputValue("");
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Input
        placeholder="할 일을 추가해주세요"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button type="submit">추가</Button>
    </FormWrapper>
  );
};

export default TodoForm;
