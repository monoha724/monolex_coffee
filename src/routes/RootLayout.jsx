import React from "react";
import { Outlet } from "react-router-dom";
import LayoutFooter from "./LayoutFooter";
import LayoutHeader from "./LayoutHeader";

function RootLayout() {
  return (
    <>
      <LayoutHeader />
      <Outlet />
      <LayoutFooter />
    </>
  );
}

export default RootLayout;
