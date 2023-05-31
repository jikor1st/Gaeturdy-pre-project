import { PropsWithChildren } from "react";
import {
  ModalTemplateContent,
  ModalTemplateDimmer,
  ModalTemplateFooter,
  ModalTemplateFooterButton,
  ModalTemplateHeader,
  ModalTemplateHeaderTitle,
  ModalTemplateMainWrapper,
  ModalTemplateWrapper,
} from "./ModalTemplate.styles";

type ModalTemplateProps = {
  showDimmer: boolean;
  onClickDimmer?: () => void;
};
const ModalTemplate = ({
  showDimmer = true,
  onClickDimmer = () => {},
  children,
}: PropsWithChildren<ModalTemplateProps>) => {
  return (
    <ModalTemplateWrapper>
      {showDimmer && <ModalTemplateDimmer onClick={onClickDimmer} />}
      <ModalTemplateMainWrapper>{children}</ModalTemplateMainWrapper>
    </ModalTemplateWrapper>
  );
};

export default Object.assign(ModalTemplate, {
  Header: ModalTemplateHeader,
  HeaderTitle: ModalTemplateHeaderTitle,
  Content: ModalTemplateContent,
  Footer: ModalTemplateFooter,
  FooterButton: ModalTemplateFooterButton,
});
