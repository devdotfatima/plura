import React from "react";
type AuthLayoutT = {
  children: React.ReactNode;
};
const AuthLayout = ({ children }: AuthLayoutT) => {
  return (
    <div className="h-full flex items-center justify-center">{children}</div>
  );
};

export default AuthLayout;
