import React from "react";
import Navigation from "../../components/Navigation";
type LayoutT = {
  children: React.ReactNode;
};
const layout = ({ children }: LayoutT) => {
  return (
    <main className="h-full">
      <Navigation />
      {children}
    </main>
  );
};

export default layout;
