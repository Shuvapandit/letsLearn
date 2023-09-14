import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/Shared/ScrollToTop/ScrollToTop";
const main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <ScrollToTop />
      <Footer/>
    </div>
  );
};
export default main;
