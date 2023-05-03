import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  gap: 20px;
  margin-top: 40px;
`;

export const Input = styled.input`
  width: 393px;
  height: 44px;
  border-radius: 8px;
  border: 1px solid #eeeeee;
  padding: 0 16px;
  font-size: 16px;

  ::placeholder {
    color: #bdbdbd;
  }
`;

export const Button = styled.button`
  width: 59px;
  height: 44px;
  border-radius: 8px;
  background-color: #27c8ec;
  color: #ffffff;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;
