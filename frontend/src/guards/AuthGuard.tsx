import { LoginFailed } from "../pages/LoginFailed";
import { ChildrenTypeProps } from "../types/types";

export const AuthGuard = (props: ChildrenTypeProps) => {
  const { children } = props;
    let token = localStorage.getItem('token')
  return token ? children : <LoginFailed />;
};


