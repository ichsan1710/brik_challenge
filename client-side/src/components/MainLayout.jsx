import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <SideBar />
    </>
  );
}

export default MainLayout;
