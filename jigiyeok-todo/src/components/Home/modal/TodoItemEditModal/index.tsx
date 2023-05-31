import ModalTemplate from "@/components/common/ModalTemplate";
import TextField from "@/components/common/TextField";
import { Modal, ModalProps } from "@/recoil/modal/modal.type";

type TodoItemEditModalProps = {};

const TodoItemEditModal: React.FC<ModalProps<TodoItemEditModalProps>> = ({
  onClose,
  state,
}) => {
  return (
    <ModalTemplate showDimmer>
      <ModalTemplate.Header>
        <ModalTemplate.HeaderTitle>할 일 수정</ModalTemplate.HeaderTitle>
      </ModalTemplate.Header>
      <ModalTemplate.Content>
        <TextField placeholder="할 일을 입력해주세요" />
      </ModalTemplate.Content>
      <ModalTemplate.Footer>
        <ModalTemplate.FooterButton variant="outlineGray">
          취소
        </ModalTemplate.FooterButton>
        <ModalTemplate.FooterButton>수정 완료</ModalTemplate.FooterButton>
      </ModalTemplate.Footer>
    </ModalTemplate>
  );
};

export default {
  render: (props: ModalProps) => <TodoItemEditModal {...props} />,
} as Modal<TodoItemEditModalProps>;
