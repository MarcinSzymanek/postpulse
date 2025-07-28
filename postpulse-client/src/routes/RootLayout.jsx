import MainHeader from "../components/core/MainHeader";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}
