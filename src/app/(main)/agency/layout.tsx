import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

type LayoutT = {
  children: React.ReactNode;
};
const layout = ({ children }: LayoutT) => {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <main className="h-full">{children}</main>
    </ClerkProvider>
  );
};

export default layout;
