import ModalTemplate from "@/components/common/ModalTemplate";
import TextField from "@/components/common/TextField";
import { Modal, ModalProps } from "@/recoil/modal/modal.type";
import { useState } from "react";

type TodoItemEditModalProps = {
  todoText: string;
  onUpdate: (value: string) => void;
};

const TodoItemEditModal: React.FC<ModalProps<TodoItemEditModalProps>> = ({
  onClose,
  state,
}) => {
  const { todoText, onUpdate } = state;
  const [isChangedValue, setIsChangedValue] = useState(false);
  const [updateTodoText, setUpdateTodoText] = useState("");

  if (updateTodoText === "" && !isChangedValue) {
    setUpdateTodoText(todoText);
  }
  return (
    <ModalTemplate showDimmer>
      <ModalTemplate.Header>
        <ModalTemplate.HeaderTitle>할 일 수정</ModalTemplate.HeaderTitle>
      </ModalTemplate.Header>
      <ModalTemplate.Content>
        <TextField
          value={updateTodoText}
          onChange={(event) => {
            setIsChangedValue(true);
            setUpdateTodoText(event.target.value);
          }}
          placeholder="할 일을 입력해주세요"
        />
      </ModalTemplate.Content>
      <ModalTemplate.Footer>
        <ModalTemplate.FooterButton onClick={onClose} variant="outlineGray">
          취소
        </ModalTemplate.FooterButton>
        <ModalTemplate.FooterButton
          disabled={updateTodoText === ""}
          onClick={() => {
            onUpdate(updateTodoText);
            onClose();
          }}
        >
          수정 완료
        </ModalTemplate.FooterButton>
      </ModalTemplate.Footer>
    </ModalTemplate>
  );
};

export default {
  render: (props: ModalProps) => <TodoItemEditModal {...props} />,
} as Modal<TodoItemEditModalProps>;
