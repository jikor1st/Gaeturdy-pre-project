import styled from "styled-components";
import TextField from "@/components/common/TextField";

const TextFieldExamplePage = () => {
  return (
    <PageContainer>
      <PageWrapper>
        <TextField placeholder="Label" />
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
