// TodoForm.tsx
import React, { useState } from 'react';
import { FormWrapper, Input, Button } from '@/styles/TodoFormStyles';

interface Props extends React.HTMLAttributes<HTMLFormElement> {
  onTodoSubmit: (todo: string) => void;
}

function TodoForm({ onTodoSubmit, ...props }: Props) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onTodoSubmit(inputValue);
      setInputValue('');
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit} {...props}>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="할 일을 추가해주세요"
      />
      <Button type="submit">추가</Button>
    </FormWrapper>
  );
}

export default TodoForm;
