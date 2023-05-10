import styled from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

export const CheckBox = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 12px;
  cursor: pointer;
`;

export const Item = styled.div<{ isChecked: boolean }>`
  flex: 1;
  font-size: 16px;
  color: ${({ isChecked }) => (isChecked ? "#BDBDBD" : "#424242")};
`;

export const CheckboxWrapper = styled.div`
  width: 36px;
  height: 36px;
  background-size: cover;
  cursor: pointer;
  margin-right: 10px;
`;

export const DeleteButton = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
