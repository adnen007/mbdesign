import { Outlet } from "react-router-dom";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import SingleProductPage from "./SingleProductPage";
import CartPage from "./CartPage";
import ErrorPage from "./ErrorPage";

const Outlet = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Outlet;
