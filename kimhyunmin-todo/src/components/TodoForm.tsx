import React, { useState } from "react";
import { FormWrapper, Input, Button } from "@/styles/TodoFormStyles";

// interface: TypeScript에서 interface는 객체의 타입을 정의하는 방법 중 하나입니다. 인터페이스 이름은 일반적으로 첫 글자를 대문자로 하여 PascalCase로 작성합니다.
// interface OnTodoSubmitProps: OnTodoSubmitProps라는 이름의 인터페이스를 정의합니다. 이 인터페이스는 TodoForm 컴포넌트의 속성을 정의하며, 이 컴포넌트를 사용할 때 전달되어야 하는 속성의 타입을 명시합니다.
// onTodoSubmit: (todo: string) => void;: onTodoSubmit은 Props 인터페이스의 추가 속성으로, 함수 타입을 가집니다. 이 함수는 할 일 항목을 추가할 때 호출되며, 매개변수로 할 일의 문자열 값을 받습니다. 함수의 반환 타입은 void로, 반환값이 없음을 나타냅니다. 이 속성을 통해 TodoForm 컴포넌트는 할 일이 추가될 때 상위 컴포넌트로부터 전달받은 onTodoSubmit 함수를 호출할 수 있습니다.
interface OnTodoSubmitProps {
  onTodoSubmit: (todo: string) => void;
}

// TodoForm 컴포넌트는 할 일을 입력하고 추가하는 기능을 담당합니다.
const TodoForm = ({ onTodoSubmit }: OnTodoSubmitProps) => {
  // useState('') 를 사용하여 inputValue라는 state를 관리하고 있습니다. 이 state는 입력받은 할 일의 내용을 저장합니다.
  const [inputValue, setInputValue] = useState("");
  // 입력 필드의 아웃라인 색상을 관리할 새로운 상태
  const [isInputEmpty, setIsInputEmpty] = useState(false);
  // handleSubmit 함수는 할 일을 추가하는 이벤트 핸들러입니다. 입력된 내용이 있으면 상위 컴포넌트로부터 전달받은 onTodoSubmit 함수를 호출하여 할 일을 추가합니다.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onTodoSubmit(inputValue);
      setInputValue("");
      setIsInputEmpty(false);
    } else {
      setIsInputEmpty(true);
    }
  };

  // FormWrapper 컴포넌트에서 onSubmit 이벤트로 handleSubmit 함수를 바인딩하고 Input컴포넌트에서 입력된 값을 inputValue state에 저장합니다.
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          setIsInputEmpty(false);
        }}
        placeholder="할 일을 추가해주세요"
        style={{
          borderColor: isInputEmpty ? "#ff9898" : "#eeeeee",
        }}
      />
      <Button type="submit">추가</Button>
    </FormWrapper>
  );
};

export default TodoForm;
