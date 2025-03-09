import { Outlet } from "react-router";
import Navbar from "./NavBar";


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
