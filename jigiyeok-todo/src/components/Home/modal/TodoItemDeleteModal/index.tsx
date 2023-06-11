import ModalTemplate from "@/components/common/ModalTemplate";
import { Modal, ModalProps } from "@/recoil/modal/modal.type";
import { DeleteModalSubText } from "./TodoItemDeleteModal.styles";

type TodoItemDeleteModalProps = {
  onDelete: () => void;
};

const TodoItemDeleteModal: React.FC<ModalProps<TodoItemDeleteModalProps>> = ({
  onClose,
  state,
}) => {
  const { onDelete } = state;
  return (
    <ModalTemplate showDimmer>
      <ModalTemplate.Header>
        <ModalTemplate.HeaderTitle>할 일 삭제</ModalTemplate.HeaderTitle>
      </ModalTemplate.Header>
      <ModalTemplate.Content>
        <DeleteModalSubText>할 일을 삭제하시겠습니까?</DeleteModalSubText>
      </ModalTemplate.Content>
      <ModalTemplate.Footer>
        <ModalTemplate.FooterButton onClick={onClose} variant="outlineGray">
          취소
        </ModalTemplate.FooterButton>
        <ModalTemplate.FooterButton
          onClick={() => {
            onDelete();
            onClose();
          }}
          variant="fillRed"
        >
          삭제
        </ModalTemplate.FooterButton>
      </ModalTemplate.Footer>
    </ModalTemplate>
  );
};

export default {
  render: (props: ModalProps) => <TodoItemDeleteModal {...props} />,
} as Modal<TodoItemDeleteModalProps>;
