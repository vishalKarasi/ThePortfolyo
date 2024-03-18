import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import CustomCursor from "../CustomCursor/CustomCursor";
import { useData } from "../../context/dataContext";

const Layout = () => {
  const { userData, status } = useData();
  return (
    <>
      {status === "loading" || !userData ? (
        <Preloader />
      ) : (
        <div>
          <CustomCursor />
          <Header />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
};
export default Layout;
