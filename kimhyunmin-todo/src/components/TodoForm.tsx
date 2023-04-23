import React from "react";
import { FormWrapper, Input, Button } from "@/styles/TodoFormStyle";

const TodoForm = () => {
  return (
    <FormWrapper>
      <Input placeholder="할 일을 추가해주세요" />
      <Button>추가</Button>
    </FormWrapper>
  );
};

export default TodoForm;
