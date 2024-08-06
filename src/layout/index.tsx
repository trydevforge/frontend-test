import React from "react";
import { AppBarLayout } from "./app-bar";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <AppBarLayout> {children}</AppBarLayout>
    </>
  );
};
