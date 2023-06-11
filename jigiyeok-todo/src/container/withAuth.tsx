import useUserData from "@/hooks/Auth/useUserState";
import { ComponentType } from "react";

const withAuth = <P extends object>(
  Component: ComponentType<P>
): React.FC<P> => {
  const WithAuthComponent = (props: any) => {
    const { isLoading } = useUserData();
    if (isLoading) return <></>;

    return <Component {...props} />;
  };

  return WithAuthComponent;
};

export default withAuth;
