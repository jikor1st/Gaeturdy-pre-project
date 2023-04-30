import { PropsWithChildren } from "react";
import { TabButton } from "./Tab.styles";
import classNames from "classnames";

type TabProps = {
  onClick?: () => void;
  isActive?: boolean;
};
const Tab = ({ onClick, isActive, children }: PropsWithChildren<TabProps>) => {
  return (
    <TabButton className={classNames({ isActive })} onClick={onClick}>
      {children}
    </TabButton>
  );
};

export default Tab;
