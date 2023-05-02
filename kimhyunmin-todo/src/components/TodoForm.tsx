import React, { useState } from 'react';
import { FormWrapper, Input, Button } from '@/styles/TodoFormStyles';

// interface Props: Props라는 이름의 인터페이스를 정의합니다. 이 인터페이스는 TodoForm 컴포넌트의 속성을 정의하며, 이 컴포넌트를 사용할 때 전달되어야 하는 속성의 타입을 명시합니다.
// extends React.HTMLAttributes<HTMLFormElement>: Props 인터페이스가 React.HTMLAttributes<HTMLFormElement>를 확장(상속)합니다. 이를 통해 기본 HTML form 요소의 모든 속성을 사용할 수 있게 됩니다. 예를 들어, className, id, style 등의 속성을 TodoForm 컴포넌트에 전달할 수 있습니다.
// onTodoSubmit: (todo: string) => void;: onTodoSubmit은 Props 인터페이스의 추가 속성으로, 함수 타입을 가집니다. 이 함수는 할 일 항목을 추가할 때 호출되며, 매개변수로 할 일의 문자열 값을 받습니다. 함수의 반환 타입은 void로, 반환값이 없음을 나타냅니다. 이 속성을 통해 TodoForm 컴포넌트는 할 일이 추가될 때 상위 컴포넌트로부터 전달받은 onTodoSubmit 함수를 호출할 수 있습니다.
interface Props extends React.HTMLAttributes<HTMLFormElement> {
  onTodoSubmit: (todo: string) => void;
}

// TodoForm 컴포넌트는 할 일을 입력하고 추가하는 기능을 담당합니다.
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
