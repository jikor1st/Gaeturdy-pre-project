import styled from "styled-components";
import TextField from "@/components/common/TextField";
import Icon from "@/components/common/Icon";
import { useState } from "react";
import HelperText from "@/components/common/HelperText";

type FormType = {
  value: string;
  error: boolean;
};

const formValueMaxLength = 100;

const TextFieldExamplePage = () => {
  const [form, setForm] = useState<FormType>({
    value: "",
    error: true,
  });

  const handleSetForm = <P extends keyof FormType>(
    key: P,
    value: FormType[P]
  ) => {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
  };

  return (
    <PageContainer>
      <PageWrapper>
        <InlineTextFieldContainer>
          <TextField
            error={form.error}
            maxLength={formValueMaxLength}
            placeholder="Label*"
            value={form.value}
            leftIcon={<Icon icon="SystemHeart" />}
            rightIcon={<Icon icon="SystemEye" />}
            onChange={(event) => {
              handleSetForm("value", event.target.value);
            }}
          />
          <TextFieldHelperWrapper>
            <HelperText>Helper Message</HelperText>
            <HelperText>
              {form.value.length} / {formValueMaxLength}
            </HelperText>
          </TextFieldHelperWrapper>
        </InlineTextFieldContainer>
      </PageWrapper>
    </PageContainer>
  );
};

export default TextFieldExamplePage;

const PageContainer = styled.div`
  padding: 0 20px;
`;
const PageWrapper = styled.div`
  max-width: 760px;
  margin: 0 auto;
`;

const InlineTextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
`;

const TextFieldHelperWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  margin-top: 8px;
`;
