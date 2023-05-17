import Icon, { IconType } from "../Icon";
import {
  HeaderContainer,
  HeaderTitle,
  HeaderWrapper,
  StyledIconButton,
} from "./CommonHeader.styles";
import CommonLayout from "../CommonLayout";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type CommonHeaderProps = {};

const CommonHeader = ({ children }: PropsWithChildren) => {
  return (
    <HeaderContainer>
      <CommonLayout.Container>
        <CommonLayout.Wrapper>
          <HeaderWrapper>{children}</HeaderWrapper>
        </CommonLayout.Wrapper>
      </CommonLayout.Container>
    </HeaderContainer>
  );
};

type IconButtonProps = {
  icon: IconType;
} & ButtonHTMLAttributes<HTMLButtonElement>;
const IconButton = ({ icon, ...buttonProps }: IconButtonProps) => {
  return (
    <StyledIconButton {...buttonProps}>
      <Icon icon={icon} />
    </StyledIconButton>
  );
};
type MenuButtonProps = Omit<IconButtonProps, "icon">;
const MenuButton = ({ ...buttonProps }: MenuButtonProps) => {
  return <IconButton icon="Menu" {...buttonProps} />;
};

CommonHeader.Title = HeaderTitle;
CommonHeader.IconButton = IconButton;
CommonHeader.MenuButton = MenuButton;

export default CommonHeader;
