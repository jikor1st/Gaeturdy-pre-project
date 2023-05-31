import styled from "styled-components";
import Button from "../Button";
import Typography from "../Typography";
import { css } from "styled-components";

export const ModalTemplateWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;

export const ModalTemplateMainWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  width: 100%;
  max-width: 450px;
  border-radius: 8px;
  ${({ theme }) => css`
    background: ${theme.color.white};
  `}
`;

export const ModalTemplateDimmer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalTemplateHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 74px;
  padding: 0 20px;
`;

export const ModalTemplateHeaderTitle = styled(Typography).attrs({
  variant: "subTitle1",
})``;

export const ModalTemplateContent = styled.div`
  padding: 0 20px;
`;

export const ModalTemplateFooter = styled.footer`
  display: flex;
  gap: 16px;
  padding: 24px 20px 20px;
`;

export const ModalTemplateFooterButton = styled(Button).attrs({
  size: "large",
  fullWidth: true,
})``;
