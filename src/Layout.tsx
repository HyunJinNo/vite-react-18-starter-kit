import { Outlet } from "react-router";
import Header from "./components/common/Header";

const Layout = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
